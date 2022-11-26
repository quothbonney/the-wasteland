const mongoose = require('mongoose')

const annSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('ann', annSchema);