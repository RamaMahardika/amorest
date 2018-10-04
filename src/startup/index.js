import json from 'express';
import {
  Home,
  Content,
  ContentChildAll,
  ContentChildList,
  ContentChildSingle,
  GalleryAll,
  GalleryCategory,
  NotFound
} from '../routes';

const path = '/' + process.env.API_PATH;

export default (app) => {
  app.use(json());
  app.use(path + '/', Home);
  app.use(path + '/content', Content);
  app.use(path + '/content-child', ContentChildAll);
  app.use(path + '/content-child', ContentChildList);
  app.use(path + '/content-child', ContentChildSingle);
  app.use(path + '/gallery', GalleryAll);
  app.use(path + '/gallery', GalleryCategory);
  app.use(path + '/not-found', NotFound);
  app.use('*', (req, res, next) => {
    res.redirect(path + '/not-found');
    next();
  });
};