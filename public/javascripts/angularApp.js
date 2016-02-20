var app = angular.module('journeyPlanner', []);


app.factory('routes', [function(){
  var o = {
    routes: []
  };
  return o;
}]);


app.controller('MainCtrl', [
'$scope',
'routes',
function($scope, routes){
  $scope.date = new Date();
  $scope.routes = routes.routes;
  $scope.addRoutes = function(){
    $scope.routes.push({type: 1, stop1: 12345, stop2: 56789, startTime: "19:00:00", endTime: "20:00:00"});   
  };
    
}]);
