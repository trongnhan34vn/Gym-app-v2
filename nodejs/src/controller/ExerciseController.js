const ResponseMessage = require('../dto/ResponseMessage');
const {
  OK,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  NO_CONTENT,
  BAD_REQUEST
} = require('../helpers/constants');
const ExerciseService = require('../service/ExerciseService');

class ExerciseController {
  async findAll(req, res, next) {
    try {
      let exercises = await new ExerciseService().findAll();
      if (!exercises) {
        return res.status(INTERNAL_SERVER_ERROR).json(new ResponseMessage(500, 'Internal Server Error'))
      }
      return res.status(OK).json(new ResponseMessage(200, 'Exercises found', exercises));
    } catch (error) {
      console.log(error);
    }
  }

  async findById(req, res, next) {
    try {
      const id = req.params.id
      const exercise = await new ExerciseService().findById(id);
      if (!exercise) {
        return res.status(INTERNAL_SERVER_ERROR).json(new ResponseMessage(500, 'Internal Server Error'))
      }
      return res.status(OK).json(new ResponseMessage(200, 'Exercises found', exercise));
    } catch (error) {

    }
  }

  async findByMuscleId(req, res, next) {
    try {
      const { muscleId } = req.query;
      const exercises = await new ExerciseService().findByMuscleId(muscleId);
      if (!exercises) {
        return res.status(INTERNAL_SERVER_ERROR).json(new ResponseMessage(500, "Interal Server Error"));
      }
      return res.status(OK).json(new ResponseMessage(200, 'Exercises found', exercises));
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new ExerciseController();