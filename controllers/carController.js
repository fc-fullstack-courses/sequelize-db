const { Car } = require('../models');

module.exports.createCar = async (req, res, next) => {
  const { body } = req;

  const newCar = await Car.create(body);

  res.status(201).send({ data: newCar });
};

module.exports.getCars = async (req, res, next) => {
  const cars = await Car.findAll({
    // attributes: ['model', 'manufacturer', 'isUsed', 'price']
    // attributes: {
    //   exclude: ['updatedAt']
    // }
    // where: {
    //   isUsed: false,
    //   model: 'Astra'
    // },
  });

  res.send({ data: cars });
};
