var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../param/models");

passport.use(new LocalStrategy(
    (username, password, done) => {
        db.fos_user.findOne({
            where: {
                username: username
            }
        }).then(
            (user) => {

                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }

                if (!user.validPassword(password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }

                return done(null, user);
            });
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

module.exports = passport;