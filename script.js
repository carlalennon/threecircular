// first we need to create a stage
var stage = new Konva.Stage({
  container: 'container',   // id of container <div>
  width: 500,
  height: 500
});


// set the fake center of the stage 
var gridCenter = 0
// then create layer
var layer = new Konva.Layer();
var gridLayer = new Konva.Layer();
var buttonLayer = new Konva.Layer();
var gridLabelLayer = new Konva.Layer();

// grid 
var gridSize = 10; 

for (var y = 0; y < stage.height(); y += gridSize) {
  var gridX = new Konva.Line({
    points: [0, y, stage.width
      (), y],
    stroke: 'lightblue',
    strokeWidth: 1,
  });
  gridLayer.add(gridX);
}

let arcAngle = 60
var arc = new Konva.Arc({
  x: stage.width() / 2,
  y: stage.height() / 2,
  innerRadius: 40,
  outerRadius: 70,
  angle: arcAngle,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4,
});

var arc2 = new Konva.Arc({  
  x: stage.width() / 2,
  y: stage.height() / 2,
  innerRadius: 40,
  outerRadius: 70,
  angle: 80,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4,
  rotation: 890,
});


var segments = 8
var circleHolder = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 100,
  fill: 'lightblue',
  stroke: 'blue',
  strokeWidth: 1,
})

for (let i = 0; i < segments; i++) {
  let angle = i * 360 / segments
  let wedge = new Konva.Wedge({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: circleHolder.radius(),
    angle: 360 / segments,
    stroke: 'blue',
    strokeWidth: 1,
    rotation: angle,
  })
  buttonLayer.add(wedge)
}

layer.add(circleHolder);
layer.add(arc2);
// add the shape to the layer
layer.add(arc);
for (var x = 0; x < stage.width(); x += gridSize) {
  var gridY = new Konva.Line({
    points: [x, 0, x, stage.height()],
    stroke: 'lightblue',
    strokeWidth: 1,
  });
  gridLayer.add(gridY);
}

// add a thick black line in the middle of the canvas
var middleVerticalLine = new Konva.Line({
  points: [stage.width() / 2, 0, stage.width() / 2, stage.height()],
  stroke: 'black',
  strokeWidth: 4,
});

var middleHorizontalLine = new Konva.Line({
  points: [0, stage.height() / 2, stage.width(), stage.height() / 2],
  stroke: 'black',
  strokeWidth: 4,
});

layer.add(middleVerticalLine);
layer.add(middleHorizontalLine);
// create our shape
var redButton = new Konva.Rect({
  x: 10,
  y: 440,
  width: 100,
  height: 50,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4
});

var redButtonText = new Konva.Text({
  x: 30,
  y: 450,
  text: 'Round',
  fontSize: 20,
  fontFamily: 'Calibri',
  fill: 'white'
});

buttonLayer.add(redButton, redButtonText);

// event 
redButton.on('click', function() {
  console.log('clicked');
});

// add the shape to the layer
// add the layers to the stage
stage.add(layer);
stage.add(gridLayer);
stage.add(buttonLayer);

// draw the image
layer.draw();
gridLayer.draw();
buttonLayer.draw();