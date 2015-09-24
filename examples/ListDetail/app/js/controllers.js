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

menuControllers.controller('MenuDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.platilloId = $routeParams.platilloId;
  }]);
