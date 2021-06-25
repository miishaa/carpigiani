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
        infinite: true,
        asNavFor: '.mini-slider',
        arrows: false,

    });
    $('.mini-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.kit',
        draggable: false
    });
    $('.values-mobile-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: true
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