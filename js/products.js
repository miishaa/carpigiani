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
const marquee6 = document.querySelector('#marquee6');
animateMarquee(marquee6, 15000);

// category picker



$(document).ready(function(){
    $('.category .category__item').click(function(){
        $('.category__item').removeClass("_active");
        $(this).addClass("_active");
    });
});


// products page - top categories slider - mobile

let prodCats = $('.category');
function prodCatsSliderFunc($widthScreen) {
    if ($widthScreen <= "992") {
        if (!$(prodCats).hasClass('slick-initialized')) {
            $(prodCats).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                focusOnSelect: true,
                draggable: true,
                infinite: true,
            })
        }
    } else {
        if ($(prodCats).hasClass('slick-initialized')) {
            $(prodCats).slick("unslick");
        }
    }
}
let widthScreen = $(window).width();

$(window).ready(
    prodCatsSliderFunc(widthScreen)
).resize(function () {
    let widthScreen = $(window).width();
    prodCatsSliderFunc(widthScreen);
});

