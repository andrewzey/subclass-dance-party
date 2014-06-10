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


var Bieber = function(top, left, timeBetweenSteps){
  MakePopDancer.apply(this, arguments);
  this.$node.find('img').attr('src', 'assets/images/bieber.png');
  this.$node.addClass('bieber');
};

Bieber.prototype = Object.create(MakePopDancer.prototype);
Bieber.prototype.constructor = Bieber;

// add animation to replace this.$node.toggle();
// Bieber.prototype.step = function(){
// };



var Kanye = function(top, left, timeBetweenSteps){
  MakePopDancer.apply(this, arguments);
  this.$node.addClass('kanye');
  this.$node.find('img').attr('src', 'assets/images/kanye.png');
};

Kanye.prototype = Object.create(MakePopDancer.prototype);
Kanye.prototype.constructor = Kanye;

// add animation to replace this.$node.toggle();
// Kanye.prototype.step = function(){
// };


