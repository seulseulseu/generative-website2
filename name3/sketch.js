function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  

  
  
  noFill();
  for (let i = 0; i<72; i++) {
      circle(width/2, height/2, 490-i*8+0.1*frameCount);  
      let c=random(0,200);                                   stroke(120,c,180);
      strokeWeight(1+i*0.05);
  }

  for (let i = 0; i<72; i++) {
     circle(mouseX, height/2, 290-i*8+0.1*frameCount);
    strokeWeight(i*0.02);

  }
  
  rectMode(CENTER);
  noFill();
  for (let i=0; i<39; i++) {
    let s = 390-10*i;
    rect(width/2,height/2, s, s);

  }
  
}
