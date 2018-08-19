const express = require('express');
const api = express();


const user = require('./user/index');
const auth = require('./auth/index');
api.use('/user', user);
api.use('/', auth);

module.exports = api;