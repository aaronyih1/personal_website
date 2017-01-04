var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/contact', function(req, res) {
    res.sendFile( __dirname + "/static/" + "contact.html" );
});

/*/////////WORK FILE LINKS//////////*/
app.get('/enrou', function(req, res) {
    res.sendFile( __dirname + "/static/work_files/enrou/" + "index.html" );
});
app.get('/kiwi', function(req, res) {
    res.sendFile( __dirname + "/static/work_files/kiwi_mag/" + "index.html" );
});

app.get('/wit-info', function(req, res) {
    res.sendFile( __dirname + "/static/work_files/wit/" + "index.html" );
});
app.get('/wit', function(req, res) {
    res.sendFile( __dirname + "/static/work_files/wit/live-site/" + "index.html" );
});

app.get('/boxcamp', function(req, res) {
    res.sendFile( __dirname + "/static/work_files/boxcamp/" + "boxcamp.html" );
});

app.get('/prime', function(req, res) {
    res.sendFile( __dirname + "/static/work_files/prime/" + "prime.html" );
});

app.get('/uas', function(req, res) {
    res.sendFile( __dirname + "/static/work_files/unitedarabsociety/" + "index.html" );
});

/*/////////PROJECT FILE LINKS//////////*/
app.get('/inde', function(req, res) {
    res.sendFile( __dirname + "/static/project_files/InDe/" + "index.html" );
});
app.get('/inde/og', function(req, res) {
    res.sendFile( __dirname + "/static/project_files/InDe/OG-InDe-website/" + "index.html" );
});


app.get('/lockit', function(req, res) {
    res.sendFile( __dirname + "/static/project_files/lockit/" + "index.html" );
});


app.get('/bodies&nutella', function(req, res) {
    res.sendFile( __dirname + "/static/project_files/nutella/" + "nutella.html" );
});

app.get('/gftdream-info', function(req, res) {
    res.sendFile( __dirname + "/static/project_files/gofindthedream/" + "index.html" );
});
app.get('/gftdream', function(req, res) {
    res.sendFile( __dirname + "/static/project_files/gofindthedream/live-site/" + "index.html" );
});

app.get('/create', function(req, res) {
    res.sendFile( __dirname + "/static/project_files/create/" + "index.html" );
});


app.listen(process.env.PORT || 3000);