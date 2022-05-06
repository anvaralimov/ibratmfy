jQuery(function($){
	
	$('.navbar button.srch').click(function(){
		$(this).toggleClass('active');
		$('.navbar form').toggleClass('active');
	});
	$('.navbar button.btn').click(function(){
		$(this).toggleClass('active');
		$('.navbar ul.menu').toggleClass('active');
	});
	
	
$('button.navbar-toggler').click(function(){
  $('body').toggleClass('no-scroll');
});
	 $('.slide_gal').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.slide_nav'
    });
    $('.slide_nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slide_gal',
      dots: false,
      nav:false,
      arrows:false,
      centerMode: true,
      focusOnSelect: true,
    });	
    $('.partner_list').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows:false,
      dots:false,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    });     
    $('.links_list').slick({
			slidesToShow: 4,
      dots:true,
			arrows:false,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesPerRow: 2,
					rows: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesPerRow:2 ,
					rows: 2,
        }
      }
    ]
    }); 
    $('.parts_slider').slick({
			slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      fade: true,
      dots:false,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    }); 
    $('.photo_list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
			autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
    });
    $('.slider_list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
			autoplay: true,
      autoplaySpeed: 2000,
			dots:true,
      fade: true,
    });
    $('.doma_list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
    });
    $('.mag_list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
    });
});
$(window).on('scroll', function (event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 290) {
        $('nav.navbar').addClass('affix');
    } else{
        $('nav.navbar').removeClass('affix');
    }
});