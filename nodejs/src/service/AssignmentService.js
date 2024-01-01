const AssignmentRepository = require("../repository/AssignmentRepository");
const Assignment = require("../entity/Assignment");
const Service = require("./Service");

class AssignmentService extends Service {
  constructor() {
    super(AssignmentRepository)
  }

  async findByUserAndDate(user, date, role) {
    return await new AssignmentRepository().findByUserAndDate(user, date, role);
  }

  async findByUserAndPT(user, pt) {
    return await new AssignmentRepository().findByUserAndPT(user, pt);
  }

  async findByUserPTAndDate(user, pt, date) {
    return await new AssignmentRepository().findByUserPTAndDate(user, pt, date);
  }

  async update(id, data) {
    let oldAssign = await this.findById(id);

    if (!oldAssign) return {
      status: 500,
      message: 'Something went wrong'
    }

    // console.log('oldAssign ------->', oldAssign);
    const { exercises, nutritions, lunch, dinner } = data;

    let newAssign;
    if (exercises) {
      newAssign = { ...oldAssign._doc, exercises };
    } else {
      if (nutritions) {
        newAssign = { ...oldAssign._doc, nutritions };
      }

      if (lunch) {
        newAssign = { ...oldAssign._doc, lunch };
      }
      if (dinner) {
        newAssign = { ...oldAssign._doc, dinner };
      }
    }

    let saveAssign = await this.save(newAssign);
    let res = await this.findById(saveAssign._id);

    if (!saveAssign) return {
      status: 500,
      message: 'Something went wrong'
    }
    return {
      status: 200,
      message: 'Update Success',
      data: res
    }
  }
}

module.exports = AssignmentService;