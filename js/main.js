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
    });
    $('.offer__row-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('.mobile-btn-offer'),
        centerMode: true,
        centerPadding: '10px'
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
//
// //
// // pc or mobileconst
// isMobile = { Android: function() {return navigator.userAgent.match(/Android/i);}, BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);}, iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);}, Opera: function() {return navigator.userAgent.match(/Opera Mini/i);}, Windows: function() {return navigator.userAgent.match(/IEMobile/i);}, any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
// if(isMobile.any()){ document.body.classList.add('touch');
//     let menuArrows=document.querySelectorAll('.menu__arrow');
//     if (menuArrows.length > 0){ for (let index = 0; index < menuArrows.length; index++) {
//         const menuArrow = menuArrows[index];
//         menuArrow.addEventListener("click", function (e) {
//             menuArrow.parentElement.classList.toggle('active');
//         });
//     }
//     }
// }else{ document.body.classList.add('mouse');
// }
//
