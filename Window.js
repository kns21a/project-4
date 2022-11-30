function window(){

let img;
let wind;
let parents;
let ring;

this.preload = function() {
  img = loadImage('libraries/window.png');
  wind = loadSound('libraries/audio&video/wind.mp3');
  parents = loadSound('libraries/audio&video/parents.mp3');
  ring = loadSound('libraries/audio&video/phone-ring.mp3')
}

this.setup = function() {
  createCanvas(1319,695)
  image(img, 0, 0);
  
  wind.setVolume(0.3)
  wind.loop();
  parents.setVolume(0.03)
  parents.loop()
  ring.setVolume(0.09)
  ring.loop()
}

this.draw = function() {
  cursor('grab');
  noFill()
  Stroke(255, 0)
  rect(0,450,1319,400); //  button
   }
  
this.mousePressed = function(){
    rectButton(4,398,109,79, buttonHit) //run our check for the button below
  }
  
this.rectButton = function(x,y,w,h, callback){
    var hit = false;
  
    hit = collidePointRect(mouseX,mouseY,x,y,w,h); //see if the mouse is in the rect
  
    if(hit){ //if its inside fire the callback
      callback(hit);
    }
  }
  
this.buttonHit = function(callbackData){
  this.sceneManager.showScene(bedroom);
    }
  }