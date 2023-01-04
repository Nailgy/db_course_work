const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');

const port = 5000;
const host = '0.0.0.0';

connection.connect();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', require('./controls'));

app.listen(port, host, () => {
  console.log(`Server started: ${host}:${port}`);
});