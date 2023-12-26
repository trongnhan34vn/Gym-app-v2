const moongoose = require('mongoose');
const Schema = moongoose.Schema;

const exerciseSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  difficult: { type: Number, required: true },
  sets: { type: Number, required: true },
  time: { type: Number, required: true },
  breakTime: { type: Number, required: true },
  muscle: { type: Schema.Types.ObjectId, ref: 'Muscle' }
}, {
  timestamps: true,
  collection: 'exercises'
});

const Exercise = moongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;

