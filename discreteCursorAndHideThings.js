(function() {
	document.querySelector("#search").style.display = "none";
	document.querySelector("body").style.backgroundColor = "#000";
  // Create a canvas element
  const canvas = document.createElement('canvas');
  const size = 16;  // Set the size of the canvas (32x32 for example)
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  // Ensure the canvas is transparent and cleared
  ctx.clearRect(0, 0, size, size);

  // Draw the transparent circle with a 1px white border
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 1, 0, Math.PI * 2); // Adjusted radius to size/2 - 1 for clean edges
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Get the base64 image from the canvas
  const base64Image = canvas.toDataURL('image/png');

  // Set the cursor to the custom image, with offset so it's centered
  document.body.style.cursor = `url(${base64Image}) ${size / 2} ${size / 2}, auto`;
})();
