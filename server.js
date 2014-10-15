var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    storiesController = require('./server/controllers/stories-controller');

mongoose.connect('mongodb://localhost:27017/story-demo');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.use(bodyParser.json());

app.use('/js', express.static(__dirname + '/client/js'));

// REST API
app.get('/api/stories', storiesController.list);

app.post('/api/stories', storiesController.create);

app.listen(3000, function (){
  console.log("I'm listening...");
});
