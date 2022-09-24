const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach( empty => {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', Drop);
})

function dragStart() {
    // this.className += ' hold';
    this.classList.add('hold'); //add border for dragged image
    setTimeout(() => this.className = '', 0); 
    //timeout is important as it goes invisible immediately, we want to be able to drag.
}

function dragEnd() {
    this.className = 'fill'; 
}

function dragOver(event) {
    event.preventDefault(); //stop from resetting current drag operation to 'none'
}

function dragEnter(event) {
    event.preventDefault(); //stop from Rejecting the immediate user selection as potential target element
    this.className += ' hovered'; 
}

function dragLeave() {
    this.className = 'empty'; 
}

function  Drop() {
    this.className = 'empty'; 
    this.append(fill); 
}