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
    document.querySelector('#contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // submit이벤트 막기
        const fromName = document.querySelector('input[name="from_name"]').value; // 전송자 이름 추출

        emailjs.init("user_JjSS0asucepLDFpyXulKc"); // API keys
        emailjs.sendForm('service_p40jtvn', 'template_5xnegrj', this)
            .then(function() {
                alert(`${fromName}님, 메일 전송 완료 되었습니다 :)`)
            }, function(error) {
                alert(`${fromName}님, 메일 전송이 실패했습니다 :(`)
                console.log('전송실패', error);
            });
    });
});
