

// prodcuts page - top categories slider - mobile
let prodCats = $('.videos__body');
let prodCats2 = $('.stories__body');

function prodCatsSliderFunc($widthScreen) {
    if ($widthScreen <= "768") {
        if (!$(prodCats).hasClass('slick-initialized')) {
            $(prodCats).slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                focusOnSelect: true,
                draggable: true,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            })
        }
        if (!$(prodCats2).hasClass('slick-initialized')) {
            $(prodCats2).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                focusOnSelect: true,
                draggable: true,
                infinite: true
            })
        }

    } else {
        if ($(prodCats).hasClass('slick-initialized')) {
            $(prodCats).slick("unslick");
        }
        if ($(prodCats2).hasClass('slick-initialized')) {
            $(prodCats2).slick("unslick");
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

