require('./config/config');
const colors = require('colors');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

const operations = require('./controller/operations')

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('API de operaciones'));

app.put(`/operation`, (req, res) => {
    return operations(req.body)
      .then((data) => {
        console.log(data)
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  });

app.listen(Number(process.env.PORT), () =>
console.log(
    `API corriendo en el puerto: ${process.env.PORT}`.rainbow
  )
);
module.exports = app;
