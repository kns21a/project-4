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

//refernces:
//https://www.youtube.com/watch?v=8qMSBKKoaMg
//https://www.youtube.com/watch?v=pn2a7tHsfa0&list=PPSV
//https://www.youtube.com/watch?v=8YTNf6i--YA&list=PPSV
//https://www.youtube.com/watch?v=6X-tqloq6bM&list=PPSV
//https://www.youtube.com/watch?v=SLMliD4T4uQ&list=PPSV
//https://www.youtube.com/watch?v=TlTIpnLL68o&list=PPSV
