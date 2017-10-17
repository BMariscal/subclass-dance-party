var MakeShiaDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  makeDancer.call(this, this.top, this.left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="box1 box2 the-putin"><img src="styles/putin.gif" alt="Putin"></span>');
};

MakeShiaDancer.prototype = Object.create(makeDancer.prototype);
MakeShiaDancer.prototype.constructor = MakeShiaDancer;

MakeShiaDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.setPosition.call(this, this.top, this.left);
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  
  //debugger;
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
};
var counter = 0;
MakeShiaDancer.prototype.lineUp = function() {
  counter +=100;
  this.top = 0;
  this.left = counter;
  this.float = "left";
  this.display = "inline-block";
};

// Target the item using the class as the selector.
// Single animation
$('.box1').animate({left: 400}, 1000);
// Chained animation
$('.box2').animate({ 
  top: 100,
  left: 100,
  width: 100,
  height: 100,
}).animate({
  top: 50,
  left: 300,
  width: 50,
  height: 50,
}).animate({
  top: 150,
  left: 300,
  width: 400,
  height: 120,
}).animate({
  top: 70,
  left: 10,
  width: 50,
  height: 50,
});