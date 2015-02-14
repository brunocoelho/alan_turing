'use strict';

/**
 * @ngdoc overview
 * @name toptalApp
 * @description
 * # toptalApp
 *
 * Main module of the application.
 */
angular
  .module('toptalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngAutocomplete',
    'uiGmapgoogle-maps',
    'angularFileUpload'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/view', {
        templateUrl: 'views/view.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
