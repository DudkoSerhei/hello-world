var express = require('express');
var index = require('./routes/index.js');
var favicon = require('serve-favicon');

var app = express();

// app.set('view engine', 'ejs');

// app.use(express.static(__dirname + '/public'));
// app.use(favicon(__dirname + './public/favicon.ico'));

app.get('/', function (req, res){
  res.send('hello world')
});

app.listen(3000, function () {
  console.log('Server is Up!');
});
