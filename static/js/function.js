(function ($) {
	"use strict";

	var $window = $(window);
	var $body = $('body');

	/* Preloader Effect */
	$window.on("load", function () {
		$(".preloader").fadeOut(1000);
		add_sticky_class();
	});

	/* Sticky header */
	$window.scroll(function () {
		add_sticky_class();
	});

	function add_sticky_class() {
		if ($window.scrollTop() > 100) {
			$('.header-layout-1').addClass('sticky-header');
		} else {
			$('.header-layout-1').removeClass('sticky-header');
		}
	}

	/* Top Menu */
	$('nav').coreNavigation({
		menuPosition: 'right',
		mode: 'fixed',
		container: true,
		dataMinusOffset: 70
	});

	/* Scroll to section */
	$(document).on('click', '.smoothscroll', function () {

		if ($(this).hasClass("has-popup")) return false;
		var id = $(this).attr('href');
		if ($(id).length) {
			var h = parseFloat($(id).offset().top);
			$('body,html').stop().animate({
				scrollTop: h - 70
			}, 800);
			return false;
		}

	});


	/* Portfolio (filtering) */
	$window.on("load", function () {
		if ($(".portfolio-boxes").length) {

			/* Init Isotope */
			var $portfolio = $(".portfolio-boxes").isotope({
				itemSelector: ".portfolio-box",
				layoutMode: "masonry",
				masonry: {
					// use outer width of grid-sizer for columnWidth
					columnWidth: 1,
				}
			});

			/* Filter items on click */
			var $portfolionav = $(".portfolio-nav li a");
			$portfolionav.on('click', function (e) {

				var filterValue = $(this).attr('data-filter');
				$portfolio.isotope({
					filter: filterValue
				});

				$portfolionav.removeClass("active-portfolio");
				$(this).addClass("active-portfolio");
				e.preventDefault();
			});

			$portfolio.isotope({ filter: "*" });
		}

	});

	/* Animated Header Slider Start */
	if ($('.swiper-container.banner-slider-1').length) {
		var swiperAnimation = new SwiperAnimation();
		var coverSwiper = new Swiper('.swiper-container.banner-slider-1', {
			effect: 'fade',
			speed: 2000,
			loop: true, // 循环模式选项
			autoplay: {
				delay: 6000
			}
		});

		var screenShotSwiper = new Swiper('.screenShotSwiper', {
			slidesPerView: 1,
			spaceBetween: 30,
			keyboard: {
				enabled: true,
			},
			loop: true,
			autoplay: {
				delay: 6000
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}

	/* Parallaxie js */
	var $parallaxie = $('.parallaxie');
	if ($parallaxie.length) {
		if ($(window).width() > 768) {
			$parallaxie.parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}

})(jQuery);