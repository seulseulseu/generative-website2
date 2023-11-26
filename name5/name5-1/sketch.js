let img;
let pixelSize= 14;
let interval;
let pixels= [];

function preload() {
  let imageUrl="https://ojsfile.ohmynews.com/STD_IMG_FILE/2008/0122/IE000860343_STD.jpg";
  img=loadImage(imageUrl);
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();
  initializePixels();
  interval= setInterval(restartAnimation, 4200);
}

function draw() {
  background(10);

  pixels.forEach((pixel) => {
    pixel.update();
    pixel.display();
  });
}

function restartAnimation() {
  clearInterval(interval); 
  pixels= [];
  initializePixels();
  interval= setInterval(restartAnimation, 7000);
}

function initializePixels() {
  for(let y=0; y<img.height; y+=pixelSize) {
    for(let x= 0; x < img.width; x+=pixelSize) {
      let idx= (x + y * img.width) * 4;
      let [r, g, b] = img.pixels.slice(idx, idx + 3);

      pixels.push(new Pixel(x, y, r, g, b));
    }
  }
}

class Pixel {
  constructor(x, y, r, g, b) {
    this.x= x;
    this.y= y;
    this.initialY= y;
    this.color= color(r, g, b);
    this.speed= random(1, 5);
    this.trail= [];
  }

  update() {
    this.y += this.speed;
    this.trail.push(createVector(this.x, this.y));

    if (this.y - this.initialY > height) {
      this.y= this.initialY;
      this.trail= [];
    }
  }

  display() {
    fill(this.color);
    noStroke();
    circle(this.x, this.y, pixelSize);

    this.trail.forEach((pos, i) => {
      let alpha= map(i, 0, this.trail.length, 0, 255);
      fill(red(this.color), green(this.color), blue(this.color), alpha);
      circle(pos.x, pos.y, pixelSize);
    });
  }
}
