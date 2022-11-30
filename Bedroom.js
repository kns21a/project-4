

//let img;
//let wind;
//let ring;

function preload() {
  img = loadImage('libraries/Bedroom.png');
  //wind= loadSound('Wind.wav');
}

function setup() {
  createCanvas(1319, 695)
  image(img, 0, 0);
  //wind.loop();
}

function draw() {
cursor('grab');
noFill()
Stroke(255, 0)
rect(4,398,109,79); // computer button
rect(563, 462, 65, 26); // note button
rect(632, 263, 190, 150); // window button
rect(966, 482, 37, 12); // phone button
rect(1105, 285, 125, 358); // door button
 }

 function mousePressed(){
	rectButton(4,398,109,79, buttonHit1) //run our check for the button below
  rectButton(563, 462, 65, 26, buttonHit2)
  rectButton(632, 263, 190, 150, buttonHit3)
  rectButton(966, 482, 37, 12, buttonHit4)
  rectButton(1105, 285, 125, 358, buttonHit5)
}

function rectButton(x,y,w,h, callback){
	var hit = false;

	hit = collidePointRect(mouseX,mouseY,x,y,w,h); //see if the mouse is in the rect

	if(hit){ //if its inside fire the callback
		callback(hit);
	}
}

function buttonHit1(callbackData){
this.sceneManager.showScene(Computer);
	}
 
  function buttonHit2(callbackData){
    this.sceneManager.showScene(Note);
      }

      function buttonHit3(callbackData){
        this.sceneManager.showScene(Window);
          }

          function buttonHit4(callbackData){
            this.sceneManager.showScene(Phone);
              }

              function buttonHit5(callbackData){
                this.sceneManager.showScene(Door);
                  }