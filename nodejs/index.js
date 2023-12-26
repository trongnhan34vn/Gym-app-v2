const express = require('express')
const cors = require('cors');

const app = express()

const bodyParser = require('body-parser')
const { env, port } = require('./src/config/config')
const db = require('./src/config/connectDB')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.disable('etag');

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect8888
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', '*');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();    

  // Pass to next layer of middleware
});

// Connect Local Server
if (env === 'development') {
  // Local environment
  app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
  })
} else {
  // cloud function
  // 'project' will be the name of the function in GCP
  exports.project = app
}

// Connect Database
db.connect();

// Migrate Role
const RoleService = require('./src/service/RoleService');
const roleMigrate = require('./src/database/migrations/roleMigration');
new RoleService().findAll().then(res => roleMigrate(res));

// Migrate User
const userMigrate = require('./src/database/migrations/userMigration');
const UserService = require('./src/service/userService');
new UserService().findAll().then(res => {
  userMigrate(res)
});

// Migrate muscles
const muscleMigrate = require('./src/database/migrations/muscleMigration');
muscleMigrate();

// Migrate exercises
const exerciseMigrate = require('./src/database/migrations/exerciseMigration');
exerciseMigrate();

// Migrate Nutrition
const nutritionMigrate = require('./src/database/migrations/nutritionMigration');
nutritionMigrate();

// Migrate Assignment
const assignmentMigrate = require('./src/database/migrations/assignMigration');
assignmentMigrate()

const routeApi = require('./src/router');
/**
 * Router
 */
routeApi(app)