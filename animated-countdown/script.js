const number = document.getElementById('number');
const getReady = document.querySelector('.get-ready');
let value = 4;

let interval = setInterval(decrementNumber, 1000);

function decrementNumber(){   
    if(value == 1){
        number.innerText = "";
        getReady.innerText = "GO";
        getReady.style.fontSize = `33px`;
        clearInterval(interval);
        createButton();
    }
    else{
        value--;
        number.innerText = `${value}`;
        console.log(value);
    }
}

function createButton(){
    const btn = document.createElement('button');
    btn.classList.add('replay');
    btn.innerText = "Replay";
    document.body.appendChild(btn);
    const replay = document.querySelector('.replay')

    const buttonMarginTop = btn.offsetTop;
    const heightOfPage = document.body.offsetHeight;
    const height = heightOfPage - buttonMarginTop;
    replay.style.transform = `translateY(${height + 5}px)`;

    setTimeout(() => {
        btn.classList.add('under');
        replay.style.transform  = `translateY(0px)`; //so as to allow under class work, we set replay to the same translate
    }, 50);

    btn.addEventListener('click', ()=> {
        window.location.reload();
    })
}

