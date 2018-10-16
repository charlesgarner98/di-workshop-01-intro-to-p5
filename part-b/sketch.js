var a = 0
function setup() {
  createCanvas(400, 400)
  background(0, 0, 0)
}

function draw() {
  fill(255, 100, 255)
  strokeWeight(5)
  stroke(5,255,5,155)
  //rotate( degrees(a))
  triangle(mouseX, mouseY, (mouseX + 15), (mouseY + 30), (mouseX + 30), mouseY)
  a++
}
