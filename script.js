
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
var WIDTH;
var HEIGHT;
var ctx;

function init() {
  ctx = $('#canvas') [0].getContext("2d");
  WIDTH = $("#canvas").width();
  HEIGHT = $("#canvas").height();
	return setInterval(draw, 10);
}

function circle(x,y,r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
}

function rect(x, y, w, h) {
	ctx.beginPath();
	ctx.rect(x,y,w, h);
	ctx.closePath();
	ctx.fill();
}
function draw() {
	clear();
	circle(x, y, 10);
		
	x += dx;
	y += dy;
}

init();
