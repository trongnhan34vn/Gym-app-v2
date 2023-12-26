const RoleRepository = require("../repository/RoleRepository");
const Service = require("./Service");

class RoleService extends Service {
  constructor() {
    super(RoleRepository)
  }

  async findByName(name) {
    return await new RoleRepository().findByName(name);
  }

}

module.exports = RoleService;