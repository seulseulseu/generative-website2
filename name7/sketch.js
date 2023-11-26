let img;
function preload() {
 img = loadImage("aokiii.jpg");
}
let dot = new Array(2550); //점의 수
function setup () {
createCanvas(500, 500);

 img.loadPixels();
 fill(0);
 noStroke();

let c = 0;
for (let y=0; y<img.height; y+=2) {

  if(c>=2500) {
    break;
  }
  
   for (let x=0; x<img.width; x+=2) {
    
     let idx = x + y*img.width; //외우기
     let r = parseFloat(img.pixels[idx*4]); //R
     let g = parseFloat(img.pixels[idx*4+1]); //G
     let b = parseFloat(img.pixels[idx*4+2]); //B
     let a = parseFloat(img.pixels[idx*4+3]); //A
     let gr = (255-(r + g + b)/2.6)*0.07;
     //ellipse(x*7, y*7, 4, 4); // 이미지 크기
     dot[c] = new dots(x*5, y*5, gr);
     c++;
     if (c>=2500) {
       break; //반복문 끝내라 
     }
   }
}
}
       
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} 
function draw() {
 background(240);
//  translate(windowWidth/2.8, windowHeight/3.2)
  for (let i=0; i<2500; i++){
    dot[i].update(mouseX, mouseY);
  }
  //image(img, 0, 0);
}

class dots {
 constructor(x, y, gr) {
    this.x = x;
    this.y = y;
    this.orgx = x;
    this.orgy = y;
    this.s = gr; //스케일
    this.spx = random(-0.1, 0.1);
    this.spy = random(-0.1, 0.1);
  }
  
  update(mx, my) {
    this.spx *= 0.98;
    this.spy *= 0.98;
    
    let d= dist(this.x, this.y, mx, my);
    if(d<100){
      let r = (100-d)*2.55;
      let d1 = (100-d)/100.0;
      d1 = d1*d1*d1;
      let ang = atan2((this.y-mx), (this.x-mx));
      this.spx = this.spx + cos(ang)*d1;
      this.spy = this.spy + sin(ang)*d1;
      fill(r,0,0);
    }else{
        fill(0,0,0);
    }
    
       this.x += this.spx;
       this.y += this.spy;
       this.x = this.x + (this.orgx - this.x)*0.05;
       this.y = this.y + (this.orgy - this.y)*0.05;
    
    circle(this.x, this.y, this.s);
  }
  
}