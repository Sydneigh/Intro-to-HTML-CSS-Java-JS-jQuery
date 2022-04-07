//Project: Animal attack
//You made lots of animals in the variables coding challenges- a bunny, a bear, a frog. What other animals can you make with shapes and variables?

//Make an animal using the drawing commands, and use variables for the numbers you pass into those commands, like we do in the starter code below. You should also use variables for any repetitive information about your animal, like the eye size, so that you can change the size of both of your eyes at once.

//Once you've done that, pick a variable to animate - maybe the animal's face gets huge, or one of their eyes bug out - that's the attack! Watch out, your programs are out to get you now. :)
var bodyX = 200;
var bodyY = 90;
var bodyW = 118;
var faceW = bodyW/2;
var eyes = faceW/4;
var wing = bodyX/2-20;

draw = function() {
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 106); // body?
    ellipse(bodyX, bodyY-70, faceW, 47); // face?
    fill(255, 140, 0);
    ellipse(bodyX+1, bodyY-55, eyes+20, eyes); // mouth
    fill(14, 15, 14);
    ellipse(bodyX+17, bodyY-80,eyes,eyes);// right eye
     fill(14, 15, 14);
     ellipse(bodyX-14, bodyY-80,eyes,eyes);// right eye
     fill(255, 191, 0);
     ellipse(bodyX-47, bodyY+6, wing, wing+10); // left wing
     fill(255, 191, 0);
     ellipse(bodyX/1, bodyY+7, wing, wing+10);
   
     
     
    
    
   
};
