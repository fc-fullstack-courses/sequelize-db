const createHttpError = require('http-errors');
const { Seller } = require('../models');

module.exports.createSeller = async (req, res, next) => {
  const { body } = req;

  try {
    const seller = await Seller.create(body);
    res.status(201).send({ data: seller });
  } catch (error) {
    next(error);
  }
};

module.exports.getSellers = async (req, res, next) => {
  const sellers = await Seller.findAll();

  res.send({ data: sellers });
};

module.exports.getSeller = async (req, res, next) => {
  const {
    params: { sellerId },
  } = req;
  const seller = await Seller.findByPk(sellerId);

  if (!seller) {
    return next(createHttpError(404, 'Seller not found'));
  }

  res.send({ data: seller });
};

module.exports.updateSeller = async (req, res, next) => {
  const {
    params: { sellerId },
    body,
  } = req;

  const [rowsUpdated, [seller]] = await Seller.update(body, {
    where: { id: sellerId },
    returning: true,
  });

  if (rowsUpdated !== 1) {
    return next(createHttpError(404, 'Seller not found'));
  }

  res.send({ data: seller });
};

module.exports.deleteSeller = async (req, res, next) => {
  const {
    params: { sellerId },
  } = req;
  const rowsDeleted = await Seller.destroy({ where: { id: sellerId } });

  if (rowsDeleted !== 1) {
    return next(createHttpError(404, 'Seller not found'));
  }

  res.send({ data: sellerId });
};

module.exports.addCarToSeller = async (req, res, next) => {
  const {
    params: { sellerId },
    car,
  } = req;

  const seller = await Seller.findByPk(sellerId);

  if (!seller) {
    return next(createHttpError(404, 'Seller not found'));
  }

  await seller.addCar(car);

  res.send({ data: 'Car added' });
};
