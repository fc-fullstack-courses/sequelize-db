const sellerRouter = require('express').Router();
const SellerController = require('../controllers/sellerController');
const { getCar } = require('../middlewares/carMW');

sellerRouter.post('/', SellerController.createSeller);
sellerRouter.get('/', SellerController.getSellers);

sellerRouter.get('/:sellerId', SellerController.getSeller);
sellerRouter.put('/:sellerId', SellerController.updateSeller);
sellerRouter.delete('/:sellerId', SellerController.deleteSeller);

sellerRouter.post(
  '/:sellerId/cars/:carId',
  getCar,
  SellerController.addCarToSeller
);

module.exports = sellerRouter;
