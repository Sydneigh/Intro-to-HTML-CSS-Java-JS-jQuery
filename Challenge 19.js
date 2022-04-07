//Project: Fish tank
// This program draws a single fish. Poor lonely fish! For this project, you'll use functions to accompany him with more fish of all different shapes and colors.

//Create a custom function (like drawFish) that draws a fish. You can build on the starter code or start from scratch.
//Add at least 2 parameters to the function declaration that control either the position or the size of the fish.
//Now call that function many times, with different values as arguments, so that your screen is filled with fish.
//Bonus: Add more parameters to the function declaration, like color, tail width, eye size, tail color—more ways that you can make each fish different from each other.
//Bonus: Add seaweed to the tank, pebbles at the bottom, or bubbles floating to the top. Whatever objects you add, make a function to draw them at different places.
//Bonus: Want to make it interactive? Use a mouseClicked function to add more fish wherever the user clicks.
background(89, 216, 255);

var centerX = 200;
var centerY = 100;
var bodyLength = 128;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);


var drawFish = function() {
noStroke();
fill(245, 218, 12);
// body
ellipse(centerX+150, centerY+90, bodyLength+70, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4+60, centerY+90, bodyHeight/5, bodyHeight/5);

fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);

// seeweed
fill(0, 255, 81);
ellipse(centerX+6, centerY+280, bodyLength +90, bodyHeight +50);

};

drawFish();   
drawFish();
mouseClicked = function() {
        fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};