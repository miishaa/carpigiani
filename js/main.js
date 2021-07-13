


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

//spoiler

jQuery(document).ready(function(){
    jQuery('.spoiler-head').click(function(){
        $(this).parents('.spoiler-wrap').toggleClass("active").find('.spoiler-body').slideToggle();
    })
})

// test
// вкладки с содержанием

$(".tab_content").hide();
$(".tab_content:first").show();
/* в режиме вкладок */
$("ul.tabs li").click(function () {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab_accordion").removeClass("d_active");
    $(".tab_accordion[rel^='" + activeTab + "']").addClass("d_active");
});
/* в режиме аккордеона */
$(".tab_accordion").click( function () {
    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();
    $(".tab_accordion").removeClass("d_active");
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});
