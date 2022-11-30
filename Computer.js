
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
  rect(1235,0,50,35); // browser x 
  
  rect(110,0,52,35); // Tab 1
  rect(169,0,52,35); // Tab 2
  rect(225,0,52,35); // Tab 3
  rect(284,0,52,35); // Tab 4
  rect(340,0,52,35); // Tab 5
  rect(399,0,52,35); // Tab 6
  rect(456,0,52,35); // Tab 7
  rect(515,0,52,35); // Tab 8
  rect(573,0,52,35); // Tab 9
  rect(630,0,52,35); // Tab 10
  rect(687,0,52,35); // Tab 11
  rect(747,0,52,35); // Tab 12
  rect(803,0,52,35); // Tab 13
  rect(863,0,52,35); // Tab 14
  rect(920,0,52,35); // Tab 15
  rect(979,0,52,35); // Tab 16


}
  
   function mousePressed(){
    rectButton(1235,0,50,35, buttonHit) // browser x button

    rectButton(110,0,52,35, buttonHit1); // Tab 1
    rectButton(169,0,52,35, buttonHit2); // Tab 2
    rectButton(225,0,52,35, buttonHit3); // Tab 3
    rectButton(284,0,52,35, buttonHit4); // Tab 4
    rectButton(340,0,52,35, buttonHit5); // Tab 5
    rectButton(399,0,52,35, buttonHit6); // Tab 6
    rectButton(456,0,52,35, buttonHit7); // Tab 7
    rectButton(515,0,52,35, buttonHit8); // Tab 8
    rectButton(573,0,52,35, buttonHit9); // Tab 9
    rectButton(630,0,52,35, buttonHit10); // Tab 10
    rectButton(687,0,52,35, buttonHit11); // Tab 11
    rectButton(747,0,52,35, buttonHit12); // Tab 12
    rectButton(803,0,52,35, buttonHit13); // Tab 13
    rectButton(863,0,52,35, buttonHit14); // Tab 14
    rectButton(920,0,52,35, buttonHit15); // Tab 15
    rectButton(979,0,52,35, buttonHit16); // Tab 16
  }
  
  function rectButton(x,y,w,h, callback){
    var hit = false;
  
    hit = collidePointRect(mouseX,mouseY,x,y,w,h); //see if the mouse is in the rect
  
    if(hit){ //if its inside fire the callback
      callback(hit);
    }
  }
  
  function buttonHit(callbackData){
  this.sceneManager.showScene(Bedroom);
  }
  function buttonHit1(callbackData){ 

    }
    function buttonHit2(callbackData){

      }
      function buttonHit3(callbackData){

      }
      function buttonHit4(callbackData){

      }
      function buttonHit5(callbackData){
      }
      function buttonHit6(callbackData){
        
      }
      function buttonHit7(callbackData){

      }
      function buttonHit8(callbackData){

      }
      function buttonHit9(callbackData){

      }
      function buttonHit10(callbackData){

      }
      function buttonHit11(callbackData){

      }
      function buttonHit12(callbackData){

      }
      function buttonHit13(callbackData){

      }
      function buttonHit14(callbackData){

      }
      function buttonHit15(callbackData){

      }
      function buttonHit16(callbackData){

      }
   

