const express = require('express');
const NutritionController = require('../controller/NutritionController');

const router = express.Router();

router.get('/', NutritionController.findAll)

module.exports = router;