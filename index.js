var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000);