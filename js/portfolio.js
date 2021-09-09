$(function() {
    $('.slider-for').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        // dots: true,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        // verticalSwiping: true,
        vertical: true
    });
    $(".menu p").each(function() {
        var thisOffset = $("." + $(this).data('id')).offset().top;

        $(this).click(function() {
            $("html, body").animate({
                scrollTop: thisOffset
            }, 1000);
            $(this).addClass('on');
        });
    });
});
