var express = require('express');

var authenticate = require('../../config/middleware/authenticate')
var passport = require('../../config/passport')

const db = require('../../models');

var router = express.Router();

var cors = require('cors');

/**
 * @GET /api/event
 */
router.get('/', authenticate.verifyUser,  function(req, res, next) {
    db.event.findAll(
        {
            /*include: [
                { model: db.entree },
                { model: db.api },
                { model: db.flyers },
                { model: db.lieu },
                { model: db.thematique },
                { model: db.artistes },
                { model: db.date },
                { model: db.common_event },
                'eventRelated'
            ],*/
            limit: 100 })
        .then((users) => {
            res.json(users);
        }, (err) => next(err))
        .catch((err) => next(err));
});

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
