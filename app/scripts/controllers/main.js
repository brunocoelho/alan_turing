'use strict';

/**
 * @ngdoc function
 * @name toptalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toptalApp
 */
angular.module('toptalApp')
  .controller('MainCtrl', function ($scope, User) {
    this.user = User.getProfile();

    $scope.$watch('details', function(details) {
      console.log(details);
    });
  });
