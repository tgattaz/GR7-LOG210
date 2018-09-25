var express = require("express");
var app = express();

app.use(express.logger());

app.get('/',function (req,res) {
    res.send('Hello wolrd!!');
});

var port = process.env.PORT || 8000;

app.listen(port);