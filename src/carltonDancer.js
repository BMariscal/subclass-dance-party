var MakeCarltonDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  makeDancer.call(this, this.top, this.left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="the-carlton"><img src="styles/carlton.gif" alt="Carlton"></span>');
};

MakeCarltonDancer.prototype = Object.create(makeDancer.prototype);
MakeCarltonDancer.prototype.constructor = MakeCarltonDancer;

MakeCarltonDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.setPosition.call(this, this.top, this.left);
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  //debugger;
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};