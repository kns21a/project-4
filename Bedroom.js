  
let img;
let ring;
let parents;

function preload() {
  img = loadImage('libraries/bedroom.png');
  ring = loadSound('libraries/audio&video/phone-ring.mp3')
  parents = loadSound('libraries/audio&video/parents.mp3')
}

function setup() {
  createCanvas(1319,695)
  image(img, 0, 0);
  ring.loop();
  ring.setVolume(0.3);
  parents.loop();
  parents.setVolume(0.1);
  
}

function draw (){
cursor('grab');
noFill()
Stroke(255, 0)
rect(4,398,109,79); // computer button
rect(563, 462, 65, 26); // note button
rect(632, 263, 190, 150); // window button
rect(966, 482, 37, 12); // phone button
 }

function mousePressed(){
	rectButton(4,398,109,79, buttonHit1) //run our check for the button below
  rectButton(563, 462, 65, 26, buttonHit2)
  rectButton(632, 263, 190, 150, buttonHit3)
  rectButton(966, 482, 37, 12, buttonHit4)

  function rectButton(x,y,w,h, callback){
	var hit = false;

	hit = collidePointRect(mouseX,mouseY,x,y,w,h); //see if the mouse is in the rect

	if(hit){ //if its inside fire the callback
		callback(hit);
	}
}

function buttonHit1(callbackData){
this.sceneManager.showScene(computer);
	}
function buttonHit2(callbackData)
 {this.sceneManager.showScene(note);}

function buttonHit3(callbackData)
{ this.sceneManager.showScene(window);}
          
function buttonHit4(callbackData)
{this.sceneManager.showScene(phone);}
}