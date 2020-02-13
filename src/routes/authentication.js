const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/signup', (req, res) => {
    res.render('auth/signup');
});


router.post('/singup', passport.authenticate('local.signup', {
    successRedirec: '/profile',
    failureRedirect: '/singup',
    failureFlash: true
}))

router.get('/profile', (req, res) => {
    res.send('this is your profile');
})


module.exports = router;