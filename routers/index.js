const express = require('express');
const CarController = require('../controllers/carController');
const router = express.Router();

router.post('/cars', CarController.createCar);

module.exports = router;
