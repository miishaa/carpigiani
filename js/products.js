
$(document).ready(function() {
    $('.videos__body').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        infinite: true,
        dots: true,

    });
    $('.stories__body').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        infinite: true,
        dots: true,
    });

});