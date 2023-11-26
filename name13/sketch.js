var points = []
var mult = 0.004;

var r_1;
var r_2;
var g_1;
var g_2;
var b_1;
var b_2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
  angleMode(DEGREES);
  noiseDetail(1);
  
  var density = 50;
  var space = width / density;
  
  for (var x = 0; x < width; x+= space){
    for (var y = 0; y < height; y+= space){
      var p = createVector(x + random(-10, 10), y+ random(-10, 10));
      points.push(p);
    }
  }
  shuffle(points, true);
  
  r_1 = random(255);
  r_2 = random(255);
  g_1 = random(255);
  g_2 = random(255);
  b_1 = random(255);
  b_2 = random(255);
  
  mult = random(0.002, 0.01);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  noStroke();
  
  if(frameCount <= points.length){
    var max = frameCount;
  } else {
    var max = points.length;
  }
  
  for(var i = 0; i < points.length; i++){
    
    var r = map(points[i].x, 0, width, r_1, r_2);
    var g = map(points[i].y, 0, height, g_1, g_2);
    var b = map(points[i].x, 0, width, b_1, b_2);
    var alpha = map(dist(width/2, height/2, points[i].x, points[i].y), 0, 350, 400, 0);
    
    fill(r, g, b, alpha);
    
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);
    
    points[i].add(createVector(cos(angle), sin(angle)));
    
    if(dist(width/2, height/2, points[i].x, points[i].y) < 500){
      ellipse(points[i].x, points[i].y, 1);
    }

  }
}
function mouseClicked() {
  saveCanvas('flow','png');
}