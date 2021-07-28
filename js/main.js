


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
        autoplay: true,
        autoplaySpeed: 1500,
    });
    $('.offer__row-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendArrows: $('.mobile-btn-offer'),
        centerMode: true,
        centerPadding: '10px',
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.mainCarousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        infinite: false,
        asNavFor: '.thumbCarousel',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true
                }
            }
        ]
    });
    $('.thumbCarousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        infinite: false,
        asNavFor: '.mainCarousel',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    infinite: true
                }
            }
        ]
    });
});



//tabs

    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });


$(".samples-mobile-table").on("click", function() {
    let windowWidth = $(window).width();
    if (windowWidth <= 1024) {
        $(this).toggleClass("active")
    } else {
        $(this).removeClass("active")
    }
});
const show5 = ()=>{
        $(".tabs__content.active .samples-mobile-first-table").show();
        $(".tabs__content.active").find(".mobile-hide, .samples-mobile-second-table, .btn").hide()
    }
;
const show10 = ()=>{
        $(".tabs__content.active .samples-mobile-second-table").show();
        $(".tabs__content.active").find(".mobile-hide, .samples-mobile-first-table, .btn").hide()
    }
;
const showDef = ()=>{
        $(".tabs__content.active").find(".mobile-hide, .btn").show();
        $(".tabs__content.active .desktop-hide:not(.samples-mobile-dropdown):not(.triangle-btn)").hide()
    }
;
let samplesDropdown = $(".tabs__content .samples-mobile-dropdown");
samplesDropdown.on("click", "li", function() {
    let windowWidth = $(window).width();
    if (windowWidth <= 1024) {
        let _current = $(".tabs__content.active .samplesMobileTableContainer > div").detach();
        let _new = $(this).children().detach();
        let _new_type = _new.data("attr");
        $(".tabs__content.active .samplesMobileTableContainer").append(_new);
        $(this).append(_current);
        switch (_new_type) {
            case "default":
                showDef();
                break;
            case "first-table":
                show5();
                break;
            case "second-table":
                show10();
                break
        }
    }
});





//burger menu

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
});
}

//tabs-caption
let menuCloses = document.querySelectorAll('.menu__close');
if (menuCloses.length > 0){
    for (let index = 0; index < menuCloses.length; index++) {
        const menuClose = menuCloses[index];
        menuClose.addEventListener("click", function (e) {
            menuClose.parentElement.classList.toggle('active');
        });
    }
}

//submenu
let menuClose = document.querySelectorAll('.menu-close');
if (menuClose.length > 0){
    for (let index = 0; index < menuClose.length; index++) {
        const menuClos = menuClose[index];
        menuClos.addEventListener("click", function (e) {
            menuClos.parentElement.classList.toggle('tab_active');
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



//spoiler

$(document).ready(function () {

    $('.spoiler-head').on("click", function() {
        let windowWidth = $(window).width();
        if (windowWidth <= 992) {
            $(this).parents('.spoiler-wrap').toggleClass("active").find('.spoiler-body').slideToggle();
        }
    });

    $(window).resize(function () {
        let windowWidth = $(window).width();
        if (windowWidth >= 993){
            $('.spoiler-wrap').removeClass("active");
            $('.spoiler-body').show();
        } else {
            $('.spoiler-body').hide();
        }
    })

})




//zoom

$("#zoom_1").elevateZoom({
    zoomType: "inner",
    cursor: "crosshair",
});
$("#zoom_2").elevateZoom({
    zoomType				: "lens",
    lensShape : "round",
    lensSize    : 200
});

Fancybox.bind('[data-fancybox="gallery"]', {

    Thumbs: false,
    animated: false,
    dragToClose: false,
    showClass: false,
    hideClass: false,
    closeButton: "outside",

    Image: {
        click: "close",
        wheel: "slide",
        zoom: true,
        fit: "contain",
    },
});

