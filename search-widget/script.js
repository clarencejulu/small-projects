const search = document.querySelector('.searchbox');
const container = document.querySelector('.container');
const input = document.querySelector('.inputbox');
const body = document.body;
let value = 0;

search.addEventListener('click',  () => {  
    container.classList.toggle('show');
    if(container.classList.contains('show')){
        input.focus();
    }
    else{
        input.removeAttribute('focus');
    }
})

container.addEventListener('click',  (event) => {
    event.stopPropagation();
})

body.addEventListener('click',  () => {
    input.removeAttribute('focus');
})
