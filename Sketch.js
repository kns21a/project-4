let mgr;

function setup() {
  createCanvas(1319, 695)
 mgr = new ScreenManager();
 mgr.wire();
 mgr.showScene(Bedroom);
}

function draw() {
  mgr.draw()
}