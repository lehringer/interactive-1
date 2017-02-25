function setup() {
	createCanvas(windowWidth,windowHeight);
	
	
}

function draw() {
	background(0);
	fill(random(0,225), random(0,225), random(0,225));
	ellipse(random(0,1000), random(0,1000), 50, 50);
}