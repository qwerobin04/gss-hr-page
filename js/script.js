$(document).ready(function(){
  // $('.directions-card-medium-large').addClass("hide");
  //ANCHOR
  $("a").on('click', function(event) {

     // Make sure this.hash has a value before overriding default behavior
     if (this.hash !== "") {
       // Prevent default anchor click behavior
       event.preventDefault();

       // Store hash
       var hash = this.hash;

       // Using jQuery's animate() method to add smooth page scroll
       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 800, function(){

         // Add hash (#) to URL when done scrolling (default click behavior)
         window.location.hash = hash;
       });
     } // End if
   });

    //GSS MAPS
    $("#gss-map_ph").click(function(){
      $("#gss-map_ph").addClass("color");
      $(".gss-ph-iframe").removeClass("hide");
      $(".gss-jp-iframe").addClass("hide");
      $("#gss-map_jp").removeClass("color");
    });

    $("#gss-map_jp").click(function(){
      $(".gss-jp-iframe").removeClass("hide");
      $(".gss-jp-iframe").addClass("show");
      $("#gss-map_jp").addClass("color");
      $("#gss-map_ph").removeClass("color");
      $(".gss-ph-iframe").addClass("hide");
    });
  });

    $('.slider-nav').slick({
     dots: false,
     arrows: false,
     focusOnSelect: true,
     autoplay: true,
     autoplaySpeed: 4000,
     centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

    // CAREER PATH - SLIDER
    $('.slider-container_1').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: false,
         infinite: false,
         speed: 300,
         fade: true,
         focusOnSelect: true
    });
  // STICKY NAV BAR

  $(window).scroll(function(){
    var sticky = $('#nav-cont'),
      scroll = $(window).scrollTop();
// console.log(scroll);
    if (scroll >= stickyOffset){
      sticky.addClass('sticky');
      $(".pre-container").css("padding-top","10vh");
    }
    else {
      sticky.removeClass('sticky');
      $(".pre-container").css("padding-top","0");
    }
});

 var stickyOffset = $('#nav-cont').offset().top;


  $(function($) {
    $('.navbar-container a[href*="#"]:not([href="#"])').click(function(e) {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

        var target = $(this.hash);

        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
          $('html,body').stop().animate({
            scrollTop: target.offset().top - 65//offsets for fixed header
          }, 'linear');
        }
      }
    });
  });

  // BURGER NAVIGATION
  $(document).ready(function(){
    $(".hamburger").click(function(){
        $(".burger-nav").toggleClass("reveal");
        setTimeout(function(){
          $(".overlay").toggleClass("reveal");
        }, 100);
    });
  });

  //VIDEO TAG
  $(document).ready(function(){

  });

  // VIEW PORT ANIMATIONS
  $.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
if ($('.h-wwaat').isInViewport()) {
  $( ".h-waat" ).animate({
    opacity: [1]
    }, 300 );
  $('.h-wwaat').addClass('animated fadeInUp');
}
if ($('.h-content1').isInViewport()) {
  $( ".h-content1" ).animate({
    opacity: [1]
    }, 300 );
  $('.h-content1').addClass('animated fadeInUp');
}
if ($('.gallery-container').isInViewport()) {
  $( ".gallery-container" ).animate({
    opacity: [1]
    }, 300 );
  $('.gallery-container').addClass('animated fadeIn');
}
if ($('.left-block').isInViewport()) {
  $( ".left-block" ).animate({
    opacity: [1]
    }, 300 );
  $('.left-block').addClass('animated fadeIn');
}
if ($('.right-block').isInViewport()) {
  $( ".right-block" ).animate({
    opacity: [1]
  }, 300 );
  $('.right-block').addClass('animated fadeInUp');
}
if ($('.left-block_e-perks').isInViewport()) {
  $( ".left-block_e-perks" ).animate({
    opacity: [1]
    }, 300 );
  $('.left-block_e-perks').addClass('animated fadeInUp');
}
if ($('.right-block_e-perks').isInViewport()) {
  $( ".right-block_e-perks" ).animate({
    opacity: [1]
    }, 300 );
  $('.right-block_e-perks').addClass('animated fadeIn');
}
if ($('.tech-title').isInViewport()) {
  $( ".tech-title" ).animate({
    opacity: [1]
    }, 300 );
  $('.tech-title').addClass('animated fadeInUp');
}
if ($('.tech-icons').isInViewport()) {
  $( ".tech-icons" ).animate({
    opacity: [1]
    }, 300 );
  $('.tech-icons').addClass('animated fadeInUp');
}
if ($('.left-block_cp').isInViewport()) {
  $( ".left-block_cp" ).animate({
    opacity: [1]
    }, 300 );
  $('.left-block_cp').addClass('animated fadeIn');
}
if ($('.right-block_cp').isInViewport()) {
  $( ".right-block_cp" ).animate({
    opacity: [1]
    }, 300 );
  $('.right-block_cp').addClass('animated fadeInUp');
}
if ($('.connect-p').isInViewport()) {
  $('.connect-p').addClass('animated pulse');
}

});
