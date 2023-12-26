const User = require("../entity/User");
const Repository = require("./repository");

class UserRepository extends Repository {
  constructor() {
    super(User);
  }

  async findByEmail(email) {
    return await User.findOne({ email: email }).populate('roles');
  }

}

module.exports = UserRepository;