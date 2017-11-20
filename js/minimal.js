
// Implement a super simple (non-standard) version of bind, if not already there.
if (!Function.prototype.bind){
    Function.prototype.bind = function (bind){
        var self = this;
        return function(){
            return self.apply(bind, arguments);
        };
    };
}

// Find out some specific browser stuff
var CSS = {};
(function(){
    
    var styles = document.createElement('div').style;
    
    var test_properties = function(properties){
        return properties.filter(function(prop){
            return (styles[prop] !== undefined);
        })[0];
    };
    
    CSS.transform = test_properties([
        'transform',
        'WebkitTransform',
        'MozTransform',
        'msTransform',
        'OTransform'
    ]);
    
})();


// Credit mr.doob and paul irish.
// http://paulirish.com/2011/requestanimationframe-for-smart-animating
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame   ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback, element){
            window.setTimeout(callback, 1000 / 60);
        };
})();

