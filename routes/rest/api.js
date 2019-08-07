var express = require('express');

const db = require('../../param/models');

var router = express.Router();

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/**
 * @GET /api/
 */
router.get('/', function(req, res, next) {

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
        paramQuerySQL.limit = parseInt(limit);
    }

    // offset
    if (offset != '' && typeof offset !== 'undefined' && offset > 0) {
        paramQuerySQL.offset = parseInt(offset);
    }

    db.api.findAndCountAll(paramQuerySQL).then(apis => res.json({
        error: false,
        count: apis.count,
        data: apis.rows,
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
});

/**
 * @GET /api/1
 */
router.get('/:id', function(req, res, next) {
    const apiId = req.params.id;
    db.api.findOne({ where: { id: apiId } }).then(api => res.json({
        error: false,
        data: api,
    }));
});

/**
 * @POST /api/
 */
router.post('/', function(req, res, next) {
    const {
        name,
        created_at,
        updated_at
    } = req.body;

    db.api.create({
        name: name,
        created_at: created_at,
        updated_at: updated_at
    })
    .then(api => res.status(201).json({
        error: false,
        data: api,
        message: 'New api created.'
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
});

/**
 * @PUT /api/1 - update
 */
router.put('/:id', function(req, res, next) {

    const apiId = req.params.id;

    const {
        name,
        created_at,
        updated_at
    } = req.body;

    db.api.update({
        name: name,
        created_at: created_at,
        updated_at: updated_at
    },{
        where: {
            id: apiId
        }
    })
    .then(todo => res.status(201).json({
        error: false,
        message: 'Api updated.'
    }))
    .catch(error => res.json({
        error: true,
        error: error
    }));
});

/**
 * @DELETE /api/1 - Delete
 */
router.delete('/:id', function(req, res, next) {
    const apiId = req.params.id;

    db.api.destroy({ where: { id: apiId } })
        .then(api => res.json({
            error: false,
            message: 'Api deleted.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;
