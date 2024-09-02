$(function () { // wait for document ready

  AOS.init();

  $(".flow-text").on("click", function(){
    $("html, body").animate({
      scrollTop : 0
    }, 500);
  });

  $(".sec02 .desc_wrap button").click(function() {
    const $this = $(this);
    $this.siblings().slideUp(400);
    $this.removeClass("on");
    $(".sec02 ul.thumb li").removeClass("active");
  });

  $(".sec02 ul.thumb li").click(function() {
    const $this = $(this);
    const targetId = $this.data('id');
    
    $this.addClass("active").siblings().removeClass("active");
    $this.parents(".thumb").siblings().find("li").removeClass("active")
    $(".sec02 .desc").hide();
    $("#" + targetId).slideDown(400).siblings("div").hide();
    
    const $descWrap = $("#" + targetId).parents(".desc_wrap");
    $descWrap.siblings().find("button").removeClass("on");
    $descWrap.find("button").addClass("on");
  });
  
});
