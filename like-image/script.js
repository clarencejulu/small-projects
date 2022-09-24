const image = document.getElementById('picture');
const counter = document.getElementById('count');

let value = 0;
counter.innerText = `No Likes Yet`;

image.addEventListener('dblclick', function(event){
    value++;
    if(value==1){
        counter.innerText = `You have liked it once`;
    }
    else{
        counter.innerText = `You have liked it ${value} times`;
    }
    
    const x = event.clientX;
    const y = event.clientY;

    const top = event.target.offsetTop;
    const left = event.target.offsetLeft;

    const xbutton = x - left;
    const ybutton = y - top;

    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.top = ybutton + 'px';
    heart.style.left = xbutton + 'px';

    this.appendChild(heart);
    setTimeout(() => heart.remove(), 600);
})