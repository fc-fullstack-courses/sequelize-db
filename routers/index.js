const express = require('express');
const CarController = require('../controllers/carController');
const router = express.Router();

router.post('/cars', CarController.createCar);
router.get('/cars', CarController.getCars);

module.exports = router;
