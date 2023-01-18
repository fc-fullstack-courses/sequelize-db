const reviewRouter = require('express').Router();
const ReviewController = require('../controllers/reviewController');

reviewRouter.post('/', ReviewController.createReview);
reviewRouter.get('/', ReviewController.getReviews);

reviewRouter.get('/:reviewId', ReviewController.getReview);
reviewRouter.put('/:reviewId', ReviewController.updateReview);
reviewRouter.delete('/:reviewId', ReviewController.deleteReview);

module.exports = reviewRouter;
