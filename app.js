// console.log('Hola mundo','Fuck yeah!');

// var nombre ="Fernando";
// var nick= "Xtrodian";

// console.log(nombre, 'es',nick);

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



