function setup(){
  createCanvas(700,700);
}

function setup(){
  createCanvas(700,700);
}

function draw(){
  background(0);
  rectMode(CENTER);
  translate(width/2, height/2);
  for (let i=0; i<35; i++) {
      let sw = 0.1+(frameCount*0.001);
    strokeWeight(sw);
    let s = 390 - 10*i;
    rotate(0.0009*frameCount*0.05);
    rect(1,0,s,s);
    noFill();
    stroke(255,255,255);
    
  }
   ellipseMode(CORNER);
  translate(width/46, height/46);
  for (let i=0; i<22; i++) {
      let sw = 0.1+0.1*i;
    strokeWeight(sw);
    let s = 110 - 2*i;
    rotate(0.0009*frameCount);
    rect(0,0,s,s);
    noFill();
    stroke(255,255,255);
    ellipse(0,0,25,25);
    
    }
  }



