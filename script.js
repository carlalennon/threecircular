// Initialize the Fabric.js canvas
const canvas = new fabric.Canvas('crochetCanvas');

// Function to convert polar coordinates to Cartesian coordinates
function polarToCartesian(centerX, centerY, radius, angle) {
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  return { x, y };
}

// Function to place stitches on the canvas
function placeStitches(round, numStitches) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = (round + 1) * 30; // Space stitches by radius, increase as rounds expand
  const angleStep = (2 * Math.PI) / numStitches; // Divide full circle by number of stitches
  
  for (let i = 0; i < numStitches; i++) {
    const angle = i * angleStep;
    const { x, y } = polarToCartesian(centerX, centerY, radius, angle);
    
    // Create a fabric Path (cross stitch)
    const singleCrochet = new fabric.Path('M 50 0 L 50 100 M 0 50 L 100 50', {
      left: x - 5,  // offset to center it at the right position
      top: y - 5,   // offset to center it at the right position
      stroke: 'black',
      strokeWidth: 5,
    });
    
    singleCrochet.scale(0.2); // Scale down the cross
    canvas.add(singleCrochet);
  }
}

// Example of exporting the canvas as an image
const exportButton = document.getElementById('exportButton');
exportButton.addEventListener('click', function() {
  const dataUrl = canvas.toDataURL(); // Exports the canvas to a base64 image string
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = 'crochet-chart.png';
  link.click();
});

// Toggle interactivity on mouse click
canvas.on('mouse:down', function(event) {
  const activeObject = canvas.getActiveObject(); // Get the object that was clicked
  if (activeObject && activeObject.type === 'path') {
    // Toggle stroke color on click (just as an example of interactivity)
    const newStroke = activeObject.stroke === 'black' ? 'blue' : 'black';
    activeObject.set({ stroke: newStroke });
    canvas.renderAll(); // Re-render the canvas to apply the changes
  }
});

// Example: Place stitches for 3 rounds
placeStitches(0, 6);  // Round 1: 6 stitches
placeStitches(1, 12); // Round 2: 12 stitches
placeStitches(2, 18); // Round 3: 18 stitches
