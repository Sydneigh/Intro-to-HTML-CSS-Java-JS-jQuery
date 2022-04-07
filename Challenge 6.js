//Challenge: Funky Frog
var x = 200;
var y = 250;

noStroke();
fill(30, 204, 91); // a nice froggy green!

ellipse(x, y, 200, 100); // face
ellipse(x - 50, y - 50, 40, 40); // left eye socket
ellipse(x + 50, y - 50, 40, 40); // right eye socket



fill(255, 255, 255); // for the whites of the eyes!
ellipse(x - 50, y - 50, 30, 30); // left eyeball
ellipse(x + 50, y - 50, 30, 30); // right eyeball

fill (28, 20, 20);
rect (x - 54, y - 50, 10, 10);
fill (28, 20, 20);
rect (x + 44, y -53, 10, 10);

fill(28, 23, 23);
ellipse(x, y, 140, 40); // mouth
