'use strict';

/**
 * @ngdoc function
 * @name toptalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the toptalApp
 */
angular.module('toptalApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
