const Muscle = require("../entity/Muscle");
const Repository = require("./repository");

class MuscleRepository extends Repository {
  constructor() {
    super(Muscle)
  }

  async findByName(name) {
    return await Muscle.findOne({ name: name });
  }

  async findAll() {
    return await Muscle.find().populate('exercises');
  }
}

module.exports = MuscleRepository;