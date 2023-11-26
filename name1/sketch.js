let ang = 0;
//let a = random(2, 20);

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background(0, 2);
  
  for(let i=0; i<30; i++){
    push();
    translate(width/2, height/2);
    rotate(ang*(mouseX+mouseY));
    fill(2, 20, 20, 15);
    noStroke();
    ellipse(i*24, 0, 20);
    pop();
   
  }
   ang += 2;

}