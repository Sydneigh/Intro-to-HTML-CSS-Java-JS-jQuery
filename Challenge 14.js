//Challenge: Mouse Tracker
//To start our mouse tracking program, make it so that the ellipse() shows up at the user's mouse position, instead of always being in the same position.
fill(255, 0, 255);

draw = function() {
    background(255, 255, 255);
    ellipse(mouseX, mouseY, 12, 12);
    var label = mouseX + " , " + mouseY;
    text(label, mouseX, mouseY, 80, 90);
};

