function setup(){
	createCanvas(600,600);
}

function draw(){
	for(varx=0; x<=mouseX; x+=50){
		for (var y=0; y<=mouseY; y+50);
			fill(x,y, random(255));
			ellipse(x,y,50,50);
			}
	}
}