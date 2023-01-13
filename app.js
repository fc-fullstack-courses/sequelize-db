const express = require('express');
const { Car } = require('./models');
const app = express();

app.use(express.json());

app.post('/cars', async (req, res, next) => {
  const { body } = req;

  const newCar = await Car.create(body);

  res.send({ car: newCar });
});

// const cars = await Car.findAll();

module.exports = app;
