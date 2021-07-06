//slider


if( $(window).width() <= 768 ) {
    $('.innovation-2__body').slick({
        arrows: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 2500,
                settings: "unslick",
            },
            {
                breakpoint: 768,
                settings: "slick",
            },
        ]

    })
}



$(document).ready(function() {
    $('.story-about__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500
    });
});

// trick

function animateMarquee(el, duration) {
    const innerEl = el.querySelector('.marquee__inner');
    const innerWidth = innerEl.offsetWidth;
    const cloneEl = innerEl.cloneNode(true);
    el.appendChild(cloneEl);

    let start = performance.now();
    let progress;
    let translateX;

    requestAnimationFrame(function step(now) {
        progress = (now - start) / duration;

        if (progress > 1) {
            progress %= 1;
            start = now;
        }

        translateX = innerWidth * progress;

        innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
        cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
        requestAnimationFrame(step);
    });
}


const marquee3 = document.querySelector('#marquee3');

animateMarquee(marquee3, 15000);



//burger menu

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) { iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
});
}


//submenu
let menuCloses = document.querySelectorAll('.menu__close');
if (menuCloses.length > 0){
    for (let index = 0; index < menuCloses.length; index++) {
        const menuClose = menuCloses[index];
        menuClose.addEventListener("click", function (e) {
            menuClose.parentElement.classList.toggle('active');
        });
    }
}


//animation on scroll

const animItems = document.querySelectorAll('._anim-items');

if( animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(param) {
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight ) {
                animItemPoint =  window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll();
    }, 300)

}