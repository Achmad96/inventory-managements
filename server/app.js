const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const routes = require('./routes.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || 'http://localhost';

app.listen(PORT, () =>
  console.log(`
  App is listening on port ${PORT}
  Click here to open in browser: ${BASE_URL}:${PORT}
  Press Ctrl+C to stop the server
  `)
);

module.exports = { app };
