//Challenge: Say Your Name
//This program says hi to you at a random point on the screen. Change the name variable so it says your name instead.

var yourName = "Sydneigh";

var name = function() {
        var textX = random(0, 300);
    var textY = random(0, 300);
        fill(255, 0, 0);
        textSize(30);
        text("Hello, " + yourName, textX, textY);
};
name();
name();
name();
name();

