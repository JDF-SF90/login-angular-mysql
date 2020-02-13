 const passport = require('passport');
 const LocalStrategy = require('passport-local').Strategy;

 passport.use('local.signup', new LocalStrategy({
     usernameField: 'username',
     passwordField: 'password',
     passReqToCallBack: true
 }, async(req, username, password, done) => {

     console.log(req.body);

 }));