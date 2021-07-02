new CircleType(document.getElementById('up'))
    .radius(200);

new CircleType(document.getElementById('up-2'))
    .radius(200);

new CircleType(document.getElementById('down'))
    .dir(-1)
    .radius(200);
new CircleType(document.getElementById('up-mobile'))
    .radius(200);

new CircleType(document.getElementById('up-2-mobile'))
    .radius(200);

new CircleType(document.getElementById('down-mobile'))
    .radius(200);
//slider

$(document).ready(function() {
    $('.kit').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.mini-slider',
        arrows: false,
        draggable: true,
        infinite: true

    });
    $('.mini-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.kit',
        draggable: true,
        infinite: true
    });
    $('.values-mobile-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    });
    $('.offer__row-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('.mobile-btn-offer'),
        centerMode: true,
        centerPadding: '10px',
        autoplay: true,
        autoplaySpeed: 2000
    })
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

const marquee1 = document.querySelector('#marquee1');
const marquee2 = document.querySelector('#marquee2');

animateMarquee(marquee1, 10000);
animateMarquee(marquee2, 15000);

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