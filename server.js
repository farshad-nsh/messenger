var express=require('express');
var bodyParser = require('body-parser');
var redisClient = require('redis-js');
var path=require('path');
var cookieParser = require('cookie-parser'); // the session is stored in a cookie, so we use this to parse it
var expressSession = require('express-session');
var app=express();
var fs = require('fs');
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.use(expressSession({
    secret: 'NAEMETALPRELIOBTNAVRES',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, // Secure is Recommeneded, However it requires an HTTPS enabled website (SSL Certificate)
        maxAge: 864000000 // 10 Days in miliseconds
    }
}));
app.use(express.static('public'));

// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
process.env['port'] = 3012;

var port= process.env['port'] ;
process.env['myrootpath']=__dirname ;
/*
app.listen(port, function() {
    console.log('Example app listening on port'+port+ '!');
});
*/

const staticAssetsPath = path.resolve(__dirname, '/public');
app.use(express.static(staticAssetsPath));

var http = require('http');

http.createServer(app).listen(port, function() {
    console.log('Farshad  listening on port'+port+ '!');
    console.log("salam Farshad, time is:"+new Date());
});

app.get('/',function(req,res) {
    res.sendFile( __dirname+"/public/index.html" );
});



app.get('/findMobileNumber',function(req,res) {
    //socket.emit('request', 'bah'); // emit an event to the socket
    var mobile=req.query.mobile;
    res.end(mobile+'');
});
//*****************************************************************************
//*****************************************************************************
