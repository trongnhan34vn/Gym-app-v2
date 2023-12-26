class Muscle {
  name
  image
  _id
  constructor(_id, name, image) {
    this._id = _id;
    this.name = name;
    this.image = image;
  }
  getId() { return this._id; }
  getName() { return this.name; }
  getImage() { return this.image; }
  setImage(image) { this.image = image; }
  setName(name) { this.name = name; }
  setId(id) { this._id = id; }
}

module.exports = Muscle;