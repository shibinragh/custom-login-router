const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({secret: "secret!"}));
app.use(bodyParser.urlencoded({extended:false}))

var db = require('./db/db');

const router = require('./routers/index');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
    console.log(req.sessionID)
    if(req.session.page_views){
       req.session.page_views++;
       res.send("You visited this page " + req.session.page_views + " times");
    } else {
       req.session.page_views = 1;
       res.send("Welcome to this page for the first time!");
    }
 });
 
app.use('/', router);

app.listen(3000, console.log('port' + 3000));

