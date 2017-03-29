var song1;
var song2;
var song3;
var song4;
var song5;
var song6;
var song7;
var song8;

function setup(){
	song1 = loadSound("gocarol.mp3");
	song2 = loadSound("kerry1.mp3");
	song3 = loadSound("silence.mp3");
	song4 = loadSound("smart.mp3");
	song5 = loadSound("sorry.mp3");
	song6 = loadSound("worth.mp3");
	song7 = loadSound("CHUNKY.mp3");
	song8 = loadSound("change.mp3");
	
	createCanvas(windowWidth,windowHeight);
	}

function draw(){

if (mousePressed) {

	var songArray = [song1, song2, song3, song4, song5, song6, song7, song8];
	var randomsong = random(songArray);
    randomsong.play();
    randomsong.loop() = false;

}
}