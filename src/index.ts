"use strict";
const express = require('express');
const app = express();;
const port = 3000;
const debug = require('debug');

import { appContainer } from "./inversify.config";
import { TYPES } from "./types";
import { Controller } from "./interface";

const appController = appContainer.get<Controller>(TYPES.Controller);

app.get('/', (req: any, res: any) => {
  res.send(appController.getHello());
});

app.listen(port , () => {
  debug.log(`App listening at port ${port}`)
});