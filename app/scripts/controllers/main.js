'use strict';

/**
 * @ngdoc function
 * @name toptalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toptalApp
 */
angular.module('toptalApp')
  .controller('MainCtrl', function (User) {
    this.user = User.getProfile();
  });
