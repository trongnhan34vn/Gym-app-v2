require('dotenv').config()

module.exports = {
  port: process.env.PORT || 8080,
  env: process.env.NODE_ENV || 'development',
  db: {
    url: process.env.DB_URL || 'mongodb+srv://root:Nhantic1998%40@cluster0.hnmg1ci.mongodb.net/gym-app?retryWrites=true&w=majority',
    drive: process.env.DB_DRIVE || 'mongoDB',
    host: process.env.DB_HOST || '10.0.2.2',
    port: process.env.DB_PORT || 8080,
    name: process.env.DB_NAME || 'database_name',
    user: process.env.DB_USER || '',
    pass: process.env.DB_PASS || '',
    connection_name: process.env.DB_CONNECTION_NAME || ''
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret'
  }
}