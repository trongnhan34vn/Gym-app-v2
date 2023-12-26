const Exercise = require("../entity/Exercise");
const Repository = require("./repository");

class ExerciseRepository extends Repository {
  constructor() {
    super(Exercise);
  }
}

module.exports = ExerciseRepository;