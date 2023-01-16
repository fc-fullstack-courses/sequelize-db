const express = require('express');
const CarController = require('../controllers/carController');
const router = express.Router();

router.post('/cars', CarController.createCar);
router.get('/cars', CarController.getCars);

router.get('/cars/:carId', CarController.getCar);
router.put('/cars/:carId', CarController.updateCar1);
router.put('/cars/v2/:carId', CarController.updateCar1);
router.delete('/cars/:carId', CarController.deleteCar1);
router.delete('/cars/v2/:carId', CarController.deleteCar2);

module.exports = router;
