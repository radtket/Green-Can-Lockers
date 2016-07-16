


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


      $('#my-video-display').prettyEmbed({
		videoID: '1cwKcvOMq7I',
		previewSize: 'hd',              // use either this option...

		// Embed controls
		showInfo: false,
		showControls: true,
		loop: false,

		colorScheme: 'dark',
		showRelated: false,

		useFitVids: true,
		playerInfo: false
      });

    });
    
  })(jQuery);

