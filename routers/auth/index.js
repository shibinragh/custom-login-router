const express = require('express');
const router = express();
const controller = require('./controller');
router.post('/', controller.register  );

module.exports = router;