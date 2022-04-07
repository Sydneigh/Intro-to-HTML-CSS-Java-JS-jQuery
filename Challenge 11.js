//Challenge: Brown bear eyes
//Try changing the values for x and y. Notice that the ears and nose move with the face, but the eyes don't.

//Try changing the value for faceSize. Notice that the size of the ears and nose change with the size of the face, but the eyes don't.
noStroke();
var x = 200;
var y = 200;
var faceSize = 960;

// ears
var earSize=faceSize*1/2;
fill(89, 52, 17);
ellipse(x-faceSize*2/5, y-faceSize*2/5, earSize, earSize);
ellipse(x+faceSize*2/5, y-faceSize*2/5, earSize, earSize);

// face
fill(163, 113, 5);
ellipse(x, y, faceSize, faceSize);



//eyes 
fill(0, 0, 0);
var eyes = faceSize / 8;
ellipse(x - faceSize/4, y -faceSize/8, eyes, eyes);
ellipse(x+faceSize/4,y - faceSize/8, eyes, eyes);



//nose
fill(89, 52, 20);
ellipse(x, y+faceSize/8, faceSize*4/15, faceSize/5);

