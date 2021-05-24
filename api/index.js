const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.set('trust proxy', true);

app.use('/', routes);
app.all('*', (req, res) => {
  res.status(404).json({
    code: 'api/not-found',
    message: '잘못된 요청경로입니다.',
  });
});

if (process.env.NODE_ENV !== 'test') {
  const PORT = 4000;
  app.listen(PORT);
}

exports.api = app;
