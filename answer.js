$(".q-box").on("click", function () {
  var findElm = $(this).next(".a-box");

  if (findElm.is(":visible")) {
    findElm.slideUp();
    $(this).removeClass("close");
  } else {
    findElm.css("display", "flex").hide().slideDown();
    $(this).addClass("close");
  }
});


$(function () {
  $(window).on("scroll", function () {
    $(".fade-in").each(function () {
      const pos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scroll > pos - windowHeight + 100 && !$(this).hasClass("show")) {
        $(this).addClass("show");
      }
    });

    $(".fade-in-voice").each(function (i) {
      const pos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll > pos - windowHeight + 100 && !$(this).hasClass("show")) {
        const $this = $(this);
        setTimeout(function () {
          $this.addClass("show");
        }, i * 300);
      }
    });
  });

  $(window).trigger("scroll");
});















 $(function(){
    $('a[href^="#"]').click(function(e){
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        var position = target.offset().top;
        $('html, body').animate({scrollTop: position}, 200);
      }
    });
  });