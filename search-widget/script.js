const search = document.querySelector('.searchbox');
const container = document.querySelector('.container');
const input = document.querySelector('.inputbox');
let value = 0;

search.addEventListener('click',  () => {
    // container.classList.toggle('active')
    input.focus(); 

    //the above would allow me focus on the input as the search bar is clicked
if(value == 0){
    value++;
     container.classList.add('show');
}
else{
    value--;
    container.classList.remove('show');
}
})
