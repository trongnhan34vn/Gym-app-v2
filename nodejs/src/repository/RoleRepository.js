const Role = require("../entity/Role");
const Repository = require('./repository')

class RoleRepository extends Repository {
  constructor() {
    super(Role);
  }

  async findByName(name) {
    return Role.findOne({ roleName: name });
  }

}

module.exports = RoleRepository;

