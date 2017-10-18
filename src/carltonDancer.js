var MakeCarltonDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.counter  = 0;
  makeDancer.call(this, this.top, this.left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="the-carlton"><img src="styles/putin2.gif" alt="Carlton"></span>');
};

MakeCarltonDancer.prototype = Object.create(makeDancer.prototype);
MakeCarltonDancer.prototype.constructor = MakeCarltonDancer;
var counter = 0;
MakeCarltonDancer.prototype.lineUp = function() {
  counter +=100;
  this.top = 50;
  this.left = counter;
  this.float = "left";
  this.display = "inline-block";
};

MakeCarltonDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.setPosition.call(this, this.top, this.left);
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  //debugger;
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
  this.$node.mouseenter(function() {
    this.$node.css({
      transition: '2s linear',
      transform: 'rotate(' + 360 + 'deg)'
    });

    // setTimeout(this.$node.css({
    //   transition: '',
    //   transform: ''
    // }).bind(this), 1000);


  }.bind(this));

  this.$node.mouseleave(function() {
    this.$node.css({
      transition: '',
      transform: ''
    });

    // setTimeout(this.$node.css({
    //   transition: '',
    //   transform: ''
    // }).bind(this), 1000);


  }.bind(this));


};