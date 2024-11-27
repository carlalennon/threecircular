// first we need to create a stage
var stage = new Konva.Stage({
  container: 'container',   // id of container <div>
  width: 500,
  height: 500
});

// then create layer
var layer = new Konva.Layer();
var gridLayer = new Konva.Layer();
var buttonLayer = new Konva.Layer();

// grid 
var gridSize = 10; 

for (var y = 0; y < stage.height(); y += gridSize) {
  var gridX = new Konva.Line({
    points: [0, y, stage.width(), y],
    stroke: 'lightblue',
    strokeWidth: 1,
  });
  gridLayer.add(gridX);
}

for (var x = 0; x < stage.width(); x += gridSize) {
  var gridY = new Konva.Line({
    points: [x, 0, x, stage.height()],
    stroke: 'lightblue',
    strokeWidth: 1,
  });
  gridLayer.add(gridY);
}

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