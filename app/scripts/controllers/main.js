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

    this.editPortfolio = false;
    this.editExperience = false;

    this.skillLevels = [
      { level: 'Basic', class: 'basic-level' },
      { level: 'Intermediate', class: 'intermediate-level' },
      { level: 'Advanced', class: 'advanced-level' }
    ];

    this.skillLevel = this.skillLevels[2];

    this.showSelect = false;

    this.user = User.getProfile();

    this.addSkill = function() {
      this.user.skills.push({ level: this.skillLevel.class, name: this.skillName });

      this.skillName = '';
      this.skillLevel = this.skillLevels[2];
    };

    this.deleteSkill = function(index) {
      this.user.skills.splice(index, 1);
    };

    this.enableEditExperience = function() {
      this.editExperience = true;
    };

    this.disableEditExperience = function(event) {
      event.stopPropagation();
      this.editExperience = false;
    };

    this.enableEditPortfolio = function() {
      this.editPortfolio = true;
    };

    this.disableEditPortfolio = function(event) {
      event.stopPropagation();
      this.editPortfolio = false;
    };

    this.shouldShowAddSkillButton = function() {
      return this.skillName !== undefined && this.skillName !== '';
    };

    $scope.$watch('details', function(details) {
      if (details) {
        lat = details.geometry.location.lat();
        lng = details.geometry.location.lng();

        $scope.map = { center: { latitude: lat, longitude: lng }, zoom: 8 };
      }
    });
  });
