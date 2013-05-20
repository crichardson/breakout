var ctx = $('#canvas')[0].getContext("2d");
//draw a circle
ctx.beginPath();
ctx.arc(75, 75, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();

var x = 140;
var y= 150;
var dx = 2;
var dy = 4;
var ctx;
var WIDTH;
var HEIGHT;
var paddlex;
var paddleh = 10;
var paddlew = 75;
var rightDown = false;
var leftDown = false;
var canvasMinX = 0;
var canvasMaxX = 0;
var intervalId = 0;


function circle(x,y,r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
}

function rect(x, y, w, h) {
	ctx.beginPath();
	ctx.rect(x,y,w,h);
	ctx.closePath();
	ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

//set rightDown or leftDown if the right or left keys are down
function onKeyDown(evt) {
  if (evt.keyCode == 39) rightDown = true;
  else if (evt.keyCode == 37) leftDown = true;
}

//and unset them when the right or left key is released
function onKeyUp(evt) {
  if (evt.keyCode == 39) rightDown = false;
  else if (evt.keyCode == 37) leftDown = false;
}

$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);

function init() {
  ctx = $('#canvas') [0].getContext("2d");
  WIDTH = $("#canvas").width();
  HEIGHT = $("#canvas").height();
  intervalId = setInterval(draw, 10);
  return intervalId;
}
function draw() {
  clear();
  circle(x, y, 10);
 
  if (x + dx > WIDTH || x + dx < 0)
    dx = -dx; 
  if (y + dy > HEIGHT || y + dy < 0) 
    dy = -dy;
 
  x += dx;
  y += dy;
}
var paddlex;
var paddleh;
var paddlew;

function init_paddle() {
  paddlex = WIDTH / 2;
  paddleh = 15;
  paddlew = 80;
}

function draw() {
  clear();
  circle(x, y, 10);
  rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);
 
  if (x + dx > WIDTH || x + dx < 0)
    dx = -dx;

  if (y + dy < 0)
    dy = -dy;
  else if (y + dy > HEIGHT ^ (y + dy > HEIGHT-paddleh && (x > paddlex && x < paddlex + paddlew))) {
    if (x > paddlex && x < paddlex + paddlew)
      dy = -dy;
    else
      //game over, so stop the animation
      clearInterval(intervalId);
  }
 
  x += dx;
  y += dy;
}

rightDown = false;
leftDown = false;


       
function draw() {
  clear();
  circle(x, y, 10);

  //move the paddle if left or right is currently pressed
  if (rightDown && paddlex < (WIDTH - paddlew)) paddlex += 10;else if (leftDown && paddlex > 0) paddlex -= 10;
  rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);
 
  if (x + dx > WIDTH || x + dx < 0)
    dx = -dx;

  if (y + dy < 0)
    dy = -dy;
  else if (y + dy > HEIGHT) {
    if (x > paddlex && x < paddlex + paddlew)
      dy = -dy;
    else
      clearInterval(intervalId);
  }
 
  x += dx;
  y += dy;
}

var bricks;
var NROWS;
var NCOLS;
var BRICKWIDTH;
var BRICKHEIGHT;
var PADDING;

function initbricks() {
	NROWS = 5;
	NCOLS = 5;
	BRICKWIDTH = (WIDTH/NCOLS) - 1;
	BRICKHEIGHT = 15;
	PADDING = 1;
	
	bricks = new Array(NROWS);
	for (i=0; i < NROWS



init();
init_paddle();
