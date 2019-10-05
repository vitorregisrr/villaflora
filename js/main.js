(function () {
  'use strict';

  //Init Libs
  new WOW().init();
  $('.lazy').lazyload();

  //scroll top
  var scrollTopBtn = $('.scroll-top');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      scrollTopBtn.addClass('show');
    } else {
      scrollTopBtn.removeClass('show');
    }
  });

  scrollTopBtn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });

  window.dispatchEvent(new Event('resize'));

  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 400);

  // Navbar stick event
  $(document).on("scroll", function () {
    if ($(document).scrollTop() > 380) {
      $("#sticky-nav").addClass("sticky");
    } else if (!($(".navbar-collapse").hasClass('show'))) {
      $("#sticky-nav").removeClass("sticky");
    }
  });

  //Smooth Scrooling
  $('a[href*=\\#]:not([href$=\\#])').click(function() {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 50
    }, 500);
});

})();