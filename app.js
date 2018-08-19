const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

var db = require('./db/db');

const router = require('./routers/index');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', router);

app.listen(3000, console.log('port' + 3000));

