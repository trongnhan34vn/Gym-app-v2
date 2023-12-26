const RoleService = require("../../service/RoleService");


function checkExist(roleName, roles) {
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].roleName === roleName) {
      return true;
    }
  }
  return false;
}

function migrate(roles) {
  console.log(roles);
  if (!checkExist('USER', roles)) {
    new RoleService().save({ _id: null, roleName: 'USER' })
  }
  if (!checkExist('PT', roles)) {
    new RoleService().save({ _id: null, roleName: 'PT' })
  }
}



module.exports = migrate;