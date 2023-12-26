const RoleService = require("../../service/RoleService");
const UserService = require("../../service/userService");
const bcrypt = require('bcrypt');
const newUser = require("./object/User");
const User = require("./object/User");

function checkExistByEmail(email, users) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return true;
    }
  }
  return false;
}





async function migrate(users) {
  let ptEmail = "anhpt@gmail.com";
  if (!checkExistByEmail(ptEmail, users)) {
    const roles = [];
    let role = await new RoleService().findByName('PT')
    roles.push(role._id);
    new UserService().save({
      _id: null,
      email: ptEmail,
      age: 27,
      gender: true,
      password: bcrypt.hashSync('Pikachu123@', bcrypt.genSaltSync(6)),
      name: 'Nguyễn Văn PT',
      roles: roles
    })

  }
  let userEmail = "nguyenvana@gmail.com";
  const roles = [];
  let role = await new RoleService().findByName('USER')
  if (!checkExistByEmail(userEmail, users)) {
    roles.push(role._id);
    new UserService().save({
      _id: null,
      email: userEmail,
      password: bcrypt.hashSync('Pikachu123@', bcrypt.genSaltSync(6)),
      name: 'Nguyễn Văn A',
      age: 25,
      height: 175,
      weight: 75,
      gender: true,
      roles: roles
    })
  }


  let u1 = new User(null, 'nguyenvanb@gmail.com', bcrypt.hashSync('Pikachu123@', bcrypt.genSaltSync(6)), 'Nguyễn Văn B', 20, true, 70, 170, roles);
  let u2 = new User(null, 'nguyenthic@gmail.com', bcrypt.hashSync('Pikachu123@', bcrypt.genSaltSync(6)), 'Nguyễn Thị C', 24, false, 50, 165, roles);
  let u3 = new User(null, 'nguyenthid@gmail.com', bcrypt.hashSync('Pikachu123@', bcrypt.genSaltSync(6)), 'Nguyễn Thị D', 22, false, 45, 155, roles);
  let u4 = new User(null, 'nguyenvane@gmail.com', bcrypt.hashSync('Pikachu123@', bcrypt.genSaltSync(6)), 'Nguyễn Văn E', 27, true, 68, 170, roles);
  let u5 = new User(null, 'nguyenvanf@gmail.com', bcrypt.hashSync('Pikachu123@', bcrypt.genSaltSync(6)), 'Nguyễn Văn F', 28, true, 65, 168, roles);
  let u6 = new User(null, 'nguyenvang@gmail.com', bcrypt.hashSync('Pikachu123@', bcrypt.genSaltSync(6)), 'Nguyễn Văn G', 28, true, 65, 168, roles);

  let newUser = [];
  newUser.push(u1);
  newUser.push(u2);
  newUser.push(u3);
  newUser.push(u4);
  newUser.push(u5);
  newUser.push(u6);

  newUser.forEach(user => {
    if (!checkExistByEmail(user.email, users)) {
      new UserService().save(user)
    }
  })
  console.log('Migrated User Success');
}

module.exports = migrate;