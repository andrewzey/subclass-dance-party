$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
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
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    if ($(this).data("dancer-maker-function-name") === "MakeBlinkyDancer") {
      if (Math.round(Math.random())){
        dancerMakerFunctionName = "Pikachu";
      } else {
        dancerMakerFunctionName = "Snorlax";
      }
    }

    if ($(this).data("dancer-maker-function-name") === "MakePopDancer") {
      if (Math.round(Math.random())){
        dancerMakerFunctionName = "Kanye";
      } else {
        dancerMakerFunctionName = "Bieber";
      }
    }

    if ($(this).data("dancer-maker-function-name") === "MakeSuperheroDancer") {
      if (Math.round(Math.random())){
        dancerMakerFunctionName = "Batman";
      } else {
        dancerMakerFunctionName = "Ironman";
      }
    }
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];


    // make a dancer with a random position

    var dancer = new dancerMakerFunction( //MakeNewBlinkyDancer
      $("body").height() * Math.random() - 250,
      $("body").width() * Math.random() - 200,
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);

  });

  $(".lineupButton").on("click", function(event){
    var lineup = function(){
      if (window.dancers.length) {
        for (var i = 0; i < window.dancers.length; i++) {
          window.dancers[i].setPosition(300, this._left);
        }
      } else {
        alert("You are dumb. Add some dancers first!");
      }
    };
    lineup();
  });
});
