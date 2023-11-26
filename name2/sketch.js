function setup() {
  createCanvas(600, 600);
 
}

function draw() {
  background(225);

  
  strokeWeight(1)
  noFill();
 translate(300, 300);
  
  
  for (let i = 200; i > 100; i = i/1.08) {
    
  //마우스를 클릭하면 원이 돌아간다
    rotate(radians(frameCount/mouseIsPressed));
    circle(30, 30 , 150);

      }  
}

