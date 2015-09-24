'use strict';

/* Controllers */

var myApp = angular.module('myApp', []);

myApp.controller('MenuListCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("ingers");
  $http.get('platillos/platillos.json').success(function(data) {
    $scope.platillos = data;
  });
  $scope.orderProp = 'id';
}]);
