var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
});
let port = process.env.PORT;
if(port==null || port==""){
    port=8000;
}
app.listen(port);