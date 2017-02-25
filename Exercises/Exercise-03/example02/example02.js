var x=0;
var y=0;

function setup() {
	background(0,0,225);
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {
	background(0,0,225);
	fill("pink");
	ellipse(x,y,50,50);
  x = x+10;

  if (x > width) {
  		x =0;
  		y =y+50;
  }
}