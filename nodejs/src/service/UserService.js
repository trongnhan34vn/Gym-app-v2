const UserRepository = require("../repository/UserRepository");
const Service = require("./Service");
const bcrypt = require('bcrypt');

class UserService extends Service {
  constructor() {
    super(UserRepository)
  }

  async findByEmail(email) {
    return await new UserRepository().findByEmail(email);
  }

  async login(data) {
    try {
      const { email, password } = data;
      const findUser = await this.findByEmail(email);
      // không có tài khoản
      if (!findUser) {
        return {
          status: "error",
          message: "User not found",
        };
      }

      // check password
      let isCorrectPass = bcrypt.compareSync(password, findUser.password);
      if (!isCorrectPass) {
        return {
          status: "error",
          message: "Password is incorrect"
        };
      }
      return {
        status: "ok",
        message: "Login successfully",
        data: findUser
      };
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserService;