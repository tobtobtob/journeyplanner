var app = angular.module('journeyPlanner', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.date = new Date();
}]);
