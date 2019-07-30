var express = require('express');

var authenticate = require('../../config/middleware/authenticate')
var passport = require('../../config/passport')

const db = require('../../models');

var router = express.Router();

var cors = require('cors');

/**
 * @GET /api/user/me
 */
router.get('/me',authenticate.verifyUser, cors(),  function(req, res, next) {
    res.json({
        error: false,
        data: req.user
    });
});

/**
 * @GET /api/user
 */
router.get('/', authenticate.verifyUser,  function(req, res, next) {
    db.fos_user.findAll()
        .then((users) => {
            res.json(users);
        }, (err) => next(err))
        .catch((err) => next(err));
});

/**
 * @GET /api/user/1
 */
router.get('/:id', authenticate.verifyUser, authenticate.verifyAdmin, function(req, res, next) {
    const userId = req.params.id;
    db.fos_user.findOne({ where: { id: userId } }).then(api => res.json({
        error: false,
        data: api
    }));
});

/**
 * @POST /api/user/login
 */
router.post('/login', cors(), function(req, res, next) {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        // console.log(user);
        if (err || !user) {
            return res.status(401).json({
                message: 'Something is not right',
                user   : user
            });
        }
        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }


            var token = authenticate.getToken({_id: user.id});
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({
                success: true,
                token: token,
                status: 'You are successfully logged in',
                expires: 3600,
                username: user.username
            })

        });
    })(req, res);
});

/**
 * @PUT /api/user/1 - update
 */
router.put('/:id', function(req, res, next) {


});

/**
 * @DELETE /api/user/1 - Delete
 */
router.delete('/:id', function(req, res, next) {

});

module.exports = router;
