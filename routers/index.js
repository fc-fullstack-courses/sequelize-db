const router = require('express').Router();
const carRouter = require('./carRouter');
const sellerRouter = require('./sellerRouter');

router.use('/cars', carRouter);
router.use('/sellers', sellerRouter);

module.exports = router;
