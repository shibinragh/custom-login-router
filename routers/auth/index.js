const express = require('express');
const router = express();
const controller = require('./controller');


router.get('/register', (req, res) =>{
    res.render('register');
}  );
router.post('/register', controller.register  );

module.exports = router;