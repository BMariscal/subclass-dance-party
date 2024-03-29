// Creates and returns a new dancer object that can step

var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  // this.$node = window.node;
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  //debugger;
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  // this.top = top;
  // this.left = left;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  top = top + 100;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};