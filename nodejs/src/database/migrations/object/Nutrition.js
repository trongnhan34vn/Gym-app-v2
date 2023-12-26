class Nutrition {
  _id
  name
  image
  kcal
  protein
  carbs
  fat

  constructor(_id, name, image, kcal, protein, carbs, fat) {
    this._id = _id;
    this.name = name;
    this.image = image;
    this.kcal = kcal;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }

}

module.exports = Nutrition;