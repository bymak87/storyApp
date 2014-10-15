var mongoose = require('mongoose');

module.exports = mongoose.model('Story', {
  email: String,
  story: String
});
