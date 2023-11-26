let noise;
let xx;
let yy;
let a = 0 ;
let img ;
let b = 0 ; 
let dd=20;
let myimg = 1
function preload() {
  img = loadImage(myimg + ".jpg");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
 //pixelDensity(1)
  background(0);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  //console.log(mouseX)
  // 필터 매개 변수들 설정
  imageMode(CENTER)
  background(0); 
    img.loadPixels();
  for (let y=0; y<350; y=y+2) {
    for (let x=0; x<250; x=x+2) {
       let idx = parseInt(x + y * img.width);
       let r = img.pixels[idx*4]; 
       let g = img.pixels[idx*4 + 1];
       let b = img.pixels[idx*4 + 2]; 
       let gr = (r + g + b)/3;
    
      let d=dist(mouseX,mouseY,y*2,x*2)

      let xx = 10*cos(radians(b*frameCount*0.05));
      let yy = 5*sin(radians(b*frameCount*0.05));
      //gr=255-gr
      if (gr>1){
      push()
      translate(windowWidth/3,120)    
      // fill(r,g,b)
      // noStroke()
      stroke(r,g,b);
      noFill()
      rect(x*3+5+xx,y*3+5+yy,gr*0.05);

      pop()
    }
    }
  }
}
function changeImage1() {
  myimg = 1;
  img = loadImage(myimg + ".jpg");
}

function changeImage2() {
  myimg = 2;
  img = loadImage(myimg + ".jpg");
}
function changeImage3() {
  myimg = 3;
  img = loadImage(myimg + ".jpg");
}
function changeImage4() {
  myimg = 4;
  img = loadImage(myimg + ".jpg");
}
function changeImage5() {
  myimg = 5;
  img = loadImage(myimg + ".jpg");
}
