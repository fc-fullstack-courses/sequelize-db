const router = require('express').Router();
const carRouter = require('./carRouter');

router.use('/cars', carRouter);

module.exports = router;
