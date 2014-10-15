var Story = require('../models/story');

module.exports.create = function (req, res){
  var story = new Story(req.body);
  story.save(function(err, result) {
    res.json(result);
  });
};

module.exports.list = function (req, res){
  Story.find({}, function (err, results){
    res.json(results);
  });
};
