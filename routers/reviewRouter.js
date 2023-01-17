const reviewRouter = require('express').Router();
const ReviewController = require('../controllers/reviewController');

reviewRouter.post('/', ReviewController.createReview);
reviewRouter.get('/', ReviewController.getReviews);

module.exports = reviewRouter;
