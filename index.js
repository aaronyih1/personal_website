var express = require('express');
var app = express();

app.use(express.static('static'));
app.use('/enrou', express.static('static/work_files/enrou'));
app.use('/enrou', express.static('static/work_files/boxcamp'));

app.get('/contact', function(req, res) {
    res.sendFile( __dirname + "/static/" + "contact.html" );
});

/*/////////WORK FILE LINKS//////////*/
app.get('/hi_enrou', function(req, res) {
    res.sendFile( __dirname + "/static/work_files/enrou/" + "enrou.html" );
});
app.get('/boxcamp', function(req, res) {
    res.sendFile( __dirname + "/static/work_files/boxcamp/" + "boxcamp.html" );
});


app.listen(process.env.PORT || 3000);