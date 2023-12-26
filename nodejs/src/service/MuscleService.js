const MuscleRepository = require("../repository/MuscleRepository");
const Service = require("./Service");

class MuscleService extends Service {
  constructor() {
    super(MuscleRepository)
  }

  async findByName(name) { 
    return await new MuscleRepository().findByName(name);
  }
}

module.exports = MuscleService;

