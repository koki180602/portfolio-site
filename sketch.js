let stars = [];

let holeX = 200;
let holeY = 200;
let power = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // キャンバス背景を透明に
  clear();
}

function draw() {

  // 前フレームを消して透明維持
  clear();

  // 長押しで吸引力アップ
  power = mouseIsPressed ? 5 : 1;

  // ブラックホール本体
  fill(80, 80, 120, 180);
  stroke(120, 120, 255);
  strokeWeight(2);
  circle(holeX, holeY, 40 + power * 10);

  // 外側リング
  noFill();
  stroke(160, 160, 255, 150);
  strokeWeight(3);
  circle(holeX, holeY, 70 + power * 10);

  // 星の処理
  for (let i = stars.length - 1; i >= 0; i--) {

    let star = stars[i];

    let dx = holeX - star.x;
    let dy = holeY - star.y;

    star.x += dx * 0.01 * power;
    star.y += dy * 0.01 * power;

    fill(star.r, star.g, star.b);
    noStroke();
    circle(star.x, star.y, star.size);

    let d = dist(star.x, star.y, holeX, holeY);

    if (d < 20) {
      stars.splice(i, 1);
    }
  }
}

function mouseMoved() {

  stars.push({
    x: mouseX,
    y: mouseY,
    size: random(3, 10),
    r: random(150, 255),
    g: random(150, 255),
    b: random(150, 255)
  });

  if (stars.length > 300) {
    stars.shift();
  }
}

function mousePressed() {
  holeX = mouseX;
  holeY = mouseY;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}