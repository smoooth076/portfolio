$(function () { // wait for document ready
  AOS.init();
  $(".flow-text").on("click", function(){
    $("html, body").animate({
      scrollTop : 0
    }, 500);
  });
  $(".sec02 .desc_wrap button").click(function() {
    $(this).siblings().slideUp(400);
    $(this).removeClass("on");
    $(".sec02 ul.thumb li").removeClass("active");
  });

  $(".sec02 ul.thumb li").click(function() {
    $(this).addClass("active").siblings().removeClass("active");
    $(this).parent().siblings().find("li").removeClass("active")
    $(".sec02 .desc").css("display","none");
    $("#" + $(this).data('id')).slideDown(400).siblings("div").css("display","none");
    $("#" + $(this).data('id')).siblings("button").addClass("on");
  });
  
});
