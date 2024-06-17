
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){

		$(window).on('load', function() {
			$('.loader').fadeOut();
			$('.preloader').delay(350).fadeOut('slow');
		});
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce",
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing",
			openedSymbol: "&#9660;",
			closedSymbol: "&#9658;" 	
		});
		
		if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});		  	

		$('.video-play').magnificPopup({
            type: 'iframe'
        });

		$('.partner').owlCarousel({
		  autoPlay: 3000,
		  items : 5,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});

		$("#testimonial-slider").owlCarousel({
		   items:1,
			itemsDesktop:[1000,1],
			itemsDesktopSmall:[980,1],
			itemsTablet:[768,1],
			itemsMobile:[650,1],
			pagination:true,
			navigation:true,
			navigationText:["",""],
			slideSpeed:1000,
			autoPlay:false
		});
			
	}); 		
	

	  new WOW().init();
			
})(jQuery);


  

