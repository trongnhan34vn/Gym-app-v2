const UserService = require("../service/userService");
const {
  OK,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  NO_CONTENT,
  BAD_REQUEST
} = require('../helpers/constants');
const ResponseMessage = require("../dto/ResponseMessage");

class AuthController {
  async login(req, res, next) {
    let loginResponse = await new UserService().login(req.body);
    if (!loginResponse) {
      return res.status(INTERNAL_SERVER_ERROR).json(new ResponseMessage(500, 'Server Error'));
    }
    if (loginResponse.status === 'error') {
      return res.status(NOT_FOUND).json(new ResponseMessage(404, loginResponse.message));
    }
    return res.status(OK).json(new ResponseMessage(200, loginResponse.message, loginResponse.data));
  }
}

module.exports = new AuthController();