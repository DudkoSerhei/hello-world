var express = require('express');
var index = require('./routes/index.js');
var favicon = require('serve-favicon');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function (req, res){
  res.send('hello world')
});

var port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log('Server is Up!');
});
