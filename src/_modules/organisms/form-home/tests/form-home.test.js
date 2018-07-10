'use strict';

var FormHome = require('../form-home');

describe('FormHome View', function() {

  beforeEach(function() {
    this.formHome = new FormHome();
  });

  it('Should run a few assertions', function() {
    expect(this.formHome);
  });

});
