import { drawGrid } from './grid.js';
import { createShapes } from './shapes.js';
import { createButtons } from './buttons.js';

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
createShapes(stage, layer);
createButtons(stage, buttonLayer);

// add the layers to the stage
stage.add(layer);
stage.add(gridLayer);
stage.add(buttonLayer);

// draw the image
layer.draw();
gridLayer.draw();
buttonLayer.draw();