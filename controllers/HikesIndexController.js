angular.module('hikesApp')
  .controller('HikesIndexController', HikesIndexController);



HikesIndexController.$inject = [];
function HikesIndexController() {
  var vm = this;
  vm.hikes = hikes;
};