const smallcups = document.querySelectorAll('.small');
const litres = document.getElementById('remaining-value');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remaining');

BigCup();

smallcups.forEach( (cup, index) => { cup.addEventListener('click', ()=> selectCups(index))
})

function selectCups(index){
    smallcups.forEach((cup, idx) => {
        if(idx <= index){
            cup.classList.add('active'); //pour if cup behind cup clicked
        }
        else{
            cup.classList.remove('active'); //fill if cup in front of cup clicked
        }
    })
    BigCup();
}

function BigCup(){
    const pouredCups = document.querySelectorAll('.small.active').length;
    //number of cups we seleceted
    const totalcups = smallcups.length;
    //number of cups we have

    if(pouredCups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    }
    
    else{
        if(pouredCups === 7 || pouredCups === 8){
            remained.style.flexDirection = `row`;
        }
        else{
            remained.style.flexDirection = `column`;
        }
        //The above is for the display of litres remaining after pouring 7 cups

        percentage.style.visibility = 'visible';
        percentage.style.height = `${pouredCups / totalcups * 18}rem`;
        percentage.innerText = `${pouredCups / totalcups * 100}%`;

        //below position remaining div
        switch(pouredCups){
            case 4:
                remained.style.marginBottom = '5rem';
                break;
            case 5:
            case 6:
                remained.style.marginBottom = '12.5rem';
                break;
            case 7:
            case 8:
                remained.style.marginBottom = '15.5rem';
                break;
            default:
                remained.style.marginBottom = '0';
        }
    }
    
//The above is filling the bigcup according to the small cups

    if(pouredCups === totalcups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }
    else{
        remained.style.visibility = 'visible';
        litres.innerText = `${2 -(250 * pouredCups / 1000)}L`
    }
//The above is showing what's remaining in the cup for us to fill up
}
