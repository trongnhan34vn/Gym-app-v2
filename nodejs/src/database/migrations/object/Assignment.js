class Assignment {
  _id
  exercises
  nutritions
  lunch
  dinner
  user
  pt
  date
  startTime
  endTime
  constructor(_id, user, pt, exercises, nutritions, lunch, dinner, date, startTime, endTime) {
    this._id = _id;
    this.exercises = exercises;
    this.nutritions = nutritions;
    this.lunch = lunch;
    this.dinner = dinner;
    this.user = user;
    this.pt = pt;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

module.exports = Assignment