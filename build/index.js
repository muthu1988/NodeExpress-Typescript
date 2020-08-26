"use strict";
var express = require('express');
var app = express();
;
var port = 3000;
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});
app.listen(port, function () {
    console.log("App listening at port " + port);
});
