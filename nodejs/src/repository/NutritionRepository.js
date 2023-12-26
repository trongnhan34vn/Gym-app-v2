const Nutrition = require("../entity/Nutrition");
const Repository = require("./repository");

class NutritionRepository extends Repository {
  constructor() {
    super(Nutrition)
  }
}

module.exports = NutritionRepository;