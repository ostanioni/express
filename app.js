var express = require('express');
var app = express();
app.get('/url', function (req, res) {
  res.send(`OriginalUrl is ${req.originalUrl}`);
  console.clear();
  console.log('req ', req);
  //console.log('res ', res)
});
app.get('/home', function (req, res) {
  res.send('Hello home');
});
app.get('/about/:id', function (req, res) {
  // res.send(`Hello about`);
  console.log(app);
});
app.get('/', function (req, res) {
  res.send(`Hello Serega\n ${app}`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});