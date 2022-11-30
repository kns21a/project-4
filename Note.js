
let img;
function preload() {
  img = loadImage('libraries/note.png');
  ring = loadSound('libraries/audio&video/phone-ring.mp3')
  parents = loadSound('libraries/audio&video/parents.mp3')
}

function setup() {
  createCanvas(1319, 695)
  image(img, 0, 0);
  ring.loop();
  ring.setVolume(0.1);
  parents.loop();
  parents.setVolume(0.05);
  
}

function draw() {

  cursor('grab');
  noFill()
 
  Stroke(255, 0)
  rect(0,0,380,695); // left background button
  rect(930, 0, 380, 695); // right background button
 
   }
  
   function mousePressed(){
    rectButton(0,0,380,695, buttonHit1) //run our check for the button below
    rectButton(930, 0, 380, 695, buttonHit2) //run our check for the button below
  }
  
  function rectButton(x,y,w,h, callback){
    var hit = false;
  
    hit = collidePointRect(mouseX,mouseY,x,y,w,h); //see if the mouse is in the rect
  
    if(hit){ //if its inside fire the callback
      callback(hit);
    }
  }
  
  function buttonHit1(callbackData){
  this.sceneManager.showScene(bedroom);
    }

    function buttonHit2(callbackData){
      this.sceneManager.showScene(bedroom);
        }
   
