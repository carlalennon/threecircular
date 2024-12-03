export function createShapes(stage, layer, numberOfRounds) {
    /*let arcAngle = 60;
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
    }); */ 
  
    var segments = 8;
    
    //var circleHolder = new Konva.Circle({
     // x: stage.width() / 2,
      //y: stage.height() / 2,
      //radius: 100,
      //fill: 'lightblue',
      //stroke: 'blue',
      //strokeWidth: 1,
    //});


    for (let i = 0; i < numberOfRounds; i++) {
        var roundCircle = new Konva.Circle({
            x: stage.width()/2,
            y: stage.height()/2,
            radius: 50*(i + 1),
            stroke: 'red',
            strokeWidth: 1,
        });
        layer.add(roundCircle);
    };

  
    for (let i = 0; i < segments; i++) {
      let angle = i * 360 / segments;
      let wedge = new Konva.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 50 * numberOfRounds,
        angle: 360 / segments,
        stroke: 'blue',
        strokeWidth: 1,
        rotation: angle,
      });
      layer.add(wedge);
    }
  
    layer.add(roundCircle);
    //layer.add(arc2);
    //layer.add(arc);
  }