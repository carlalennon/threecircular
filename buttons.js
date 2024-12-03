export function createButtons(stage, buttonLayer) {
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
  }