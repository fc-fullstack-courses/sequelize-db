const createHttpError = require('http-errors');
const { Review } = require('../models');

module.exports.createReview = async (req, res, next) => {
  const { body, car } = req;
  try {
    const review = await car.createReview(body);

    res.status(201).send({ data: review });
  } catch (error) {
    next(error);
  }
};

module.exports.getReviews = async (req, res, next) => {
  const { car } = req;

  const reviews = await car.getReviews();

  res.send({ data: reviews });
};

module.exports.getReview = async (req, res, next) => {
  const {
    params: { reviewId },
    car,
  } = req;

  const review = await Review.findOne({
    where: { id: reviewId, carId: car.id },
  });

  if (!review) {
    return next(createHttpError(404, 'Review for this car is not found'));
  }

  res.send({ data: review });
};

module.exports.updateReview = async (req, res, next) => {
  const {
    body,
    params: { reviewId },
  } = req;

  try {
    const [rowsUpdated, [review]] = await Review.update(body, {
      where: { id: reviewId },
      returning: true,
    });

    if (rowsUpdated === 1) {
      return res.send({ data: review });
    }

    throw createHttpError(404, 'Review not found');
  } catch (error) {
    next(error);
  }
};

module.exports.deleteReview = async (req, res, next) => {
  const {
    params: { reviewId },
  } = req;

  const deletedRows = await Review.destroy({ where: { id: reviewId } });

  if (deletedRows === 1) {
    return res.send({ data: reviewId });
  }

  next(createHttpError(404, 'Review not found'));
};
