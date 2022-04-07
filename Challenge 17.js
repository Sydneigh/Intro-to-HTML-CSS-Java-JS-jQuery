//Challenge: Moles in Holes
//Our grass is filled with holes, but has no moles. Thankfully, we've already defined a mole drawing function, drawMole, so that all you have to do to get a mole to show up is call that function.
var drawMole = function(moleX, moleY) {
    
    
    noStroke();
    fill(125, 93, 43);
    ellipse(moleX, moleY, 60, 60); // face
    fill(255, 237, 209);
    ellipse(moleX, moleY+10, 38, 28); 
    fill(0, 0, 0);
    ellipse(moleX-6, moleY-15, 10, 10); // eyes
    ellipse(moleX+12, moleY-16, 10, 10);
    ellipse(moleX, moleY-5, 10, 10); // nose
    ellipse(moleX, moleY+10, 20, 5); // mouth
};

background(52, 168, 83); // green grass
fill(0, 0, 0);
ellipse(242, 202, 100, 30); // holes!
ellipse(70, 119, 100, 30);
ellipse(296, 60, 100, 30);
ellipse(297, 350, 100, 30);

drawMole(248, 185);
drawMole(248, 185);
drawMole(248, 185);
drawMole(248, 185);
