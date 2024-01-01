const authRouter = require('../router/authRouter');
const assignRouter = require('../router/assignRouter');
const exerciseRouter = require('../router/exerciseRouter')
const nutritionRouter = require('../router/nutritionRouter');
const muscleRouter = require('../router/muscleRouter');

function routeApi (app) {
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/assigns', assignRouter);
  app.use('/api/v1/exercises', exerciseRouter);
  app.use('/api/v1/nutritions', nutritionRouter);
  app.use('/api/v1/muscles', muscleRouter);
}

module.exports = routeApi