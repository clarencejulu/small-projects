//Javascript would be much shorter if i used checkboxes 

const buttons = document.querySelectorAll('.check-container');
const good = document.querySelector('.good');
const cheap = document.querySelector('.cheap');
const fast = document.querySelector('.fast');

let counter = 0;

buttons.forEach( button => { button.addEventListener('click', (event)=> {
    button.classList.toggle('checked');
    console.log(event.currentTarget); //:::
    checkChecked(event.currentTarget);
})
})

function checkChecked(clickedOn){
    for(let i = 0; i < buttons.length; i++){
        if(buttons[i].classList.contains('checked')){
            counter++;
        }
    }

    if(counter == 3){
        removeChecked(clickedOn);
    }
    counter = 0;
}

function removeChecked(clickedOn){
    if(clickedOn.classList.contains('good')){
        fast.classList.remove('checked');
    }
    else if(clickedOn.classList.contains('fast')){
        cheap.classList.remove('checked');
    }
    else{
        good.classList.remove('checked');
    }
    
}

//removing just good atm