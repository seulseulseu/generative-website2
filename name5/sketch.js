let img;
let bubble;
let distortionAmount= 25;

function preload() {
  let imageUrl="https://ojsfile.ohmynews.com/STD_IMG_FILE/2008/0122/IE000860343_STD.jpg";
  img=loadImage(imageUrl);
}

function setup() {
  createCanvas(img.width, img.height);
  bubble= new Bubble();
}

function draw() {
  background(10);
  image(img, 0, 0, img.width, img.height);
  bubble.move();
  bubble.display();
}

class Bubble {
  constructor() {
    this.radius= 120;
    this.distortion= createImage(this.radius * 2, this.radius * 2);
  }

  move() {
    this.x= constrain(mouseX, this.radius, width - this.radius);
    this.y= constrain(mouseY, this.radius, height - this.radius);
  }

  display() {
    this.distortion.loadPixels();
    for(let y=0; y<this.distortion.height; y++) {
      for(let x=0; x<this.distortion.width; x++) {
        let limit = dist(x, y, this.distortion.width/2, this.distortion.height/2);
        if (limit>=this.distortion.width/2) continue;
        
        limit = limit/(this.distortion.width/2);
        let limit2 = 1.0 - limit/(this.distortion.width/2);
        let brig = -pow(limit, 5)*10;
        limit = pow(limit, 2) + limit2;
        let alp = limit2;//pow(limit, 3)*0.5 + 0.5;
        
        let offsetX= x - this.radius;
        let offsetY= y - this.radius;
        let distance= dist(offsetX, offsetY, 0, 0);
        let distortion= map(distance, 0, this.radius, 0, distortionAmount*limit);
        let srcX= constrain(this.x + offsetX + distortion, 0, width - 1);
        let srcY= constrain(this.y + offsetY + distortion, 0, height - 1);
        let srcColor= img.get(srcX, srcY);
        let index= (y * this.distortion.width + x) * 4;
        
        this.distortion.pixels[index]= parseInt(red(srcColor)+brig);
        this.distortion.pixels[index + 1]= parseInt(green(srcColor) +brig);
        this.distortion.pixels[index + 2]= parseInt(blue(srcColor)+brig);
        this.distortion.pixels[index + 3]= parseInt(205*alp);
      }
    }
    
    this.distortion.updatePixels();

    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(this.distortion, 0, 0, this.radius * 2, this.radius * 2);
    pop();
  }
}