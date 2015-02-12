'use strict';

angular.module('toptalApp')
  .factory('User', function() {
    var profile = {
      amazingProject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
      availability: 'Full-time',
      city: 'Los Angeles',
      clients: 'In clients I look for...',
      experience: [
        { tech: 'Ruby', years: 3 },
        { tech: 'JavaScript', years: 3 },
        { tech: 'Python', years: 1 },
        { tech: 'Java', years: 2 }
      ],
      firstName: function() {
        return this.name.split(' ')[0];
      },
      image: 'images/user_picture.png',
      language: 'English, French, German',
      name: 'John Galt',
      note: {
        from: 'Breanden Beneschott, Toptal',
        message: 'John is the best engineer I\'ve ever worked with.'
      },
      portfolio: [
        { projectName: 'M2S', skills: 'C#' },
        { projectName: 'Bemind', skills: 'Ruby' },
        { projectName: 'Elife', skills: 'AngularJs' },
        { projectName: 'Liferay', skills: 'JavaScript' },
        { projectName: '', skills: '' },
        { projectName: '', skills: '' },
        { projectName: '', skills: '' }
      ],
      preferredEnvironment: 'Git, Github, Mac OSX, Linux, Vim, Atom',
      skills: [
        {
          level: 'advanced-level',
          name: 'AngularJs'
        },
        {
          level: 'advanced-level',
          name: 'JavaScript'
        },
        {
          level: 'intermediate-level',
          name: 'Ruby'
        },
        {
          level: 'basic-level',
          name: 'Java'
        },
      ]
    };

    return {
      getProfile: function() {
        return profile;
      }
    };
  });
