const MuscleService = require("../service/MuscleService");
const ResponseMessage = require('../dto/ResponseMessage');
const {
  OK,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  NO_CONTENT,
  BAD_REQUEST
} = require('../helpers/constants');

class MuscleController {
  async findAll(req, res, next) {
    try {
      let muscles = await new MuscleService().findAll();
      if (!muscles) {
        return res.status(INTERNAL_SERVER_ERROR).json(new ResponseMessage(500, "Internal Server Error"))
      }
      return res.status(OK).json(new ResponseMessage(200, "Muscle found", muscles));
    } catch (error) {
      console.log(error);
    }
  }

  async findById(req, res, next) {
    try {
      let {id} = req.params;
      let muscle = await new MuscleService().findById(id);
      if(!muscle) {
        return res.status(INTERNAL_SERVER_ERROR).json(new ResponseMessage(500, "Muscle not found"))
      }
      return res.status(OK).json(new ResponseMessage(200, "Muscle found", muscle))
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new MuscleController();