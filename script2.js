// Initialize the Fabric.js canvas
const canvas = new fabric.Canvas('crochetCanvas');

// Function to convert polar coordinates to Cartesian coordinates
function polarToCartesian(centerX, centerY, radius, angle) {
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  return { x, y };
}

function placeStitches(round, numStitches) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = (round + 1) * 30; // Space stitches by radius, increase as rounds expand
    const angleStep = (2 * Math.PI) / numStitches; // Divide full circle by number of stitches
  
    for (let i = 0; i < numStitches; i++) {
      const angle = i * angleStep;
      const { x, y } = polarToCartesian(centerX, centerY, radius, angle);
  
      // Create a new ellipse (chain stitch) for each position
      const chainStitch = new fabric.Ellipse({
        left: x,           // X position
        top: y,            // Y position
        rx: 10,            // Horizontal radius
        ry: 5,             // Vertical radius
        fill: 'blue',      // Fill color
        stroke: 'black',   // Stroke color
        strokeWidth: 2,    // Border width
        originX: 'center',
        originY: 'center',
      });
  
      // Rotate the cross to point toward the center
      const rotationAngle = (angle * 180) / Math.PI + 90; // Convert to degrees and adjust
      chainStitch.rotate(rotationAngle);
  
      canvas.add(chainStitch);
    }
  }
  

// Example: Place stitches for 3 rounds
placeStitches(0, 6);  // Round 1: 6 stitches
placeStitches(1, 12); // Round 2: 12 stitches
placeStitches(2, 18); // Round 3: 18 stitches
