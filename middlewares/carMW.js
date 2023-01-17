const createHttpError = require('http-errors');
const { Car } = require('../models');

module.exports.getCar = async (req, res, next) => {
  const {
    params: { carId },
  } = req;

  const car = await Car.findByPk(carId);

  if (!car) {
    return next(createHttpError(404, 'No such car found'));
  }

  req.car = car;
  next();
};
