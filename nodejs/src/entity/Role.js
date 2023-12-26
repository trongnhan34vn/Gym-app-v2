const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roleSchema = new Schema({
  roleName: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'roles'
})

const Role = mongoose.model('Role', roleSchema);
module.exports = Role;
