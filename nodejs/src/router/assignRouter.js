const express = require('express');
const AssignmentController = require('../controller/AssignmentController');
const router = express.Router();

router.get('/user/date', AssignmentController.findByUserAndDate)
router.get('/assign/:id', AssignmentController.findById)
router.patch('/assign/:id', AssignmentController.update)

module.exports = router;