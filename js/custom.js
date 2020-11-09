/*--------------------- Copyright (c) 2018 -----------------------
[Master Javascript]

Project: Rugby Responsive HTML Template
Version: 1.0.0
Assigned to: TemplateBundle
-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var Rugby = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-------------- Rugby Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.RTL();
            this.Menu();
			this.Search();
            this.Togglemenu();
			this.Team_slider();
			this.Counter();
			this.Match_slider();
			this.Gallery();
			this.Test_slider();
			this.Timeline_video();
			this.Timeline_slider();
			this.Sorting();
        },
        /*-------------- Rugby Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        RTL: function() {
            var rtl_attr = $("html").attr('dir');
            if (rtl_attr) {
                $('html').find('body').addClass("rtl");
            }
        },
        // Menu		
        Menu: function() {
            $('.sub-menu').parent().hover(function() {
                var menu = $(this).find("ul");
                var menupos = $(menu).offset();

                if (menupos.left + menu.width() > $(window).width()) {
                    var newpos = -$(menu).width();
                    menu.css({
                        left: newpos
                    });
                }
            });
        },
		// Search
        Search: function() {
			$('.rb_search').on('click',function(){
				$('.rb_search_area').addClass('open_search');
				
			});
			$('.srch_close_btn').on('click',function(){
				$('.rb_search_area').removeClass('open_search');
				
			});
			
		},
        // Toggle Menu
        Togglemenu: function() {
            $(".rb_menu_btn").on('click', function() {
                $(".rb_menu_wrapper").toggleClass('open_menu');
            });
            $(".menu_cross").on('click', function() {
                $(".rb_menu_wrapper").removeClass('open_menu');
            });
            $('.rb_menu ul li.dropdown').children('a').append(function() {
                return '<div class="dropdown-expander"><i class="fa fa-caret-down"></i></div>';
            });
            $(".rb_menu ul > li:has(ul) > a").on('click', function(e) {
                var w = window.innerWidth;
                if (w <= 991) {
                    e.preventDefault();
                    $(this).parent('.rb_menu ul li').children('ul.sub-menu').slideToggle();
                }
            });
        },

		// Team Slider
		Team_slider: function() {
			$(".rb_team_slider").slick({
				autoplay:false,
				autoplaySpeed:10000,
				speed:600,
				slidesToShow:2,
				slidesToScroll:2,
				pauseOnHover:false,
				dots:false,
				arrows : true,
				customPaging:30,
			   // fade:true,
				draggable:true,
				nextArrow: '<span class="slider_arrow"><i class="fa fa-caret-left" aria-hidden="true"></i></span>',
				prevArrow: '<span class="slider_arrow1"><i class="fa fa-caret-right" aria-hidden="true"></i></span>',
				responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			  ]
			  });			
		},
		// Counter
        Counter: function() {
            if ($('.rb_count_box').length > 0) {
                $('.rb_count_box').appear(function() {
                    $('.count-no').countTo();
                });
            }
        },
		// match Slider
		Match_slider: function(){
			  $('.rb_match_slider').slick({
				dots: false,
				vertical: true,
				slidesToShow: 1,
				verticalSwiping: true,
				autoplay:true,
				speed: 3000,
				autoplaySpeed: 1000,
				arrows:false,
			  });

    },
	//Gallery
        Gallery: function() {
            $('.rb_gallery_wrapper').magnificPopup({
                delegate: 'a.fa-search',
                type: 'image',
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true,
                },
                zoom: {
                    enabled: true,
                    duration: 400,
                    easing: 'ease-in-out',
                    opener: function(openerElement) {
                        return openerElement.is('a') ? openerElement : openerElement.find('img');
                    }
                },
            });
        },
		
	// Testimonial Slider
		Test_slider: function(){
			  $('.rb_test_slider').slick({
				dots: false,
				slidesToShow: 1,
				verticalSwiping: true,
				autoplay:true,
				speed: 3000,
				autoplaySpeed: 1000,
				arrows:false,
				fade: true,
			  });
		},
		
		// Timeline Video
		Timeline_video: function(){
		$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
			
		},
		
		// Timeline Slider
		Timeline_slider: function(){
			  $('.timeline_slider').slick({
				dots: false,
				slidesToShow: 1,
				loop: true,
				horizontalSwiping: true,
				autoplay:true,
				speed: 12000,
				autoplaySpeed: 1000,
				arrows:false,
			  });
		},
		
		
		// Portfolio Sorting
        Sorting: function() {
            if ($('.rb_port_list ul li a').length > 0) {
                $(".rb_port_list ul li a").on("click", function(e) {
                    e.preventDefault();
                });
                $('#portfolio').mixItUp();

            }
        },
		
		
	};
	
    $(document).ready(function() {
		 if ($('.rb_banner_wrapper').length > 0) {
		var scene = document.getElementById('js-scene');
		 var parallax = new Parallax(scene);
		 
		 }
		
		
        Rugby.init();
    });
    // Preloader Js
    jQuery(window).on('load', function() {
		
        setTimeout(function () { 
		  $('body').addClass('loaded');
		  
		}, 500);
    });

    // Window Scroll
    $(window).scroll(function() {
        var wh = window.innerWidth;
        //Go to top
        if ($(this).scrollTop() > 200) {
            $('.gotop').addClass('goto');
        } else {
            $('.gotop').removeClass('goto');
        }
		

    });
    $(".gotop").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false
    });



})(jQuery);


