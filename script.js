
var ctx = $('#canvas')[0].getContext("2d");
//draw a circle
ctx.beginPath();
ctx.arc(75, 75, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();

var x = 150;
var y= 150;
var dx = 2;
var dy = 4;
var ctx;

function init() {
  ctx = $$('#canvas') [0].getContext("2d");
	return setInterval(draw, 10);
	
}
