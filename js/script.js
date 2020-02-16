$(window).on("load", function() {

  $("items").isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });
})

$(document).ready(function() {

  //Scrollspy plugin
  $('body').scrollspy({ target: '.navbar-spy'});

  // Superslides
  $('#slides').superslides({
    animation: 'fade',
    play: '5000',
    inherit_height_from: '#slides-wrapper',
    inherit_width_from: '#slides-wrapper'
  });

  // Owl Carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
      0:{
        items:1
      },
      480:{
        items:3
      },
      768:{
        items:3
      },
      938:{
        items:4
      },
    }
  });

  $("[data-fancybox]").fancybox();

  $("#filters a").click(function() {

    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    const selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
      }
    });

    return false;

  });

  $("#navigation li a").click(function(e) {

    const targetElement = $(this).attr("href");
    const blogLink = $('a:contains("Blog")').attr("href");
    if(targetElement != blogLink) {
      e.preventDefault();
      const targetPosition = $(targetElement).offset().top;
      $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow")
    }

  });

  $(".icon").click(function(e) {
    e.preventDefault();

    const targetElement = $(this).attr("href");
    const targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    const body = $("body");

    if($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    }
    else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }

  const copy = () => {
    const txt = document.createElement('textarea');
    txt.innerHTML = '&copy;';
    return txt.value;
  };

  $('footer').text(`${copy()} Sara Stanton ${(new Date()).getFullYear()}`)


  // $(window).scroll(function() {
  //     var position = $(this).scrollTop();
  //
  //     $('.section').each(function() {
  //         var target = $(this).offset().top;
  //         var id = $(this).attr('id');
  //
  //         if (position >= target) {
  //            $('#navigation > ul > li > a').removeClass('active');
  //            $('#navigation > ul > li > a[href=#' + id + ']').addClass('active');
  //        };
  //     });
  // });

});
