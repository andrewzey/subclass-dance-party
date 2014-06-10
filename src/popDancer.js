var MakePopDancer = function(top, left, timeBetweenSteps){
  MakeDancer.apply(this, arguments);
  this.$node.addClass('pop');
};

MakePopDancer.prototype = Object.create(MakeDancer.prototype);
MakePopDancer.prototype.constructor = MakePopDancer;

MakePopDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);

  this.$node.toggle();
};
