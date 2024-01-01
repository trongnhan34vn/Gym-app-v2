const express = require('express');
const MuscleController = require('../controller/MuscleController');

const router = express.Router();

router.get('/', MuscleController.findAll)
router.get('/muscle/:id', MuscleController.findById)

module.exports = router;