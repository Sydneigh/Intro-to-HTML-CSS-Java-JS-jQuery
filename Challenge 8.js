//Project: Shooting star
//Now that you've learnt the basics of animation with variables, make a shooting star! We've started off this program with just a star positioned using 2 variables, and it's up to you to decide how to animate it. Here are the steps we suggest:

//Decide what side of the canvas you want the star to start from, the top, bottom, left or right, and position your star there.
//Decide what direction you want the star to move in. Change the variables inside draw so that the star moves the way you wanted.
//Add another star or other shape, and animate it going in a different direction.
//Bonus: Change the star into a different shape, or have it shoot out of a cannon.
//Bonus: Add a backdrop, like a starry night or skyscrapers.
var xPos = 200;
var yPos = 200;
var starRadius = 50;
var starRadiusWidth = 90;
var starRadiusHeight = 90;

draw = function() {
     fill(255, 157, 0);
     ellipse(xPos, yPos, 70, starRadius);
     
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 50, starRadius);
    stroke(251, 255, 0);
    line(200, 200, 70, 10);
    line(200, 200, 13, 10);
    line(200, 200, 80, 10);
    line(200, 200, 60, 10);
    line(200, 200, 0, 10);
    
  
    
    xPos +=1;
    yPos -=2;
    starRadiusWidth *=99/100;
    starRadiusHeight *=99/100;
    
};




