var express = require('express');
var app = express();

app.use(express.static('static'));

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
app.get('/prime', function(req, res) {
    res.sendFile( __dirname + "/static/work_files/prime/" + "prime.html" );
});

/*/////////PROJECT FILE LINKS//////////*/
app.get('/bodies&nutella', function(req, res) {
    res.sendFile( __dirname + "/static/project_files/nutella/" + "nutella.html" );
});


app.listen(process.env.PORT || 3000);