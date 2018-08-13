const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const router = require('./routers/index');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/', router);

app.listen(3000, console.log('port' + 3000));

