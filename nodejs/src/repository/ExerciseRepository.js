const Exercise = require("../entity/Exercise");
const Repository = require("./repository");

class ExerciseRepository extends Repository {
  constructor() {
    super(Exercise);
  }
  async findByMuscleId(muscleId) {
    let res = await Exercise.find({ muscle: muscleId })
    return res;
  }
}

module.exports = ExerciseRepository;