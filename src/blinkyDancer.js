
var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  makeDancer.call(this, this.top, this.left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="blinky-dancer"><img src="styles/vern.gif" alt="Kitty"></span>');
};

MakeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.setPosition.call(this, this.top, this.left);
  makeDancer.prototype.step.call(this, this.timeBetweenSteps + 2000);
  //debugger;
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

var counter = 0;
MakeBlinkyDancer.prototype.lineUp = function() {
  counter +=100;
  this.top = 50;
  this.left = counter;
  this.float = "left";
  this.display = "inline-block";
};


// MakeBlinkyDancer.prototype.setPosition = function() {
//   makeDancer.prototype.setPosition.call(this, this.left, this.top);
// };