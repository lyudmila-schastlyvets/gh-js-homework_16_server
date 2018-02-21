const host = 'localhost'

module.exports = {
  port: process.env.port || process.env.PORT || '3005',
  mongoUrl: process.env.MONGODB_URI || `mongodb://mila:12345@ds145438.mlab.com:45438/eventlist`
}