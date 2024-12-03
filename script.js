import { drawGrid } from './grid.js';
import { createShapes } from './shapes.js';
import { createButtons } from './buttons.js';

// Error handling 
function handleRoundInput(numberOfRounds) {
  console.log("Number of rounds:", numberOfRounds);
}


// first we need to create a stage
var stage = new Konva.Stage({
  container: 'container',   // id of container <div>
  width: 500,
  height: 500
});

var layer = new Konva.Layer();
var gridLayer = new Konva.Layer();
var buttonLayer = new Konva.Layer();
var gridLabelLayer = new Konva.Layer();

// grid 
var gridSize = 10; 
drawGrid(stage, gridLayer, gridSize);

createButtons(stage, buttonLayer);

// PLaceholder values 
var initialRounds = 5; 
createShapes(stage, layer, initialRounds); 

// Add event listener to the submit button
document.getElementById('submitButton').addEventListener('click', function() {
  var roundInput = document.getElementById('roundInput').value;
  var numberOfRounds = parseInt(roundInput, 10);
  if (!isNaN(numberOfRounds)) {
    // Clear the layer before drawing new shapes
    layer.destroyChildren();
    createShapes(stage, layer, numberOfRounds);
    console.log(numberOfRounds); 
    // Redraw the layer
    layer.draw();
  } else if (numberOfRounds <= 1 ) {
    console.error("That's as small as it goes")
    numberOfRounds = 1; 
  } else {
    console.error('Invalid input: Please enter a valid number');
  }
});

// add the layers to the stage

stage.add(gridLayer);
stage.add(layer);
stage.add(buttonLayer);

// draw the image
layer.draw();
gridLayer.draw();
buttonLayer.draw();