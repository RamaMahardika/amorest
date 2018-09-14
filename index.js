require('dotenv').config()
const express = require('express');

const app = express();

require('./startup/routes')(app);

const port = process.env.APP_PORT || 3000;
const server = app.listen(port, () =>console.log(`Listening on port ${port}...`));

module.exports = server;