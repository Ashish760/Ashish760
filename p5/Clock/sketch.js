function setup() { 
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-div');
  angleMode(DEGREES);
} 	

function draw() {
  background(0);
  translate(200,200);
  rotate(-120);
  
  var end;
  
  noFill();
  strokeWeight(8);
  stroke(150,100,255);
  ellipse(0, 0, 310, 310);
  
  strokeWeight(4);
  end = map(second(), 0, 60, 0, 360);
  stroke(100,255,150);
  arc(0, 0, 290, 290, 0, end);
  
  end = map(minute(), 0, 60, 0, 360);
  stroke(255,150,100);
  arc(0, 0, 280, 280, 0, end);
  
  end = map(hour()%12, 0, 12, 0, 360);
  stroke(100,150,255);
  arc(0, 0, 270, 270, 0, end);
  
}