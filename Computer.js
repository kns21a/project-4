
let img;
function preload() {
  img = loadImage('libraries/Computer.png');
}

function setup() {
  createCanvas(1319, 695)
  image(img, 0, 0);
}

function draw() {
  noFill()
  //Stroke(255, 0)
  rect(1235,0,50,35); // computer button
   }
  
   function mousePressed(){
    rectButton(4,398,109,79, buttonHit1) // browser x button
  }
  
  function rectButton(x,y,w,h, callback){
    var hit = false;
  
    hit = collidePointRect(mouseX,mouseY,x,y,w,h); //see if the mouse is in the rect
  
    if(hit){ //if its inside fire the callback
      callback(hit);
    }
  }
  
  function buttonHit1(callbackData){
  this.sceneManager.showScene(Bedroom);
    }
   

