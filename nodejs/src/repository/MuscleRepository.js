const Muscle = require("../entity/Muscle");
const Repository = require("./repository");

class MuscleRepository extends Repository {
  constructor() {
    super(Muscle)
  }

  async findByName(name) {
    return await Muscle.findOne({ name: name });
  }
}

module.exports = MuscleRepository;