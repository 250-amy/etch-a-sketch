const container = document.getElementById('container');
const resize = document.getElementById('button');
const clear = document.getElementById('reset');

// Create the grid
function makeGrid(rows) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', rows);
    for (i = 0; i < (rows * rows); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "squares";
    }
    sketch();
};

// Call the makeGrid function
makeGrid(30);

// Add sketch/hover effect by changing the background of the boxes
function sketch() {
    const boxes = document.querySelectorAll('.squares');
    boxes.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'black';
//Reset the background of the boxes to clear the grid
        clear.addEventListener('click', function() {
        box.style.background = 'white';})
    }))
}

