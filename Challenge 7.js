//Challenge: Parting Clouds
//In this challenge, you'll use your magical programmer powers to create a cloudy sky, and then animate it into a bright and sunny sky.
//Start off by changing the position of the clouds so that they cover the sun, but still let a little sun peek out.

noStroke();

var leftX = 100;
var rightX = 100;
var sunRadius = 100;


draw = function() {
  
    background(184, 236, 255);
    fill(255, 170, 0);
    ellipse(200, 100, sunRadius, sunRadius);
    
    // clouds 
    fill(255, 255, 255);
   
    // left cloud
    ellipse(leftX, 150, 126, 97);
    ellipse(leftX+62, 150, 70, 60);
    ellipse(leftX-62, 150, 70, 60);
    
    // right cloud
    ellipse(rightX, 100, 126, 97);
    ellipse(rightX+62, 100, 70, 60);
    ellipse(rightX-62, 100, 70, 60);
    
    rightX +=3;
    leftX +=2;
    rightX *=99/100;
    leftX *=99/100;
    
    
     
     
};
