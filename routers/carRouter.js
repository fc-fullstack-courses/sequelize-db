const carRouter = require('express').Router();
const path = require('path');
const multer = require('multer');

const reviewRouter = require('./reviewRouter');
const CarController = require('../controllers/carController');
const CarMW = require('../middlewares/carMW');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../public/images'));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

carRouter.post('/', CarController.createCar);
carRouter.get('/', CarController.getCars);

carRouter.post('/:carId/pic', upload.single('pic'), CarController.addPicToCar);

carRouter.get('/:carId', CarController.getCar);
carRouter.put('/:carId', CarController.updateCar1);
carRouter.put('/v2/:carId', CarController.updateCar1);
carRouter.delete('/:carId', CarController.deleteCar1);
carRouter.delete('/v2/:carId', CarController.deleteCar2);

carRouter.use('/:carId/reviews', CarMW.getCar, reviewRouter);

module.exports = carRouter;
