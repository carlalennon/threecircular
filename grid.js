export function drawGrid(stage, gridLayer, gridSize) {
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
  }