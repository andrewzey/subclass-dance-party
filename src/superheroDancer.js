var MakeSuperheroDancer = function(top, left, timeBetweenSteps){
  MakeDancer.apply(this, arguments);
  this.$node.addClass('superhero');
  this._bounceLength = Math.random() * 200;
  this._bounceTime = Math.random() * 5 + 100;
};

MakeSuperheroDancer.prototype = Object.create(MakeDancer.prototype);
MakeSuperheroDancer.prototype.constructor = MakeSuperheroDancer;

MakeSuperheroDancer.prototype.step = function(bounceType){
  var context = this;
  var outerArgs;
  var innerArgs;

  if (bounceType === 'top') {
    outerArgs = {'top': context._top - context._bounceLength};
    innerArgs = {'top': context._top + context._bounceLength};
  }

  if (bounceType === 'left') {
    outerArgs = {'left': context._left - context._bounceLength};
    innerArgs = {'left': context._left + context._bounceLength};
  }

  this.$node.animate(outerArgs, context._bounceTime, 'linear', function() {
    context.$node.animate(innerArgs, context._bounceTime, 'linear', function(){
      setInterval(context.step.bind(context), 1000);
    });
  });
};


var Ironman = function(top, left, timeBetweenSteps){
  MakeSuperheroDancer.apply(this, arguments);
  this.$node.addClass('ironman');
  this.$node.find('img').attr('src', 'assets/images/ironman.png');
};

Ironman.prototype = Object.create(MakeSuperheroDancer.prototype);
Ironman.prototype.constructor = Ironman;

Ironman.prototype.step = function(){
  MakeSuperheroDancer.prototype.step.call(this, 'top');
};


var Batman = function(top, left, timeBetweenSteps){
  MakeSuperheroDancer.apply(this, arguments);
  this.$node.addClass('batman');
  this.$node.find('img').attr('src', 'assets/images/batman.png');
};

Batman.prototype = Object.create(MakeSuperheroDancer.prototype);
Batman.prototype.constructor = Batman;

Batman.prototype.step = function(){
  MakeSuperheroDancer.prototype.step.call(this, 'left');
};


