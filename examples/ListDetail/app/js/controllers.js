'use strict';

/* Controllers */

var menuControllers = angular.module('menuControllers', []);

menuControllers.controller('MenuListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('platillos/platillos.json').success(function(data) {
      $scope.platillos = data;
    });

    $scope.orderProp = 'id';
  }]);

menuControllers.controller('MenuDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    console.log($routeParams.platilloSlug);
    $http.get('platillos/' + $routeParams.platilloSlug + '.json').success(function(data) {
      $scope.platillo = data;
    });
  }]);
