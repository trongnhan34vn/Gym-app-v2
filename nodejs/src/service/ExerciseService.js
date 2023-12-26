const ExerciseRepository = require("../repository/ExerciseRepository");
const Service = require("./Service");

class ExerciseService extends Service {
  constructor() {
    super(ExerciseRepository)
  }
}

module.exports = ExerciseService;