


  (function($){
    $(document).ready(function() {

	$('.test').slick({
		nextArrow: $(".bbbt"),
		prevArrow: $(".bnbt"),
		autoplaySpeed: 5000,
		autoplay: true,
		adaptiveHeight: true,
		dots: true,
	});


     $('#my-video-display').fitVids();

    });
    
  })(jQuery);

