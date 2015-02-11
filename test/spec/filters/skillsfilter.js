'use strict';

describe('Filter: skillsFilter', function () {

  // load the filter's module
  beforeEach(module('toptalApp'));

  // initialize a new instance of the filter before each test
  var skillsFilter;
  beforeEach(inject(function ($filter) {
    skillsFilter = $filter('skillsFilter');
  }));

  it('should return a list with advanced skills first', function () {
    var skills = [
      { level: 'intermediate-level', name: 'Ruby' },
      { level: 'advanced-level', name: 'JavaScript' }
    ];

    expect(skills[0].name).toBe('Ruby');
    expect(skillsFilter(skills)[0].name).toBe('JavaScript');
  });
});
