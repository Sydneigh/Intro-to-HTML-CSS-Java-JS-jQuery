//Challenge: Mouse movement mania
//Colorful Colors!

//This program paints colorful shapes on the screen wherever the user's mouse moves, and you're going to change it up! First, change the fill() function call so that the circles become a different color. Remember: You can use mouseX and mouseY as parameters to create a variety of colors.



draw = function() {
    fill(181, 40, 181);
    stroke(255, 0, 0);
    ellipse(mouseX, mouseY, 70, 10);
};
