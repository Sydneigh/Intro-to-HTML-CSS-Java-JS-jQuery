//Challenge: Tasty Tomato
//Bigger bite!

//Before we make this program respond to mouse interaction, let's make a little change. See the bite in the tomato? It's tiny now, make it bigger!

background(255, 255, 255);

// tomato
noStroke();
fill(224, 90, 90);
ellipse(150, 200, 150, 150);
ellipse(212, 200, 150, 150);

// stem
fill(48, 130, 31);
rect(176, 103, 12, 32); 
draw = function() { // take a bite out of the tomato!
fill(255, 255, 255);
ellipse(mouseX, mouseY, 60, 60);
     
};
