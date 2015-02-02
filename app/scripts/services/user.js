'use strict';

angular.module('toptalApp')
  .factory('User', function() {
    var profile = {
      city: 'Los Angeles',
      image: 'images/user_picture.png',
      name: 'Bruno Coelho'
    };

    return {
      getProfile: function() {
        return profile;
      }
    };
  });
