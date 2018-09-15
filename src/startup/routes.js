const express = require('express');
const index = require('../routes/index.js');
const content = require('../routes/content');
const contentChild = require('../routes/content-child');
const gallery = require('../routes/gallery');
const menuFood = require('../routes/menu-food');
const reviews = require('../routes/reviews');

const path = '/api/v1';

module.exports = function(app) {
  app.use('/', index);
  app.use(express.json());
  app.use(path + '/content', content);
  app.use(path + '/content-child', contentChild);
  app.use(path + '/gallery', gallery);
  app.use(path + '/menu-food', menuFood);
  app.use(path + '/reviews', reviews);
}