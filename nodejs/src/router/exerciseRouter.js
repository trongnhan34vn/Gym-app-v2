const express = require('express');
const ExerciseController = require('../controller/ExerciseController');

const router = express.Router();

router.get('/', ExerciseController.findAll)

module.exports = router;