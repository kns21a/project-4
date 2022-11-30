let mgr;

function setup(){
  createCanvas(1319,695);
  mgr = new SceneManager();
  mgr.wire();
  mgr.showScene(bedroom)
}
 
function draw(){
  mgr.draw();
}