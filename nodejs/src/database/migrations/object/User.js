class User {
  _id
  email
  password
  age
  name
  gender
  weight
  height
  roles
  constructor(_id, email, password, name, age, gender, weight, height, roles) {
    this._id = _id;
    this.email = email;
    this.password = password;
    this.age = age;
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.height = height;
    this.roles = roles;
  }
}

module.exports = User
