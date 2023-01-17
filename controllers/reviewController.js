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
