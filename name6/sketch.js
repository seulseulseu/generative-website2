function setup() {
  createCanvas(windowWidth, windowHeight);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background(0);
  rectMode(CENTER);
 
  translate(width/2, height/2);
  for (let i=0; i<39; i++) {
    
  for (let j=0; j<40; j++) {
      circle(10*i, 10*i, 1+i, 1+i );
     rotate(frameCount*0.0001);
    }
  }
    
  }