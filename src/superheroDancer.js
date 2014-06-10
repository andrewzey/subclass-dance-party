var MakeSuperheroDancer = function(top, left, timeBetweenSteps){
  MakeDancer.apply(this, arguments);
  this.$node.addClass('superhero');
};

MakeSuperheroDancer.prototype = Object.create(MakeDancer.prototype);
MakeSuperheroDancer.prototype.constructor = MakeSuperheroDancer;

MakeSuperheroDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};


var Ironman = function(top, left, timeBetweenSteps){
  MakeSuperheroDancer.apply(this, arguments);
  this.$node.addClass('ironman');
  this.$node.find('img').attr('src', 'assets/images/ironman.png');
};

Ironman.prototype = Object.create(MakeSuperheroDancer.prototype);
Ironman.prototype.constructor = Ironman;

// add animation to replace this.$node.toggle();
// Ironman.prototype.step = function(){
// };



var Batman = function(top, left, timeBetweenSteps){
  MakeSuperheroDancer.apply(this, arguments);
  this.$node.addClass('batman');
  this.$node.find('img').attr('src', 'assets/images/batman.png');
};

Batman.prototype = Object.create(MakeSuperheroDancer.prototype);
Batman.prototype.constructor = Batman;

// add animation to replace this.$node.toggle();
// Batman.prototype.step = function(){
// };

