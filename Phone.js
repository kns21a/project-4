
let img;
let parents;
function preload() {
  img = loadImage('libraries/phone.png');
  parents = loadSound('libraries/audio&video/parents.mp3')
}
function setup() {
  image(img, 0, 0);
  parents.setVolume(0.05);
  parents.loop();
}

function draw() {
  cursor('grab');
  noFill()
  Stroke(255, 0)
  rect(612,632,40,40); // home button on phone
 
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
  