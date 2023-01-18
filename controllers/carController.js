const createHttpError = require('http-errors');
const { Car, Review, Seller } = require('../models');

module.exports.createCar = async (req, res, next) => {
  try {
    const { body } = req;

    const newCar = await Car.create(body);

    res.status(201).send({ data: newCar });
  } catch (error) {
    next(error);
  }
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
    include: [
      { model: Review, required: true },
      {
        model: Seller,
        attributes: ['id', 'name', 'address'],
        through: { attributes: [] },
      },
    ],
  });

  res.send({ data: cars });
};

module.exports.getCar = async (req, res, next) => {
  const {
    params: { carId },
  } = req;

  // const [car] = await Car.findAll({
  //   where: {
  //     id: carId,
  //   },
  // });

  // const car = await Car.findOne({
  //   where: {
  //     id: carId,
  //   },
  // });

  const car = await Car.findByPk(carId);

  if (car) {
    res.send({ data: car });
  } else {
    const error = createHttpError(404, 'No such car found');
    next(error);
  }
};

module.exports.updateCar1 = async (req, res, next) => {
  try {
    const {
      params: { carId },
      body,
    } = req;

    const [updatedRows, [car]] = await Car.update(body, {
      where: { id: carId },
      returning: true,
    });

    if (updatedRows === 1) {
      res.send({ data: car });
    } else {
      const error = createHttpError(404, 'No such car found');
      throw error;
    }
  } catch (error) {
    next(error);
  }
};

module.exports.updateCar2 = async (req, res, next) => {
  try {
    const {
      params: { carId },
      body,
    } = req;

    const car = await Car.findByPk(carId);

    if (!car) {
      throw createHttpError(404, 'No such car found');
    }

    const updatedCar = await car.update(body, { returning: true });

    res.send({ data: updatedCar });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteCar1 = async (req, res, next) => {
  const {
    params: { carId },
  } = req;

  const rowsDeleted = await Car.destroy({
    where: { id: carId },
  });

  if (rowsDeleted === 1) {
    res.send({ data: carId });
  } else {
    next(createHttpError(404, 'No such car found'));
  }
};

module.exports.deleteCar2 = async (req, res, next) => {
  const {
    params: { carId },
  } = req;

  const car = await Car.findByPk(carId);

  if (!car) {
    next(createHttpError(404, 'No such car found'));
  }

  await car.destroy();

  res.send({ data: car });
};
