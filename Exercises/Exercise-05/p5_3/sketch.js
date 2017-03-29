var x=400;
var y=300;
var xspeed =2;
var yspeed =2;

function setup(){
	createCanvas(600,600);
}

function draw(){
	background(255);
	noStroke();
	fill(255,0,0);
	triangle(x, y-50, x-50, y+50, x+50, y+50);

	if(x>width-100 || x<100){
		xspeed = xspeed*-1;
	}
	x=x+xspeed;

	if(y>height-100 || x<100){
		yspeed = yspeed*-1;
	}
	y=y+yspeed;

}
