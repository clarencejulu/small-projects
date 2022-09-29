const eyes = document.querySelectorAll('.eye');

function angle(cx, cy, ax, ay){
    //calculate the angle between them
    const dy = ay - cy;
    const dx = ax - cx;
    const radians = Math.atan2(dy, dx);
    const degrees = radians * 180 / Math.PI;
    return degrees;
}

document.addEventListener('mousemove' || 'touchmove', (event) => {
    //Get position of cursor
    const mouseX = event.clientX; 
    const mouseY = event.clientY;

    //Get coordinates for the middle of the base image
    const main = document.getElementById('main');
    const rect = main.getBoundingClientRect();
    const mainX = rect.left + rect.width / 2;
    const mainY = rect.top + rect.height / 2;

    const angleDegree = angle(mouseX, mouseY, mainX, mainY);
    eyes.forEach( eye => {
        eye.style.transform = `rotate(${90 + angleDegree}deg)`;
        main.style.filter = `hue-rotate(${angleDegree}deg)`
    })
})


