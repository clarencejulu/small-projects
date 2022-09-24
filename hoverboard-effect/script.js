//I can use the scale function to blur out the colors by mapping in the grey rgba and color rgba
// To make colors shiny, ...
const boxContainer = document.querySelector('.box-container');
const colors = ['aqua', 'blueviolet', 'darkorange', 'deeppink', 'greenyellow', 'lime', 'red'];

createBoxes();
function createBoxes(){
for(let i = 0; i < 500 ;i++){
    const box = document.createElement('div');
    box.classList.add('box');
    boxContainer.appendChild(box);
}}

const boxes =  document.querySelectorAll('.box');

boxes.forEach( box => { box.addEventListener('mouseenter', () => {
    const color = pickRandomColor();
    box.style.backgroundColor = `${color}`;
    box.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
})
})

boxes.forEach( box => { box.addEventListener('mouseout', () => {
    setTimeout( () => {
        box.style.backgroundColor = 'rgb(45, 46, 42)'; 
        box.style.boxShadow = '0 0 2px rgb(45, 46, 42)';
    }, 1300);
    // setTimeout( () => {
    //     box.style.opacity = '0'}, 1000);
    // setTimeout( () => {
    //     box.style.opacity = '1'}, 1100);
})})

function pickRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}