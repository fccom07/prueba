
    (function($) {
    "use strict"; 
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery);

  var flag = true;
  $('#btnFade').click(function(){
    if(flag){
      $('#imagen').fadeOut(500);
      $('#btnFade').html("Aparecer Foto");
      flag = false;
    }
    else{
      $('#imagen').fadeIn();
      $('#btnFade').html("Desaparecer Foto");
      flag = true;
    }
  });

  var flag2 = true;
  $('#btnSlide').click(function(){
    if(flag2){
      $('#imagen2').slideUp();
      $('#btnSlide').html("Aparecer Foto");
      flag2 = false;
    }
    else{
      $('#imagen2').slideDown();
      $('#btnSlide').html("Desaparecer Foto");
      flag2 = true;
    }
  });

    var flag3 = true;
  $('#btnToggle').click(function(){
    if(flag2){
      $('#texto').fadeToggle(3000);
      $('#btnToggle').html("Aparecer Text");
      flag2 = false;
    }
    else{
      $('#texto').fadeToggle(3000);
      $('#btnToggle').html("Desaparecer Texto");
      flag2 = true;
    }
  });
  var size=50;
  $('#btnIncrementar').click(function(){
    size=size+50;
    animacion(size);
  });
  $('#btnDecrementar').click(function(){
    size=size-50;
    animacion(size);
  });

  function animacion(size){
    $('#imagen3').animate({height: size+"px", width: size+"px"},1500);
  }