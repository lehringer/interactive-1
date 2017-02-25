var img;

function setup() {
	img=createImg("cute-animal.jpg");
	createCanvas(windowWidth,windowHeight);
	background(255);

	
}

function draw() {
	image(img,0,0);
}