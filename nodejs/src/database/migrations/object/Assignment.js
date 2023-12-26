class Assignment {
  _id
  exercises
  nutritions  
  user 
  pt 
  date
  startTime
  endTime
  constructor(_id, user, pt, exercises, nutritions,date, startTime, endTime) {
    this._id = _id;
    this.exercises = exercises;
    this.nutritions = nutritions;
    this.user = user;
    this.pt = pt;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

module.exports = Assignment