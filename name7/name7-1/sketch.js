var count=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  count += 1;
  rectMode(CENTER);
  
  for(let i=0; i<100; i++) {
    for(let j=0; j<50; j++){ 
      stroke(i*5.5);
      var radiusCount = (count+5*(i+j))%60;
        
      let r= random(135);
      
      stroke(r, 196, 152,100);
      fill(r,195,196,20);
      //noStroke();
    ellipse( j*35, i*35, radiusCount, radiusCount);
    }
  
  }
}