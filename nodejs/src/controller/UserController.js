const UserService = require('../service/userService');

const {
  OK,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  NO_CONTENT,
  BAD_REQUEST
} = require('../helpers/constants');
const ResponseMessage = require('../dto/ResponseMessage');

class UserController {
  async findAll (req, res, next) {
    try {
      let users = await new UserService().findAll();
      return res.status(OK).json(new ResponseMessage(200, 'List of users', users));
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserController();