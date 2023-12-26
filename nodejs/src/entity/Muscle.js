const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const muscleSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }
}, {
  timestamps: true,
  collection: 'muscles'
})

const Muscle = mongoose.model('Muscle', muscleSchema);
module.exports = Muscle;