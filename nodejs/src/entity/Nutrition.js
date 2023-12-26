const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nutritionSchema = new Schema({
  name: { type: String, required: true },
  image: {type: String, required: true},
  kcal: { type: Number, required: true },
  protein: { type: Number, required: true },
  carbs: { type: Number, required: true },
  fat: { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'nutritions'
})

const Nutrition = mongoose.model('Nutrition', nutritionSchema)
module.exports = Nutrition;