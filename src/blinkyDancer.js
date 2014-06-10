var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  MakeDancer.apply(this, arguments);
  this.$node.addClass('blinky');
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function(){

  MakeDancer.prototype.step.call(this);

  this.$node.toggle();
};

var Pikachu = function(top, left, timeBetweenSteps){
  MakeBlinkyDancer.apply(this, arguments);
  this.$node.addClass('pikachu');
  this.$node.find('img').attr('src', 'assets/images/pikachu.png');
};

Pikachu.prototype = Object.create(MakeBlinkyDancer.prototype);
Pikachu.prototype.constructor = Pikachu;

Pikachu.prototype.step = function(){

};


var Snorlax = function(top, left, timeBetweenSteps){
  MakeBlinkyDancer.apply(this, arguments);
  this.$node.addClass('snorlax');
  this.$node.find('img').attr('src', 'assets/images/snorlax.gif');
};

Snorlax.prototype = Object.create(MakeBlinkyDancer.prototype);
Snorlax.prototype.constructor = Snorlax;

Snorlax.prototype.step = function(){
};

//FUNCTIONAL INSTANTIATION
// var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
//   var blinkyDancer = MakeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function(){
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

