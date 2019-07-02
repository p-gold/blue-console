const burger = document.querySelector('#burger');
const nav = document.querySelector('.nav-items');
const links = document.querySelectorAll('.nav-items a');


function toggleNav(){
    
    //toggling the nav
    nav.classList.toggle('nav-clicked');

    //toggling the burger
    burger.classList.toggle('toggle');
    console.log(links)
    links.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = `navLinksAnimate 0.5s ease forwards ${index / 7 + 0.2}s`;
        };
    });
}

burger.addEventListener('click', toggleNav)