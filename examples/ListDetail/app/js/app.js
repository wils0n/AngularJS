'use strict';

var myApp = angular.module('myApp', [
  'ngRoute',
  'menuControllers'
]);

myApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
      when('/platillos', {
        templateUrl: 'partials/menu-list.html',
        controller: 'MenuListCtrl'
      }).
      when('/platillos/:platilloId', {
        templateUrl: 'partials/menu-detail.html',
        controller: 'MenuDetailCtrl'
      }).
      otherwise({
        retidirectTo: '/platillos'
      });
  }]);
