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
        vertical: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical: false
              }
            }
        ]
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
    document.querySelector('#contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // submit이벤트 막기
        var fromName = document.querySelector('input[name="from_name"]').value; // 전송자 이름 추출
        var sendSuccess = '메일 전송에 성공했습니다.';
        var sendFail = '메일 전송에 실패했습니다.';

        emailjs.init("user_JjSS0asucepLDFpyXulKc"); // API keys
        emailjs.sendForm('service_p40jtvn', 'template_5xnegrj', this)
            .then(function() {
                alert(sendSuccess);
            }, function(error) {
                alert(sendFail);
                console.log('전송실패', error);
            });
    });
    if ($(window).width() < 640) {
        $(".mMenu").click(function() {
            $(".menu").addClass("on");
        });
        $(".mClose").click(function() {
            $(".menu").removeClass("on");
        });
    };
});
