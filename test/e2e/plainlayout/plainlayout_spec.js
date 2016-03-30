var utilities = require('../helpers/utilities.js');

describe("PlainLayout", function() {

  beforeEach(function() {
    // window size can be set
    browser.driver.manage().window().setSize(800, 600);
  });

  it('can transition a frame to the left', function() {

    browser.get('plainlayout/plainlayout.html').then(function() {

      var stage = element(by.id('root'));
      var layer2 = element(by.id('layer1'));
      var f1 = element(by.id('main'));
      var f2 = element(by.id('second'));

      expect(f1.getCssValue('display')).toBe('block');
      expect(f2.getCssValue('display')).toBe('none');

      utilities.transitionTo('layer1', 'second', {
          type: 'left'
        })
        .then(function() {
          protractor.promise.all([
            utilities.getBoundingClientRect('root'),
            f1.getCssValue('display'),
            utilities.getBoundingClientRect('main'),
            f2.getCssValue('display'),
            utilities.getBoundingClientRect('second')
          ]).then(function(data) {
            var stage_dimensions = data[0];
            var f1_display = data[1];
            var f1_dimensions = data[2];
            var f2_display = data[3];
            var f2_dimensions = data[4];

            expect(f1_display).toBe('none');
            expect(f2_display).toBe('block');
            expect(stage_dimensions.width).toBe(f2_dimensions.width);
            expect(f1_dimensions.left).toBeLessThan(-(stage_dimensions.width - 1));
            expect(f1_dimensions.left + f1_dimensions.width).toBeLessThan(1);
            expect(f2_dimensions.left + f2_dimensions.width).toBeGreaterThan(0);
          });
        });
    });
  });

  it('can transition a frame to the right', function() {

    browser.get('plainlayout/plainlayout.html').then(function() {

      var stage = element(by.id('root'));
      var layer2 = element(by.id('layer1'));
      var f1 = element(by.id('main'));
      var f2 = element(by.id('second'));

      expect(f1.getCssValue('display')).toBe('block');
      expect(f2.getCssValue('display')).toBe('none');

      utilities.transitionTo('layer1', 'second', {
          type: 'right'
        })
        .then(function() {
          protractor.promise.all([
            utilities.getBoundingClientRect('root'),
            f1.getCssValue('display'),
            utilities.getBoundingClientRect('main'),
            f2.getCssValue('display'),
            utilities.getBoundingClientRect('second')
          ]).then(function(data) {
            var stage_dimensions = data[0];
            var f1_display = data[1];
            var f1_dimensions = data[2];
            var f2_display = data[3];
            var f2_dimensions = data[4];

            expect(f1_display).toBe('none');
            expect(f2_display).toBe('block');

            expect(stage_dimensions.width).toBe(f2_dimensions.width);
            expect(f1_dimensions.left).toBeGreaterThan(stage_dimensions.width - 1);
            expect(f2_dimensions.left).toBeGreaterThan(-1);
          });
        });
    });
  });

  it('can transition a frame up', function() {

    browser.get('plainlayout/plainlayout.html').then(function() {

      var stage = element(by.id('root'));
      var layer2 = element(by.id('layer1'));
      var f1 = element(by.id('main'));
      var f2 = element(by.id('second'));

      expect(f1.getCssValue('display')).toBe('block');
      expect(f2.getCssValue('display')).toBe('none');

      utilities.transitionTo('layer1', 'second', {
          type: 'up'
        })
        .then(function() {
          protractor.promise.all([
            utilities.getBoundingClientRect('root'),
            f1.getCssValue('display'),
            utilities.getBoundingClientRect('main'),
            f2.getCssValue('display'),
            utilities.getBoundingClientRect('second')
          ]).then(function(data) {
            var stage_dimensions = data[0];
            var f1_display = data[1];
            var f1_dimensions = data[2];
            var f2_display = data[3];
            var f2_dimensions = data[4];

            expect(f1_display).toBe('none');
            expect(f2_display).toBe('block');

            expect(stage_dimensions.width).toBe(f2_dimensions.width);
            expect(f1_dimensions.top).toBeLessThan(stage_dimensions.top - stage_dimensions.height + 1);
            expect(f2_dimensions.top).toBeGreaterThan(stage_dimensions.top - 1);
            expect(f2_dimensions.top).toBeLessThan(stage_dimensions.top + stage_dimensions.height);
          });
        });
    });
  });

  it('can transition a frame down', function() {

    browser.get('plainlayout/plainlayout.html').then(function() {

      var stage = element(by.id('root'));
      var layer2 = element(by.id('layer1'));
      var f1 = element(by.id('main'));
      var f2 = element(by.id('second'));

      expect(f1.getCssValue('display')).toBe('block');
      expect(f2.getCssValue('display')).toBe('none');

      utilities.transitionTo('layer1', 'second', {
          type: 'down'
        })
        .then(function() {
          protractor.promise.all([
            utilities.getBoundingClientRect('root'),
            f1.getCssValue('display'),
            utilities.getBoundingClientRect('main'),
            f2.getCssValue('display'),
            utilities.getBoundingClientRect('second')
          ]).then(function(data) {
            var stage_dimensions = data[0];
            var f1_display = data[1];
            var f1_dimensions = data[2];
            var f2_display = data[3];
            var f2_dimensions = data[4];

            expect(f1_display).toBe('none');
            expect(f2_display).toBe('block');

            expect(stage_dimensions.width).toBe(f2_dimensions.width);
            expect(f1_dimensions.top).toBeGreaterThan(stage_dimensions.top + stage_dimensions.height - 1);
            expect(f2_dimensions.top).toBeGreaterThan(stage_dimensions.top - 1);
            expect(f2_dimensions.top).toBeLessThan(stage_dimensions.top + stage_dimensions.height);
          });
        });
    });
  });

});
