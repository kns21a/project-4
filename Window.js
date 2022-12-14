
let img;
let wind;
let parents;
let ring;

function preload() {
  img = loadImage('libraries/window.png');
  wind = loadSound('libraries/audio&video/wind.mp3');
  parents = loadSound('libraries/audio&video/parents.mp3');
  ring = loadSound('libraries/audio&video/phone-ring.mp3')
}

function setup() {
  createCanvas(1319,695)
  image(img, 0, 0);
  
  wind.setVolume(0.3)
  wind.loop();
  parents.setVolume(0.03)
  parents.loop()
  ring.setVolume(0.09)
  ring.loop()
}

function draw() {
  cursor('grab');
  noFill()
  Stroke(255, 0)
  rect(0,450,1319,400); //  button
   }
  
function mousePressed(){
    rectButton(4,398,109,79, buttonHit) //run our check for the button below
  }
  
function rectButton(x,y,w,h, callback){
    var hit = false;
  
    hit = collidePointRect(mouseX,mouseY,x,y,w,h); //see if the mouse is in the rect
  
    if(hit){ //if its inside fire the callback
      callback(hit);
    }
  }
  
function buttonHit(callbackData){
  this.sceneManager.showScene(bedroom);
    }
