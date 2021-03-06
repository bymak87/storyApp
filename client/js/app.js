var app = angular
.module('storyApp', [
  'ngResource',
  'ui.router'])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home',{
    url:'/',
    templateUrl: 'views/form.html',
    controller: 'storiesController'
  })
  .state('about',{
    url:'/about',
    templateUrl: 'views/about.html'
  });
}]);
