const navSlide = () => {
    const burgerAnimation = document.querySelector('.burgerAnimation');
    const nav = document.querySelector('.nav-children');
    const navChildren = document.querySelectorAll('.nav-children li');

    burgerAnimation.addEventListener('click', () => {
        //toggle the navigation bar
        nav.classList.toggle('nav-active');
        
        //animating the lists on right hand
        navChildren.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        };
    });

    //the burger cross animation -- icon, when pressed 
        burgerAnimation.classList.toggle('pressBurger'); 
    });
}

//making the intro h1 fade in the FE

    const text = document.querySelector('.intro h1');
    const strTextFromIntro = text.textContent;
    const splitText = strTextFromIntro.split("");
    text.textContent = "";

    for(let i=0; i < splitText.length; i++) {
    text.innerHTML += "<span>"+ splitText[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++
        if(char === splitText.length) {
            complete();
            return;
        }
    }

    function complete() {
        clearInterval(timer);
        timer = null;
    }

const app = () => {
navSlide();
onTick();
complete();
}


app();



