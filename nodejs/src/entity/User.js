const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  name: { type: String, require: true },
  age: { type: Number, require: true },
  gender: { type: Boolean, require: true, default: true },
  weight: { type: Number },
  height: { type: Number },
  roles: [{ type: Schema.Types.ObjectId, ref: 'Role' }]
}, {
  timestamps: true,
  collection: 'users'
})

userSchema.methods.toJSON = function () {
  var obj = this.toObject(); //or var obj = this;
  delete obj.password;
  return obj;
}

const User = mongoose.model('User', userSchema);
module.exports = User;