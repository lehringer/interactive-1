var song1;
var song2;
var song3;
var song4;
var song5;
var song6;
var song7;
var song8;
var tformR1 = document.querySelector("#topred");
//var tformC1 = document.querySelector("#topcyan");
//var tformG1 = document.querySelector("#topgelb");
//var tformM1 = document.querySelector("#topmagenta");

//var tformR2 = document.querySelector("#bottomred");
//var tformC2 = document.querySelector("#bottomcyan");
//var tformG2 = document.querySelector("#bottomgelb");
//var tformM2 = document.querySelector("#bottommagenta");


function setup(){
	song1 = loadSound("gocarol.mp3");
	song2 = loadSound("kerry1.mp3");
	song3 = loadSound("silence.mp3");
	song4 = loadSound("smart.mp3");
	song5 = loadSound("sorry.mp3");
	song6 = loadSound("worth.mp3");
	song7 = loadSound("CHUNKY.mp3");
	song8 = loadSound("change.mp3");
	window.onload = function(){
		document.getElementsByClassName('stateOne')[0].classList.add('stateTwo')
	}   
	//tformR1.addEventListener("load", setInitialClass, false)
	//tformR1.addEventListener("transitionend", loopTransition, false);
	  //  tformR1.addEventListener("webkitTransitionEnd", loopTransition, false);
	    //tformR1.addEventListener("mozTransitionEnd", loopTransition, false);
	   // tformR1.addEventListener("msTransitionEnd", loopTransition, false);
	    //tformR1.addEventListener("oTransitionEnd", loopTransition, false);
	
	createCanvas(windowWidth,windowHeight);
	}

//function setInitialClass(){
//	tformR1.className = "stateTwo";
//	tformC1.className = "stateTwo";
//	tformG1.className = "stateTwo";
//	tformM1.className = "stateTwo";
//}

//function loopTransition(){
//	if(e.propertyName == "opacity"){
//		if(tformR1.className == "stateTwo"){
//			tformR1.className = "stateOne";
//		} else{
//			tformR1.className = "stateTwo";
//		}
//	}
//}

function mousePressed(){

	var songArray = [song1, song2, song3, song4, song5, song6, song7, song8];
	var randomsong = random(songArray);
    randomsong.play();

}
