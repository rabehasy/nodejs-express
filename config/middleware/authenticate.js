var jwt = require('jsonwebtoken');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var passport = require('passport');

var db = require("../../models");

var unserializephp = require('locutus/php/var/unserialize');

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = '12541302154877';

exports.jwtPassport = passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    // console.log("JWT payload", jwt_payload);


    db.fos_user.findOne({
        where: {
            id: jwt_payload._id
        }
    }).then(
        (user) => {

            if (!user) {
                return done(null, false);
            }

            return done(null, user);
        });


}));
exports.verifyUser = passport.authenticate('jwt', {session: false});

exports.getToken = function (user) {
    return jwt.sign(user, opts.secretOrKey, { expiresIn: "90d" });
};

exports.verifyAdmin = (req, res, next) => {

    let roles = unserializephp(req.user.roles);


    let i = 0;
    if (roles) {
        roles.forEach((role) => {
            if (['ROLE_SUPER_ADMIN'].includes(role)) {
                i++;
            }
        })
    }

    if (i === 0) {
        return res.json({
            error: true,
            message: "You are not admin",
            roles: role
        });
    }

    next();
};