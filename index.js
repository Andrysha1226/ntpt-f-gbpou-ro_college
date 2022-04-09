var http =require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-Type': 'index'});
});

server.listen(3000, '127.0.0.1');
console.log("port 3000");

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/about', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.render('about-success');
  });