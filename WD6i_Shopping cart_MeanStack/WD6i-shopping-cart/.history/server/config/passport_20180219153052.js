const passport = require('passport');
const User = require('../models/user');
const config = require('../config/database');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.getUserById(jwt_payload.data._id, (err, user) => {
      if(err) {
        return done(err, false);
      }

      if(user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
}