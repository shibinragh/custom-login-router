const express = require('express');
const router = express();

const controller = require('./controller');
router.get('/', controller.index  );

module.exports = router;