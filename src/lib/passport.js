 const passport = require('passport');
 const LocalStrategy = require('passport-local').Strategy;

 const pool = require('../database');
 const helpers = require('../lib/helpers');

 passport.use('local.signup', new LocalStrategy({
     usernameField: 'username',
     passwordField: 'password',
     passReqToCallBack: true
 }, async(req, username, password, done) => {
     console.log('hola');
     console.log(req.body);

     const newUser = {
         username,
         password
     };

     console.log(newUser);

     /*
          const { fullname } = req.body;
          const newUser = {
              username,
              password,
              fullname
          };

          
          console.log(newUser);
          newUser.password = await helpers.encryptPassword(password);
          const result = await pool.query('INSERT INTO users SET ?', [newUser]);
          console.log(result);
     */
 }));