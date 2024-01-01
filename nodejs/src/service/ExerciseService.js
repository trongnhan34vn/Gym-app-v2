const ExerciseRepository = require("../repository/ExerciseRepository");
const Service = require("./Service");

class ExerciseService extends Service {
  constructor() {
    super(ExerciseRepository)
  }

  async findByMuscleId(muscleId) {
    return await new ExerciseRepository().findByMuscleId(muscleId);
  }
}

module.exports = ExerciseService;