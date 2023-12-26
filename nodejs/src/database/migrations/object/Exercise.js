class Exercise {
  _id
  name
  image
  difficult
  sets
  time
  breakTime
  muscle
  constructor(_id, name, image, difficult, sets, time, breakTime, muscle) {
    this._id = _id;
    this.name = name;
    this.image = image;
    this.difficult = difficult;
    this.sets = sets;
    this.time = time;
    this.breakTime = breakTime;
    this.muscle = muscle;
  }

  getId() { return this._id; }
  getName() { return this.name; }
  getImage() { return this.image; }
  getDifficult() { return this.difficult; }
  getSet() { return this.sets; }
  getTime() { return this.time; }
  getBreakTime() { return this.breakTime; }
  getMuscle() { return this.muscle; }
  setName(name) { this.name = name }
  setImage(image) { this.image = image }
  setDifficult(difficult) { this.difficult = difficult }
  setSets(sets) { this.sets = sets }
  setTime(time) { this.time = time }
  setBreakTime(breakTime) { this.breakTime = breakTime }
  setMuscle(muscle) { this.muscle = muscle }
}

module.exports = Exercise