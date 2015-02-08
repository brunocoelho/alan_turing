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
    var lat,
        lng;
    this.user = User.getProfile();

    $scope.$watch('details', function(details) {
      if (details) {
        lat = details.geometry.location.lat();
        lng = details.geometry.location.lng();

        $scope.map = { center: { latitude: lat, longitude: lng }, zoom: 8 };
      }
    });
  });
