let circleSize = 10; // 원의 지름
let circleSpacing = 10; // 원 사이의 간격
let lensSize = 300; // 어안렌즈의 크기
let lensStrength = 0.2; // 어안렌즈의 효과 강도

let circleParticles = []; // 원들의 위치를 저장할 배열

function setup() {
  createCanvas(windowWidth, windowHeight); // 화면을 풀스크린으로 설정
  background(35); // 차콜색 배경

  // 원들의 초기 위치 설정
  let startX = circleSize / 2; // 첫 번째 원의 시작 x 좌표
  let startY = circleSize / 2; // 첫 번째 원의 시작 y 좌표

  // 원들 그리기
  for (let y = startY; y < height; y += circleSize + circleSpacing) {
    for (let x = startX; x < width; x += circleSize + circleSpacing) {
      circleParticles.push(createVector(x, y));
    }
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background(35); // 매 프레임마다 배경을 차콜색으로 지웁니다.

  // 원들 그리기
  fill(150, 0, 255); // 보라색 원 색상 설정

  for (let i = 0; i < circleParticles.length; i++) {
    let particle = circleParticles[i];
    let x = particle.x;
    let y = particle.y;
    ellipse(x, y, circleSize);
    noStroke();
  }

  // 마우스 커서와 어안렌즈 효과
  let lensX = mouseX; // 어안렌즈의 중심 x 좌표
  let lensY = mouseY; // 어안렌즈의 중심 y 좌표

  for (let i = 0; i < circleParticles.length; i++) {
    let particle = circleParticles[i];
    let dx = particle.x - lensX;
    let dy = particle.y - lensY;
    let distance = sqrt(dx * dx + dy * dy);

    if (distance < lensSize) {
      let factor = 1 - distance / lensSize;
      let newX = particle.x + dx * factor * lensStrength;
      let newY = particle.y + dy * factor * lensStrength;
      particle.x = newX;
      particle.y = newY;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 화면 크기 조정 시 캔버스 크기도 조정합니다.
}