app.controller('storiesController', ['$scope', '$resource', function ($scope, $resource) {
  var Story = $resource('/api/stories');

  Story.query(function (results){
    $scope.stories = results;
  });

  $scope.createStory = function () {
    var story = new Story();
    story.email = $scope.email;
    story.$save(function (result){
      $scope.stories.push(result);
      $scope.stories.email ="";
    });
   };
  }]);
