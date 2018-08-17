const express = require('express');
const api = express();


const user = require('./user/index');
const auth = require('./auth/index');
api.use('/', user);
api.use('/auth', auth);

module.exports = api;