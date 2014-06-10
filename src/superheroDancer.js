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

Ironman.prototype.step = function(){
  var bounceTime = 200;
  var bounceLength = 100;
  var context = this;

  this.$node.animate({'top': this._top - bounceLength}, bounceTime, 'linear', function() {
    context.$node.animate({'top': context._top + bounceLength}, bounceTime, 'linear', function(){
      setInterval(context.step.bind(context), 1000);
    });
  });

};



var Batman = function(top, left, timeBetweenSteps){
  MakeSuperheroDancer.apply(this, arguments);
  this.$node.addClass('batman');
  this.$node.find('img').attr('src', 'assets/images/batman.png');
};

Batman.prototype = Object.create(MakeSuperheroDancer.prototype);
Batman.prototype.constructor = Batman;

Batman.prototype.step = function(){
  var bounceTime = 200;
  var bounceLength = 100;
  var context = this;

  this.$node.animate({'left': this._left - bounceLength}, bounceTime, 'linear', function() {
    context.$node.animate({'left': context._left + bounceLength}, bounceTime, 'linear', function(){
      setInterval(context.step.bind(context), 1000);
    });
  });

};


