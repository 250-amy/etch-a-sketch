const cdiv = document.querySelector('.grid');
var natural = document.querySelector('div').style.height;



// Add 16 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  div.style.cssText = "background: white; opacity: 0.8; border: 1px solid black; height: 25px; width: 25px";  
  cdiv.appendChild(div);

// Event listener to change background colour of divs  
  div.addEventListener('mouseover', (e) => {
    div.style.cssText = "background: grey; opacity: 0.8; border: 1px solid black; height: 25px; width: 25px";
    console.log('mouseover')
  })
  
// Reset button to clear divs
  document.getElementById('reset').addEventListener('click', function(){
    div.style.cssText = "background: white; opacity: 0.8; border: 1px solid black; height: 25px; width: 25px"; 
})
}

