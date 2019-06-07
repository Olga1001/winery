$(document).ready(function () {
    $('.header-btn-menu').click(function(){
        $(this).toggleClass('btn-active');
        $('.header-menu').addClass('active');

        if (!$(this).hasClass('btn-active')) {
            $('.header-menu').removeClass('active');
        }
    });

    //slider
    $(".home-offer-slider").slick({
        slidesToShow: 1,
        arrows: false,
        dots: true
    });

    $(".blog-second-item").click(function () {
        $(".blog-second-hover").addClass('active');
    });
});





