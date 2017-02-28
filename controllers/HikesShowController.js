angular.module('hikesApp')
  .controller('HikesShowController', HikesShowController);

HikesShowController.$inject = ['$routeParams'];
function HikesShowController($routeParams) {
  var vm = this;
  var hikeId = $routeParams.id;
  vm.hikes = hikes;
  vm.hike = hikes[hikeId]
  console.log(vm.hike);
};