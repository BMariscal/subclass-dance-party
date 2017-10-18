$(document).ready(function() {
  window.dancers = [];
//BINLY DANCER
  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

     // dancerMakerFunctionName is a string which must match
     // * one of the dancer maker functions available in global scope.
     // * A new object of the given type will be created and added
     // * to the stage.
     
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we"re supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 800
    );
    window.dancers.push(dancer);
    $("body").append(dancer.$node);
    if (window.dancers.length % 2 === 0){partnerUp();}
  });

// CARLTON DANCER

  $(".addDancerButtonCarlton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerCarltonMakerFunctionName = $(this).data("data-dancer-maker-function-name");

    // get the maker function for the kind of dancer we"re supposed to make
    var dancerCarltonMaker = window[dancerCarltonMakerFunctionName];

    // make a dancer with a random position

    var dancer = new MakeCarltonDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 800
    );
    window.dancers.push(dancer);
    $("body").append(dancer.$node);
    if (window.dancers.length % 2 === 0){partnerUp();}
  });
//SHIA DANCER

  $(".addDancerButtonShia").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    // var dancerCarltonMakerFunctionName = $(this).data("data-dancer-maker-function-name");

    // // get the maker function for the kind of dancer we"re supposed to make
    // var dancerCarltonMaker = window[dancerCarltonMakerFunctionName];

    // make a dancer with a random position

    var dancer = new MakeShiaDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 800
    );
    window.dancers.push(dancer);
    $("body").append(dancer.$node);
   if (window.dancers.length % 2 === 0) { partnerUp();}
  });

  console.log(window.dancers);

  $(".lineup").on("click", function(event) {
    
    var dancers = window.dancers;
    console.log('window.dancers');
    console.log(window.dancers);
    dancers.forEach(function(dancer) {
      console.log('my node');
      console.log(dancer);
      dancer.lineUp.call(dancer);



    });
  });
  var partnerUp = function() {
    var dancers = window.dancers;
    for (var i = 0; i < dancers.length; i++) {
      if (i % 2 !== 0) {
        dancers[i].top = dancers[i - 1].top;
        dancers[i].left = dancers[i - 1].left + 50;
      }
    }

  };

  // var findPartner = function(x1, y1, x2, y2) {
  //   console.log("partnerUp");
  //   var horizontalDiff = x1 - x2;
  //   var verticalDiff = y1 - y2;

  //   var distance = Math.sqrt(Math.abs(horizontalDiff * horizontalDiff) + Math.abs(verticalDiff * verticalDiff));
  //   return distance;
  // };

});

