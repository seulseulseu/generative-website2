let cam;
function setup() {
  createCanvas(400, 400, WEBGL);
  cam = createCapture(VIDEO);
  cam.hide();
}

function draw() {
  background(220);
  noStroke();
  
  push();
  rotateZ(QUARTER_PI * 8);
  texture(cam);
  plane(4 * mouseX, 4 * mouseY);
  pop();
  
  push();
  rotateZ(QUARTER_PI * 7.5);
  texture(cam);
  plane(3.5 * mouseX, 3.5 * mouseY);
  pop();
  
  push();
  rotateZ(QUARTER_PI * 7);
  texture(cam);
  plane(3 * mouseX, 3 * mouseY);
  pop();
  
  push();
  rotateZ(QUARTER_PI * 6.5);
  texture(cam);
  plane(2.5 * mouseX, 2.5 * mouseY);
  pop();
  
  push();
  rotateZ(QUARTER_PI * 6);
  texture(cam);
  plane(2 * mouseX, 2 * mouseY);
  pop();
  
  push();
  rotateZ(QUARTER_PI * 5.5);
  texture(cam);
  plane(1.5 * mouseX, 1.5 * mouseY);
  pop();
  
  push();
  rotateZ(QUARTER_PI * 5);
  texture(cam);
  plane(1 * mouseX, 1 * mouseY);
  pop();
  
  push();
  rotateZ(QUARTER_PI * 4.5);
  texture(cam);
  plane(0.5 * mouseX, 0.5 * mouseY);
  pop();
}