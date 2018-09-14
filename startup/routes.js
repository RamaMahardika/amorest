const express = require('express');
const index   = require('../routes/index.js');
const content = require('../routes/content');
const contentChild = require('../routes/content-child');
const gallery = require('../routes/gallery');


module.exports = function(app) {
  app.use('/', index);
  app.use(express.json());
  app.use('/api/v1/content', content);
  app.use('/api/v1/content-child', contentChild);
  app.use('/api/v1/gallery', gallery);
}