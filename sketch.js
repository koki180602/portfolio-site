function setup() {
  let canvas = createCanvas(600, 300);
  canvas.parent("p5");
  background(255);
}

function draw() {
  noStroke();
  fill(0, 200, 255, 50);
  ellipse(mouseX, mouseY, random(50), random(50));
  console.log(mouseX, mouseY);
}
function setup() {
  //let canvas = createCanvas(600, 300);
  //canvas.parent("p5");
  createCanvas(windowWidth, windowHeight);
  //background(255);
}