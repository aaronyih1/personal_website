var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/contact', function(req, res) {
    res.sendFile( __dirname + "/static/" + "contact.html" );
});

app.listen(process.env.PORT || 3000);