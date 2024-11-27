// first we need to create a stage
var stage = new Konva.Stage({
  container: 'container',   // id of container <div>
  width: 500,
  height: 500
});

// then create layer
var layer = new Konva.Layer();

var gridLayer = new Konva.Layer();

var gridSize = 10; 

for (var y = 0; y < stage.height(); y += gridSize) {
  var gridX = new Konva.Line({
    points: [0, y, stage.width(), y],
    stroke: 'blue',
    strokeWidth: 1,
  });
  gridLayer.add(gridX);
}

for (var x = 0; x < stage.width(); x += gridSize) {
  var gridY = new Konva.Line({
    points: [x, 0, x, stage.height()],
    stroke: 'blue',
    strokeWidth: 1,
  });
  gridLayer.add(gridY);
}

// create our shape
var circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4
});

// add the shape to the layer
layer.add(circle);

// add the layers to the stage
stage.add(layer);
stage.add(gridLayer);

// draw the image
layer.draw();
gridLayer.draw();