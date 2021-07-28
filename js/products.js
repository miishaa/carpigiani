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
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            variableWidth: true,
                            slidesToShow: 3,
                        }
                    }
                ]
            });
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
    $('.features__block:not(:first)').addClass('_hide');

    //to hide counter on 992px
    $('h3[data-category] > span:not(:first)').css('display', 'none');

    //filter

    let filter = $('[data-filter]'); // all items with this attr
    filter.on('click', function () {
        let category = $(this).data('filter'); // give category certain name of this attr
        if (category == 'all'){
            $('[data-category]').removeClass('_hide').addClass('show');
            $('.capacity').addClass('_hide');
            $('.features__block:not(:first)').addClass('_hide');
            $('h3[data-category]:not(:first-child)').css('border-bottom', 'none');
            $('h3[data-category] > span:not(:first)').css('display', 'none');
        } else {
            $('[data-category]').each( function () {
                let workCategory = $(this).data('category');
                if (workCategory != category){  // if name of attr is not the not same with this category
                    $(this).addClass('_hide').removeClass('show');
                    $('h3[data-category]').css('border-bottom', '1px solid black');
                } else {
                    $(this).removeClass('_hide').addClass('show');
                    $('h3[data-category] > span').css('display', 'block');
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


    //features picker
    $('.products__filter .features__body li').on('click', function () {
        $(this).toggleClass('checked');
        featuresCounter();
        featuresCounter1();
        featuresCounter2();
        featuresCounter3();
        featuresCounter4();
        featuresCounter5();
    });

    $(window).resize(function () {
        let counter = $('.features__block[data-category] h5.spoiler-head span')
        let windowWidth = $(window).width();
        let units = $('.products__filter [data-category] .features__body').children('li.checked').length;
        if(windowWidth < 992){
            counter.hide();
        } else {
            if (units > 0){
                counter.show();
            } else{
                counter.hide();
            }
        }
    })
    //features counter

    function featuresCounter() {
        let counter = $('.filter-counter');
        let units = $('.products__filter [data-category="all"] .features__body').children('li.checked').length;
        let windowWidth = $(window).width();
        if(windowWidth >= 992){
            if (units > 0){
                counter.css('display', 'inline');
                counter.text(units);
            } else{
                counter.css('display', 'none');
            }
        }
    }
    function featuresCounter1() {
        let counter = $('.filter-counter1');
        let units = $('.products__filter [data-category="batchFreezers"] .features__body').children('li.checked').length;
        let windowWidth = $(window).width();
        if(windowWidth >= 992){
            if (units > 0){
                counter.css('display', 'inline');
                counter.text(units);
            } else{
                counter.css('display', 'none');
            }
        }
    }
    function featuresCounter2() {
        let counter = $('.filter-counter2');
        let units = $('.products__filter [data-category="hardeningCabinets"] .features__body').children('li.checked').length;
        let windowWidth = $(window).width();
        if(windowWidth >= 992){
            if (units > 0){
                counter.css('display', 'inline');
                counter.text(units);
            } else{
                counter.css('display', 'none');
            }
        }
    }
    function featuresCounter3() {
        let counter = $('.filter-counter3');
        let units = $('.products__filter [data-category="displayCases"] .features__body').children('li.checked').length;
        let windowWidth = $(window).width();
        if(windowWidth >= 992){
            if (units > 0){
                counter.css('display', 'inline');
                counter.text(units);
            } else{
                counter.css('display', 'none');
            }
        }
    }
    function featuresCounter4() {
        let counter = $('.filter-counter4');
        let units = $('.products__filter [data-category="softServeMachines"] .features__body').children('li.checked').length;
        let windowWidth = $(window).width();
        if(windowWidth >= 992){
            if (units > 0){
                counter.css('display', 'inline');
                counter.text(units);
            } else{
                counter.css('display', 'none');
            }
        }
    }
    function featuresCounter5() {
        let counter = $('.filter-counter5');
        let units = $('.products__filter [data-category="shakeMachines"] .features__body').children('li.checked').length;
        let windowWidth = $(window).width();
        if(windowWidth >= 992){
            if (units > 0){
                counter.css('display', 'inline');
                counter.text(units);
            } else{
                counter.css('display', 'none');
            }
        }
    }


});

