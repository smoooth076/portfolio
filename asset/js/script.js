$(function () { // wait for document ready
  $(".flow-text").on("click", function(){
    $("html, body").animate({
      scrollTop : 0
    }, 500);
  });
});