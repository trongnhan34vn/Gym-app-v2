const ResponseMessage = require('../dto/ResponseMessage');
const {
  OK,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  NO_CONTENT,
  BAD_REQUEST
} = require('../helpers/constants');
const NutritionService = require('../service/NutritionService');

class NutritionController {
  async findAll(req, res, next) {
    try {
      let nuts = await new NutritionService().findAll();
      if (!nuts) {
        return res.status(500).json(new ResponseMessage(500, "Internal Server Error"))
      }
      return res.status(200).json(new ResponseMessage(200, "Nutrition Found", nuts))
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new NutritionController();