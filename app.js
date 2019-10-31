var express = require('express');
var app = express();

app.get('/home', function (req, res) {
  res.send('Hello home');
});
app.get('/about', function (req, res) {
  res.send('Hello about');
});
app.get('/', function (req, res) {
  res.send('Hello Serega');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});