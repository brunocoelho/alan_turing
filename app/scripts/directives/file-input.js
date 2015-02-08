'use strict';

angular.module('toptalApp')
  .directive('fileInput', ['$parse', function($parse) {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        elem.bind('change', function() {
          var reader = new FileReader();

          $parse(attrs.fileInput).assign(scope, elem[0].files);
          reader.onload = function(evt) {
            scope.$apply(function() {
              scope.main.user.image = evt.target.result;
            });
          };
          reader.readAsDataURL(scope.files[0]);
        });
      }
    };
  }]);
