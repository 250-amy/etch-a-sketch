let gridContainer = document.querySelector('.grid');
let changeButton = document.querySelector('#change')

let rowtot = 16;
let celltot = rowtot * rowtot;


gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateRows = `repeat(${rowtot}, 1fr)`;
gridContainer.style.gridTemplateColumns = `repeat(${rowtot}, 1fr)`;


let row = 1;
let column = 1;
for (let i = 1; i <= celltot; i++) {
  let cell = document.createElement('div');
  cell.style.border = '1px solid black';
  cell.style.aspectRatio = '1/1';
  cell.style.minHeight = '5px'
  cell.style.minWidth = '5px'
  //cell.style.gridRow = row;
  //cell.style.gridColumn = column;
  column += 1;
  cell.addEventListener('mouseover', (e) => {
    cell.style = "border: 1px solid black; minHeight: 5px; minWidth: 5px; aspectRatio: 1/1; background-color: black;";
    console.log('mouseover')})
  if (column === rowtot + 1) {
    row += 1;
    column = 1;
  }
  gridContainer.appendChild(cell);
  document.getElementById('reset').addEventListener('click', function(){
    cell.style = "border: 1px solid black; minHeight: 5px; minWidth: 5px; aspectRatio: 1/1;"
})
}


