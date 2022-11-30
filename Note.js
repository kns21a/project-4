function note(){

let img;

this.preload = function() {
  img = loadImage('libraries/note.png');
  ring = loadSound('libraries/audio&video/phone-ring.mp3')
  parents = loadSound('libraries/audio&video/parents.mp3')
}

this.setup = function() {
  createCanvas(1319, 695)
  image(img, 0, 0);
  ring.loop();
  ring.setVolume(0.1);
  parents.loop();
  parents.setVolume(0.05);
  
}

this.draw = function() {

  cursor('grab');
  noFill()
 
  Stroke(255, 0)
  rect(0,0,380,695); // left background button
  rect(930, 0, 380, 695); // right background button
 
   }
  
this.mousePressed = function(){
    rectButton(0,0,380,695, buttonHit1) //run our check for the button below
    rectButton(930, 0, 380, 695, buttonHit2) //run our check for the button below
  }
  
this.rectButton = function(x,y,w,h, callback){
    var hit = false;
  
    hit = collidePointRect(mouseX,mouseY,x,y,w,h); //see if the mouse is in the rect
  
    if(hit){ //if its inside fire the callback
      callback(hit);
    }
  }
  
this.buttonHit1 = function(callbackData){
  this.sceneManager.showScene(bedroom);
    }

this.buttonHit2 = function(callbackData){
      this.sceneManager.showScene(bedroom);
        }
      }
