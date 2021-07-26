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


// slider - mobile

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

//
// //filter and counter
// $(document).ready(function () {
//     //counter
//     // setTimeout(counterUnits, 1000);
// let test = 0;
//     function counterUnits(test){
//         let counter = $('.counter');
//         let units = $('.result').children(test).length;
//         counter.text(`showing ${units} items`);
//         console.log(units)
//     }
//     counterUnits('.products__item');
//     // $('.category').on('click', counterUnits );
//
//     //filter
//     let filter = $('[data-filter]');
//     filter.on('click', function () {
//         let category = $(this).data('filter');
//         if (category == 'all'){
//             $('[data-category]').removeClass('_hide').addClass('show');
//         } else {
//             $('[data-category]').each( function () {
//                 let workCategory = $(this).data('category');
//                 if (workCategory != category){
//                     $(this).addClass('_hide').removeClass('show');
//                 } else {
//                     $(this).removeClass('_hide').addClass('show');
//                     // counterUnits('.products__item.show');
//                     setTimeout(counterUnits, 100, '.products__item.show');
//                 }
//             })
//         }
//     })
// });


// filter and counter

$(document).ready(function () {
    //counter

    $('.products__item').addClass('show');

    function counterUnits(){
        let counter = $('.counter');
        let units = $('.result').children('.products__item.show').length;
        counter.text(`showing ${units} items`);
    }
    counterUnits();
    $('.category').on('click', counterUnits );

    // to hide capacity
    $('.capacity').addClass('_hide');
    //filter

    let filter = $('[data-filter]'); // all items with this attr
    filter.on('click', function () {
        let category = $(this).data('filter'); // give category certain name of this attr
        if (category == 'all'){
            $('[data-category]').removeClass('_hide').addClass('show');
            $('.capacity').addClass('_hide');
            $('h3:not(:first-child)').css('border-bottom', 'none');
        } else {
            $('[data-category]').each( function () {
                let workCategory = $(this).data('category');
                if (workCategory != category){  // if name of attr is not the not same with this category
                    $(this).addClass('_hide').removeClass('show');
                    $('h3').css('border-bottom', '1px solid black');
                } else {
                    $(this).removeClass('_hide').addClass('show');
                }
            })
        }
    })

    //input
    let $slider = $('#capacity_batchFreezers');
    let $fill = $('.bar .fill');

    let $slider2 = $('#capacity_softServeMachines');
    let $fill2 = $('.bar2 .fill2');

    let $slider3 = $('#capacity_hardeningCabinets');
    let $fill3 = $('.bar3 .fill3');

    let $slider4 = $('#capacity_displayCases');
    let $fill4 = $('.bar4 .fill4');



    capacity_displayCases

    function setBar() {
        if ($slider.val() == 0){
            $fill.css('width', '0%');
        } else if ($slider.val() == 1) {
            $fill.css('width', '25%');
        } else if ($slider.val() == 2){
            $fill.css('width', '50%');
        } else if ($slider.val() == 3) {
            $fill.css('width', '75%');
        } else {
            $fill.css('width', '100%');
        }
    }

    function setBar2() {
        if ($slider2.val() == 0){
            $fill2.css('width', '0%');
        } else if ($slider2.val() == 1) {
            $fill2.css('width', '25%');
        } else if ($slider2.val() == 2){
            $fill2.css('width', '50%');
        } else if ($slider2.val() == 3) {
            $fill2.css('width', '75%');
        } else {
            $fill2.css('width', '100%');
        }
    }

    function setBar3() {
        if ($slider3.val() == 0){
            $fill3.css('width', '0%');
        } else if ($slider3.val() == 1) {
            $fill3.css('width', '20%');
        } else if ($slider3.val() == 2){
            $fill3.css('width', '40%');
        } else if ($slider3.val() == 3) {
            $fill3.css('width', '60%');
        } else if ($slider3.val() == 4) {
            $fill3.css('width', '80%');
        } else {
            $fill3.css('width', '100%');
        }
    }

    function setBar4() {
        if ($slider4.val() == 0){
            $fill4.css('width', '0%');
        } else if ($slider4.val() == 1) {
            $fill4.css('width', '20%');
        } else if ($slider4.val() == 2){
            $fill4.css('width', '40%');
        } else if ($slider4.val() == 3) {
            $fill4.css('width', '60%');
        } else if ($slider4.val() == 4) {
            $fill4.css('width', '80%');
        } else {
            $fill4.css('width', '100%');
        }
    }

    $slider4.on('input', setBar4);
    setBar4();

    $slider3.on('input', setBar3);
    setBar3();

    $slider2.on('input', setBar2);
    setBar2();

    $slider.on('input', setBar);
    setBar();

});

