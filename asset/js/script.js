$(function () { // wait for document ready
  AOS.init();
  $(".flow-text").on("click", function(){
    $("html, body").animate({
      scrollTop : 0
    }, 500);
  });

  $(".sec02 ul.thumb li").click(function() {
    $(this).addClass("active").siblings().removeClass("active");
    $(this).parent().siblings().find("li").removeClass("active")
    $(".sec02 .desc").css("display","none");
    $("#" + $(this).data('id')).slideDown(400).siblings().css("display","none");
  });
});
