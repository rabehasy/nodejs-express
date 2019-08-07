var express = require('express');

var authenticate = require('../../config/middleware/authenticate')
var passport = require('../../config/passport')

const db = require('../../param/models');

var router = express.Router();

var cors = require('cors');

/**
 * @GET /api/event
 */
router.get('/', authenticate.verifyUser,  async (req, res, next) => {

    let offsetInt = 0;
    let limitInt = 0;

    // queryStrings
    let {name, order, sort, limit, offset } = req.query;
    let paramQuerySQL = {};

    // sort par defaut si param vide ou inexistant
    if (typeof sort === 'undefined' || sort == '') {
        sort = 'ASC';
    }

    // Si sort n'est pas vide et n'est ni asc ni desc
    if (typeof sort !== 'undefined' && !['asc','desc'].includes(sort.toLowerCase())) {
        sort = 'ASC';
    }

    // Recherche LIKE '%%'
    if (name != '' && typeof name !== 'undefined') {
        paramQuerySQL.where = {
            name: {
                [Op.like]: '%' + name + '%'
            }
        }

    }

    // order by
    if (order != '' && typeof order !== 'undefined' && ['name'].includes(order.toLowerCase())) {
        paramQuerySQL.order = [
            [order, sort]
        ];
    }

    // limit
    if (limit != '' && typeof limit !== 'undefined' && limit > 0) {
        limitInt = parseInt(limit);
        paramQuerySQL.limit = limitInt;
    }

    // offset
    if (offset != '' && typeof offset !== 'undefined' && offset > 0) {
        offsetInt = parseInt(offset);
        paramQuerySQL.offset = offsetInt;
    }

    let n = await db.event.count();

    // if total rows > 100 and query limit is not set --> force limit=100
    if (n>100 && typeof paramQuerySQL.limit === 'undefined') {
        limitInt = 100;
        paramQuerySQL.limit = limitInt;
    }

    let entities = await db.event.findAndCountAll(paramQuerySQL);

    // count rows
    let totalInt = entities.count;

    // next offset
    let nextOffset = offsetInt+limitInt;

    // prev offset
    let prevOffset = offsetInt-limitInt;

    // query string
    let requestUri = req.originalUrl;

    let requestUriNext = requestUri + '&offset=' + nextOffset;
    let requestUriPrev = requestUri + '&offset=' + prevOffset;

    if (/offset=[0-9]*/.test(requestUri)) {
        requestUriNext = requestUri.replace(/offset=[0-9]*/g, 'offset=' + nextOffset);
    }
    if (/offset=[0-9]*/.test(requestUri)) {
        requestUriPrev = requestUri.replace(/offset=[0-9]*/g, 'offset=' + prevOffset);
    }

    let baseUrl = req.protocol + '://' + req.get('host') + requestUri;
    let nextUrl = req.protocol + '://' + req.get('host') + requestUriNext;
    let prevUrl = req.protocol + '://' + req.get('host') + requestUriPrev;


    if (nextOffset >= totalInt ) {
        nextUrl = '';
    }
    if (prevOffset <= 0 ) {
        prevUrl = '';
    }


    res.json({
        error: false,
        count: totalInt,
        currenturl: baseUrl,
        nexturl: nextUrl,
        prevurl: prevUrl,
        paramQuerySQL: paramQuerySQL,
        data: entities.rows,
    });
});

/**
/**
 * @GET /api/event/1
 */
router.get('/:id', authenticate.verifyUser, authenticate.verifyAdmin, function(req, res, next) {
    const id = req.params.id;
    db.event.findOne({ include: [
            { model: db.entree },
            { model: db.api },
            { model: db.flyers },
            { model: db.lieu },
            { model: db.thematique },
            { model: db.artistes },
            { model: db.date },
            { model: db.common_event },
            'eventRelated'
        ], where: { id: id } }).then(api => res.json({
        error: false,
        data: api
    }));
});


/**
 * @PUT /api/event/1 - update
 */
router.put('/:id', function(req, res, next) {


});

/**
 * @DELETE /api/event/1 - Delete
 */
router.delete('/:id', function(req, res, next) {

});

module.exports = router;
