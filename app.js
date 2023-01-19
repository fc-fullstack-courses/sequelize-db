const express = require('express');
const { basicErrorHandler } = require('./errorHandlers');
const { sequelizeErrorHandler } = require('./errorHandlers/sequelizeErrors');
const router = require('./routers');
const app = express();

app.use(express.json());

app.use(router);
app.use(express.static('public'));

app.use(sequelizeErrorHandler);
app.use(basicErrorHandler);

module.exports = app;
