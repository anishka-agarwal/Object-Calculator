var ball = {
  x: 30,
  y: 30,
  r: 30,
  x_speed: 0,
  y_speed: 0,
  color: ["red", "green", "blue"],

};


function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  circle(ball.x, ball.y, ball.r)
  fill(ball.color[2])
  ball.x_speed = 1
  ball.x = ball.x + ball.x_speed

} 