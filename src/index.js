require('dotenv').config();
import express from 'express';

const app = express();
const path = process.env.API_PATH;

require('./startup/routes').default(app);

const port = process.env.APP_PORT || 3000;
const server = app.listen(port, () => console.log(
  `Listening on port: ${port}...\nURL: http://localhost:${port}/${path}/`
));

export default server;