'use strict';

var CarouselHome = require('../carousel-home');

describe('CarouselHome View', function() {

  beforeEach(function() {
    this.carouselHome = new CarouselHome();
  });

  it('Should run a few assertions', function() {
    expect(this.carouselHome);
  });

});
