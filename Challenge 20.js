//Challenge: Bouncy Ball
//Bounce off the floor!

//Our ball is moving down the canvas, but it keeps going down forever. Add an if statement to make it reverse direction once it gets to the bottom of the canvas. Remember you can click restart to re-run the program from the beginning.

// position of the ball
var y = 0;
// how far the ball moves every time
var speed = 2;

draw = function() {
    background(127, 204, 255);
    if(y > 400) {
        speed = -5;
    }
    if(y<4) {
        speed=5; 
    }
    fill(66, 66, 66);
    ellipse(200, y, 50, 50);

    // move the ball
    y = y + speed;
};