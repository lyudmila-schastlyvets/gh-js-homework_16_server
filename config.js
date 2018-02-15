const host = 'localhost'

module.exports = {
  port: process.env.port || process.env.PORT || '3005',
  mongoUrl: process.env.MONGODB_URI || `mongodb://mila_schastlyvets:12345@ds237808.mlab.com:37808/todolist`
}