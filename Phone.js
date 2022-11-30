function phone(){

let img;
let parents;
this.preload = function() {
  img = loadImage('libraries/phone.png');
  parents = loadSound('libraries/audio&video/parents.mp3')
}
this.setup = function() {
  image(img, 0, 0);
  parents.setVolume(0.05);
  parents.loop();
}

this.draw = function() {
  cursor('grab');
  noFill()
  Stroke(255, 0)
  rect(612,632,40,40); // home button on phone
 
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