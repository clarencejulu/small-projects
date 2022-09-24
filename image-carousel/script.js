//scanty code
//'prev' code is different from 'next' below //can be fixeed
//check brad's
//If i created an image container for each image or call the images in a different way. E.G (.image-slider div)  
const slider = document.querySelector('.image-slider');
const images = document.querySelectorAll('.image');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let value = 0;
let interval = setInterval(slide , 1500);

function slide(){
    value++;  
    if(value == (images.length)){
        value = 0;
    }   
    moveImage();   
}

function moveImage(){
    // slider.style.transform = `translateX(${-value*500}px)`; 
    images.forEach( image => {
        image.style.transform = `translateX(-${value}00%)`; 
        //This is the main problem, should have moved the container instead
    })
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(slide , 1500);
}
    
next.addEventListener('click', () => {
    slide();
    resetInterval();
})

prev.addEventListener('click', () => {
    if(value <= 0){
        value = images.length;
        resetInterval();
    }
    value--;
    moveImage();
    resetInterval();
})
