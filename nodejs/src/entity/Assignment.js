const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
  pt: { type: Schema.Types.ObjectId, ref: 'User' },
  nutritions: [{ type: Schema.Types.ObjectId, ref: 'Nutrition' }],
  date: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  startTime: { type: Number, required: true },
  endTime: { type: Number, required: true }
}, {
  timestamps: true,
  collection: 'assignments'
})

const Assignment = mongoose.model('Assignment', assignmentSchema);
module.exports = Assignment;