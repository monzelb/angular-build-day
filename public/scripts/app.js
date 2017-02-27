angular.module('hikesApp', ['ngRoute'])
       .config(config);

       ////////////
// ROUTES //
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/hikes/index.html',
      controller: 'HikesIndexController',
      controllerAs: 'hikesIndexCtrl'
    })
    .when('/hikes/:id', {
      templateUrl: 'templates/hikes/show.html',
      controller: 'HikesShowController',
      controllerAs: 'hikesShowCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}