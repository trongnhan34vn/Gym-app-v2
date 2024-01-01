
const {
  OK,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  NO_CONTENT,
  BAD_REQUEST
} = require('../helpers/constants');
const AssignmentService = require('../service/AssignmentService');
const ResponseMessage = require('../dto/ResponseMessage');

class AssignmentController {
  async findByUserAndDate(req, res, next) {
    try {
      const { user, date, role } = req.query;
      let assign = await new AssignmentService().findByUserAndDate(user, date, role);
      if (!assign) {
        return res.status(INTERNAL_SERVER_ERROR).json(new ResponseMessage(500, 'Internal Server Error'));
      }
      let rm = new ResponseMessage(200, 'Assign Found', assign)
      return res.status(OK).json(rm);
    } catch (error) {
      console.log(error);
    }
  }

  async findById(req, res, next) {
    try {
      const { id } = req.params

      let assign = await new AssignmentService().findById(id);
      if (!assign) {
        return res.status(INTERNAL_SERVER_ERROR).json(new ResponseMessage(500, 'Internal Server Error'));
      }
      let rm = new ResponseMessage(200, 'Assign Found', assign)
      return res.status(OK).json(rm);
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;

      const updateRes = await new AssignmentService().update(id, req.body);
      if (updateRes.status === 500) {
        return res.status(INTERNAL_SERVER_ERROR).json(new ResponseMessage(500, 'Internal Server Error'));
      }
      return res.status(OK).json(new ResponseMessage(200, updateRes.message, updateRes.data));
    } catch (error) {
      console.log(error);
    }
  }

  async create(req, res, next) {
    try {
      const data = req.body;
      const assignDuplicated = await new AssignmentService().findByUserPTAndDate(data.user, data.pt, data.date);
      if (!assignDuplicated) {
        const assign = await new AssignmentService().save(data);
        console.log('assign ---->', assign);
        if (!assign) {
          return res.status(INTERNAL_SERVER_ERROR).json(new ResponseMessage(500, 'Internal Server Error'));
        }
        return res.status(OK).json(new ResponseMessage(200, 'Create Assign Success', assign));
      }
      console.log('assignDup ------>' + assignDuplicated);
      return res.status(OK).json(new ResponseMessage(200, 'Already Assigned'));

    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new AssignmentController();