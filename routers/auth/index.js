const express = require('express');
const router = express();
const controller = require('./controller');
var VerifyToken = require('../VerifyToken');


router.get('/register', (req, res) =>{
    res.render('register');
} );
router.get('/login', (req, res) =>{
    res.render('login');
}  );
router.post('/register', controller.register); 
router.post('/login', controller.login);
router.get('/logout', controller.logout);
router.get('/me', VerifyToken, controller.me);
router.get('/home', controller.home);
module.exports = router;