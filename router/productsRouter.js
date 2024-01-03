const express = require('express');
const { getAllCars } = require('../controllers/dataCarController');
const router = express.Router();
const dataCarController = require('../controllers/dataCarController')

router.get('/cars', dataCarController.getAllCars);
router.get('/test', dataTestController.getAllTests);

module.exports = router;
