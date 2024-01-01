
const Assignment = require("../entity/Assignment");
const Repository = require("./repository");

class AssignmentRepository extends Repository {
  constructor() {
    super(Assignment);
  }
  async findByUserAndDate(userId, date, role) {
    if (date !== '/x00') {
      if (role === 'PT') {
        let assigns = await Assignment.find({ pt: userId, date: date }).populate({ path: 'exercises', populate: { path: 'muscle' } }).populate('nutritions').populate('lunch').populate('dinner').populate('user');
        return assigns;
      }
      let assign = await Assignment.findOne({ user: userId, date: date }).populate({ path: 'exercises', populate: { path: 'muscle' } }).populate('nutritions').populate('lunch').populate('dinner').populate('user');
      return assign
    } else {
      if (role === 'PT') {
        let assigns = await Assignment.find({ pt: userId }).populate({ path: 'exercises', populate: { path: 'muscle' } }).populate('nutritions').populate('lunch').populate('dinner').populate('user');
        return assigns;
      }
      let assign = await Assignment.findOne({ user: userId }).populate({ path: 'exercises', populate: { path: 'muscle' } }).populate('nutritions').populate('lunch').populate('dinner').populate('user');
      return assign
    }
  }

  async findByUserAndPT(user, pt) {
    let assign = await Assignment.findOne({ user: user, pt: pt }).populate('nutritions').populate('lunch').populate('dinner').populate('user');
    return assign
  }

  async findById(id) {
    let assign = await Assignment.findById(id).populate({ path: 'exercises', populate: { path: 'muscle' } }).populate('nutritions').populate('lunch').populate('dinner').populate('user');
    return assign
  }

  async findByUserPTAndDate(user, pt, date) {
    let assign = await Assignment.findOne({ user, pt, date }).populate('nutritions').populate('lunch').populate('dinner').populate('user');
    return assign
  }

  async save(entity) {
    if (entity._id !== null) {
      return await Assignment.findByIdAndUpdate({ _id: entity._id }, entity, { returnDocument: 'after' }, { returnOriginal: false }).populate('nutritions').populate('lunch').populate('dinner').populate('user');
    }
    delete entity._id;
    return (await Assignment.create(entity)).populate('nutritions').populate('lunch').populate('dinner').populate('user');
  }

}

module.exports = AssignmentRepository;