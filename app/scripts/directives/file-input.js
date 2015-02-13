'use strict';

angular.module('toptalApp')
  .directive('fileInput', ['$parse', function($parse) {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        elem.bind('change', function() {
          var reader = new FileReader();

          reader.onload = function(evt) {
            scope.$apply(function() {
              scope.main.user.image = evt.target.result;
            });
          };
          reader.readAsDataURL(elem[0].files[0]);
        });
      }
    };
  }]);
