// Initialize the Fabric.js canvas
const canvas = new fabric.Canvas('crochetCanvas');

// Function to convert polar coordinates to Cartesian coordinates
function polarToCartesian(centerX, centerY, radius, angle) {
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  return { x, y };
}

// Example function to place stitches on the canvas
function placeStitches(round, numStitches) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = (round + 1) * 30; // Space stitches by radius, increase as rounds expand
  const angleStep = (2 * Math.PI) / numStitches; // Divide full circle by number of stitches
  
  for (let i = 0; i < numStitches; i++) {
    const angle = i * angleStep;
    const { x, y } = polarToCartesian(centerX, centerY, radius, angle);
    
    // Create a fabric circle (or any object to represent the stitch)
    const stitch = new fabric.Circle({
      radius: 5,  // radius of the stitch circle
      left: x - 5,  // offset to center it at the right position
      top: y - 5,   // offset to center it at the right position
      fill: 'red',  // default stitch color
      originX: 'center',
      originY: 'center'
    });
    
    canvas.add(stitch);
  }
}

// Example: Place 6 stitches for round 1
placeStitches(0, 6);  // Round 1 (center circle) has 6 stitches
placeStitches(1, 12); // Round 2 has 12 stitches
placeStitches(2, 18); // Round 3 has 18 stitches

// Example of exporting the canvas as an image
const exportButton = document.getElementById('exportButton');
exportButton.addEventListener('click', function() {
  const dataUrl = canvas.toDataURL(); // Exports the canvas to a base64 image string
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = 'crochet-chart.png';
  link.click();
});


// Example function to place stitches
function placeStitches(round, numStitches) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = (round + 1) * 30; // Space stitches by radius, increase as rounds expand
  const angleStep = (2 * Math.PI) / numStitches; // Divide full circle by number of stitches
  
  for (let i = 0; i < numStitches; i++) {
    const angle = i * angleStep;
    const { x, y } = polarToCartesian(centerX, centerY, radius, angle);
    
    // Create a fabric circle (or any object to represent the stitch)
    const stitch = new fabric.Circle({
      radius: 5,  // radius of the stitch circle
      left: x - 5,  // offset to center it at the right position
      top: y - 5,   // offset to center it at the right position
      fill: 'red',  // default stitch color
      originX: 'center',
      originY: 'center'
    });
    
    canvas.add(stitch);
  }
}

canvas.on('mouse:down', function(event) {
    const activeObject = canvas.getActiveObject();  // Get the object that was clicked
    if (activeObject && activeObject.type === 'circle') {
      // Toggle color on click (just as an example of interactivity)
      const newColor = activeObject.fill === 'red' ? 'blue' : 'red';
      activeObject.set({ fill: newColor });
      canvas.renderAll();  // Re-render the canvas to apply the changes
    }
  });

  
// Example: Place 6 stitches for round 1
placeStitches(0, 6);  // Round 1 (center circle) has 6 stitches
placeStitches(1, 12); // Round 2 has 12 stitches
placeStitches(2, 18); // Round 3 has 18 stitches
