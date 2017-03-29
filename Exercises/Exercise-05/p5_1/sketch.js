 var moveRIGHT =0;

function setup() {

	createCanvas(600,600);
}

function draw() {
background(255);
	var x = 0;
	while( x <= width){
		fill(0, 0, random(255));
		ellipse(x, 100, 50, 50);
		x = x+50;
		//print(x);
	}
	
	for(var a=0; a <=width; a+=50){
		fill(a,a,a);
		ellipse(a+moveRIGHT,400, 50,50);
		//print(a);
	}
	moveRIGHT=moveRIGHT+1;
	print(moveRIGHT);

}