describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new MakeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('carltonDancer', function() {

  var carltonDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    carltonDancer = new MakeCarltonDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(carltonDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a lineUp method', function() {
    expect(MakeCarltonDancer.prototype.lineUp).to.exist;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(carltonDancer, 'step');
      expect(carltonDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(carltonDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(carltonDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('shiaDancer', function() {

  var shiaDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shiaDancer = new MakeShiaDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shiaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a lineUp method', function() {
    expect(MakeShiaDancer.prototype.lineUp).to.exist;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(shiaDancer, 'step');
      expect(shiaDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shiaDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shiaDancer.step.callCount).to.be.equal(2);
    });
  });
});
























