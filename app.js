var express = require('express');
var app = express();

app.get('/home', function (req, res) {
  res.send('Hello home');
});
app.get('/about/:id', function (req, res) {
  res.send(`Hello about ${req.params.id}`);
});
app.get('/', function (req, res) {
  res.send('Hello Serega');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});