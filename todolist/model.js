const mongoose = require('mongoose')

const todolistSchema = new mongoose.Schema({
  description: String,
  date: String,
  url: String
})

module.exports = mongoose.model('List', todolistSchema)