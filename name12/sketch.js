function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  background(39,16,74)
  noFill()
  stroke(255)
  
  translate(width/2, height/2)
  
  for (var i=0; i<200; i++) {
    
    push()
    
    rotate(sin(frameCount + i) *100)
    
    rect(0,0,1000 - i*5, 600- i*3, 200-i)
    
    pop()
}
}