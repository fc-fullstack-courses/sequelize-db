const carRouter = require('express').Router();
const reviewRouter = require('./reviewRouter');
const CarController = require('../controllers/carController');
const CarMW = require('../middlewares/carMW');

carRouter.post('/', CarController.createCar);
carRouter.get('/', CarController.getCars);

carRouter.get('/:carId', CarController.getCar);
carRouter.put('/:carId', CarController.updateCar1);
carRouter.put('/v2/:carId', CarController.updateCar1);
carRouter.delete('/:carId', CarController.deleteCar1);
carRouter.delete('/v2/:carId', CarController.deleteCar2);

carRouter.use('/:carId/reviews', CarMW.getCar, reviewRouter);

module.exports = carRouter;
