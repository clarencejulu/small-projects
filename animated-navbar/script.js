const navbar = document.querySelector('.nav');
const menuItems = document.querySelectorAll('.menu');
const navigation = document.getElementById('navigate');

// const hide = setTimeout(removeDisplay, 5000);

navigation.addEventListener('click', () => {
    navbar.classList.toggle('active');

    // if(navbar.className == "nav active"){
    //     menuItems.forEach( menuItem => {
    //         setTimeout(() => {
    //             menuItem.style.display = 'none';
    //         }, 1000)
    //     })
    // }
    // else{
    //     menuItems.forEach( menuItem => {
    //         // setTimeout(() => {
    //             menuItem.style.display = 'block';
    //         // }, 0)
    //     })
    // }

})

// const removeDisplay = () => {}



