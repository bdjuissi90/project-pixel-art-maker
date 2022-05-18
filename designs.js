// Select color input
const colorPicker = document.getElementById('colorPicker')
// Select size input
const inputHeight = document.getElementById('inputHeight')
const inputWidth = document.getElementById('inputWidth')
const pixelCanvas = document.getElementById('pixelCanvas')
const sizePicker = document.getElementById('sizePicker')

function makeGrid() {

    // Your code goes here!
    let gridHeight = inputHeight.value;
    let gridWidth = inputWidth.value;

    // Clear grid If already present
    while (pixelCanvas.firstChild) {
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }

    // Creates rows and cells in a grid
    for (let i = 1; i <= gridHeight; i++) {
        let gridRow = document.createElement('tr');
        pixelCanvas.appendChild(gridRow);
        for (let j = 1; j <= gridWidth; j++) {
            let gridCell = document.createElement('td');
            gridRow.appendChild(gridCell);
        }
    }

}

// Add listerner to intercept the submit event
sizePicker.addEventListener('submit', function(e) {
  e.preventDefault();
  makeGrid();
});


let mousedown = false; // mousedown variable

// Listenener for mouse press and release on grid. 
pixelCanvas.addEventListener('mousedown', function(e) {
	mousedown = true;
	pixelCanvas.addEventListener('mouseup', function() {
		mousedown = false;
	});
  
  pixelCanvas.addEventListener('mouseleave', function() {
    mousedown = false;
  });

  pixelCanvas.addEventListener('mouseover', function(e) {
    
    const color = colorPicker.value; // get the selected color
  	if (mousedown) {
      if (e.target.tagName === 'TD') {
      	e.target.style.backgroundColor = color;
      }
    }
  });
});
