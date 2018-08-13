const express = require('express');
const api = express();

const user = require('./user/index');
api.use('/', user);

module.exports = api;