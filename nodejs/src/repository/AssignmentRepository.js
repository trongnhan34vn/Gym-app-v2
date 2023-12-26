
const Assignment = require("../entity/Assignment");
const Repository = require("./repository");

class AssignmentRepository extends Repository {
  constructor() {
    super(Assignment);
  }
  async findByUserAndDate(userId, date, role) {
    if (date !== '/x00') {
      if (role === 'PT') {
        let assigns = await Assignment.find({ pt: userId, date: date }).populate({ path: 'exercises', populate: { path: 'muscle' } }).populate('nutritions').populate('user');
        return assigns;
      }
      let assign = await Assignment.findOne({ user: userId, date: date }).populate({ path: 'exercises', populate: { path: 'muscle' } }).populate('nutritions').populate('user');
      return assign
    } else {
      if (role === 'PT') {
        let assigns = await Assignment.find({ pt: userId }).populate({ path: 'exercises', populate: { path: 'muscle' } }).populate('nutritions').populate('user');
        return assigns;
      }
      let assign = await Assignment.findOne({ user: userId }).populate({ path: 'exercises', populate: { path: 'muscle' } }).populate('nutritions').populate('user');
      return assign
    }
  }

  async findByUserAndPT(user, pt) {
    let assign = await Assignment.findOne({ user: user, pt: pt });
    return assign
  }

  async findById(id) { 
    let assign = await Assignment.findById(id).populate({ path: 'exercises', populate: { path: 'muscle' } }).populate('nutritions').populate('user');
    return assign
  }

  async findByUserPTAndDate (user, pt, date) {
    let assign = await Assignment.findOne({user, pt, date})
    return assign
  }

}

module.exports = AssignmentRepository;