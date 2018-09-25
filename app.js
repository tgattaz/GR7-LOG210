var express = require("express");
var app = express();

app.use(express.logger());

app.get('/',function (req,res) {
    res.send('Hello wolrd!!');
});

app.listen(process.env.PORT);