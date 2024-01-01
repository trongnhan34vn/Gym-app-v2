const express = require('express');
const ExerciseController = require('../controller/ExerciseController');

const router = express.Router();

router.get('/', ExerciseController.findAll)
router.get('/exercise/:id', ExerciseController.findById)
router.get('/muscle', ExerciseController.findByMuscleId)

module.exports = router;