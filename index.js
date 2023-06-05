require('dotenv').config();
const debug = require('debug')('app:server');
const express = require('express');
const cors = require('cors');
const dataMapper = require('./client/datamapper');

const port = process.env.PORT || 3000;

const app = express();
app.use(cors('*'));
app.use(express.json());
app.get('/', async (req, res) => {
  const data = await dataMapper.getOne();
  res.status(200).json(
    data,
  );
});

app.listen(port, () => {
  debug(`Server ready: http://localhost:${port}`);
});
