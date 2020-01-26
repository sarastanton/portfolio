//
// $(document).ready(function() {
//
//
// });


$(window).on("load", function() {
  // $(".loader .inner").fadeOut(500, function() {
  //   $(".loader").fadeOut(750);
  // });

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

  // var height = $(window).height();
  //
  //   $('#header').css('height', height);

  //Scrollspy plugin
  $('body').scrollspy({ target: '.navbar-spy'});


  // Superslides
  $('#slides').superslides({
    animation: 'fade',
    play: '5000',
    inherit_height_from: '#slides-wrapper',
    inherit_width_from: '#slides-wrapper'
  });

  // Typed JS
  // const typed = new Typed(".typed", {
  //   strings: ["Full Stack Web Developer"],
  //   // can add other text to the array above
  //   typeSpeed: 70,
  //   loop: true,
  //   startDelay: 1000,
  //   showCursor: false,
  // });

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

  // const skillsTopOffset = $(".skillsSection").offset().top;
  // const statsTopOffset = $(".statsSection").offset().top;
  // let countUpFinished = false;

  // $(window).scroll(function() {
  //
  //   if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
  //     // Easy Pie Chart
  //     $('.chart').easyPieChart({
  //         easing: 'easeInOut',
  //         barColor: 'white',
  //         trackColor: false,
  //         scaleColor: false,
  //         lineWidth: 4,
  //         size: 152,
  //         onStep: function(from, to, percent) {
  //           $(this.el).find('.percent').text(Math.round(percent));
  //         }
  //     });
  //   };
  //
  //   if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
  //     // countUp
  //     $(".counter").each(function() {
  //       const element = $(this);
  //       const endVal = parseInt(element.text());
  //
  //       element.countup(endVal);
  //     });
  //
  //     countUpFinished = true;
  //   };
  //
  // });

  $("[data-fancybox]").fancybox({
        // helpers: {
        //     media: {}
        // },
        // iframe : {
		    //   preload : false
	      // }
    });

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
    // debugger
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
