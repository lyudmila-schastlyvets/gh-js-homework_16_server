const mongoose = require('mongoose')

const todolistSchema = new mongoose.Schema({
  title: String,
  date: String,
  location: String
})

module.exports = mongoose.model('Event', todolistSchema)