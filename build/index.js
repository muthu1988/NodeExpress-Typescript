"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
;
var port = 3000;
var debug = require('debug');
var inversify_config_1 = require("./inversify.config");
var types_1 = require("./types");
var appController = inversify_config_1.appContainer.get(types_1.TYPES.Controller);
app.get('/', function (req, res) {
    res.send(appController.getHello());
});
app.listen(port, function () {
    debug.log("App listening at port " + port);
});
