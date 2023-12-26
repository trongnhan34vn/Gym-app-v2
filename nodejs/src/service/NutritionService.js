const NutritionRepository = require("../repository/NutritionRepository");
const Service = require("./Service");

class NutritionService extends Service {
  constructor() {
    super(NutritionRepository);
  }
}

module.exports = NutritionService;