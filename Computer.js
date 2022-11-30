function computer(){
let img;

let vid1;
let vid2;
let vid3;
let vid4;
let vid5;

this.preload = function() {
img = loadImage('libraries/computer.png');
}

this.setup = function() {
  image(img, 0, 0);
  
}

this.draw = function() {
  noFill()
  Stroke(255, 0)
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
  
  rect(0, 100, 1319, 100); // button to close video
  rect(0, 200, 1319, 100); // button to close video
  rect(0, 300, 1319, 100); // button to close video
  rect(0, 400, 1319, 100); // button to close video
  rect(0, 500, 1319, 100); // button to close video

}
  
this.mousePressed = function(){
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
    rectButton(863,0,52,35, buttonHit14); // Tab 14
    rectButton(920,0,52,35, buttonHit15); // Tab 15
    rectButton(979,0,52,35, buttonHit16); // Tab 16

    rectButton(0, 100, 1319, 100, buttonHit13); // button to close video
    rectButton(0, 200, 1319, 100, buttonHit17); // button to close video
    rectButton(0, 300, 1319, 100, buttonHit18); // button to close video
    rectButton(0, 400, 1319, 100, buttonHit19); // button to close video
    rectButton(0, 500, 1319, 100, buttonHit20); // button to close video
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
this.buttonHit1 = function(callbackData){ 
    window.alert("Why are my parents always fighting?")
    }
this.buttonHit2 = function(callbackData){
      window.alert("Why am I never good enough for my parents?")
      }
this.buttonHit3 = function(callbackData){
        window.alert("Why do my parents hate me?")
      }

this.buttonHit4 = function(callbackData){
        vid1 = createVideo('libraries/audio&video/Abusive parents.webm');
        vid1.size(600, 600);
        vid1.position(350, 100);
        vid1.play();
        vid1.volume(0.2)
        window.alert("Video is loading, hit 'OK' to continue")

      }
   this.buttonHit5 = function(callbackData){
        vid2 = createVideo('libraries/audio&video/messed up.webm');
        vid2.size(600, 600);
        vid2.position(350, 100);
        vid2.play();
        vid2.volume(0.2)
        window.alert("Video is loading, hit 'OK' to continue")
      
      }
    this.buttonHit6 = function(callbackData){
        window.alert("Is running away illegal?")
      }
      this.buttonHit7 = function(callbackData){
        window.alert("What should I pack if I run away, and where are the best places to hide?")
      }
      this.buttonHit8 = function(callbackData){
        window.alert("I don't feel like myself lately, is that normal?")
      }
      this.buttonHit9 = function(callbackData){
        window.alert("Why don't I feel happy anymore?")
      }
      this.buttonHit10 = function(callbackData){
        window.alert("Am I the problem?")
      }

      this.buttonHit11 = function(callbackData){
        vid3 = createVideo('libraries/audio&video/emotional self harm.webm');
        vid3.size(600, 600);
        vid3.position(350, 100);
        vid3.play();
        vid3.volume(0.2)
        window.alert("Video is loading, hit 'OK' to continue")

      }
      this.buttonHit12 = function(callbackData){
        vid4 = createVideo('libraries/audio&video/Hate yourself.webm');
        vid4.size(600, 600);
        vid4.position(350, 100);
        vid4.play();
        vid4.volume(0.2)
        window.alert("Video is loading, hit 'OK' to continue")

      }

      this.buttonHit14 = function(callbackData){
      window.alert("How do I stop existing without hurting anyone?")
      }
      this.buttonHit15 = function(callbackData){
        window.alert("What is death like?")
      }
      
      this.buttonHit16 = function(callbackData){
        vid5 = createVideo('libraries/audio&video/people.webm');
        vid5.size(600, 600);
        vid5.position(350, 100);
        vid5.play();
        vid5.volume(0.2);
        window.alert("Video is loading, hit 'OK' to continue")
      }
   
      this.buttonHit13 = function(callbackData){
        vid5.remove(); }
      this.buttonHit17 = function(callbackData){
        vid1.remove();}
      this.buttonHit18 = function(callbackData){
        vid2.remove();}
      this.buttonHit19 = function(callbackData){
        vid3.remove();}
      this.buttonHit20 = function(callbackData){
        vid4.remove();}
      }