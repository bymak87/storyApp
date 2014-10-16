var mongoose = require('mongoose');

module.exports = mongoose.model('Story', {
  email: String,
  name: String,
  friendName: String,
  story: String
});
