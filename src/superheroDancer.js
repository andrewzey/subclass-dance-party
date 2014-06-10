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
