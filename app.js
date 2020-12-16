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

    //the burger icon animation
        burgerAnimation.classList.toggle('pressBurger'); 
    });
}

const app = () => {
    navSlide();
}

app();