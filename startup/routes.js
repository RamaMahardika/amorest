const express = require('express');
const content = require('../routes/content');
const contentChild = require('../routes/content-child');
const index   = require('../routes/index.js');

module.exports = function(app) {
  app.use('/', index);
  app.use(express.json());
  app.use('/api/v1/content', content);
  app.use('/api/v1/content-child', contentChild);
}