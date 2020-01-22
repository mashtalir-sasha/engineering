$(function() {

	// Скролинг по якорям
	$('.anchor').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-63 // отступ от меню
		}, 500);
	e.preventDefault();
	});

	// Меню при скроле
	$(window).scroll(function(){
		var topline = $(window).scrollTop();
		if ( topline > 150 ) {
			$(".nav-fixed").addClass('show');
		} else {
			$(".nav-fixed").removeClass('show');
		};
	});

	// Клик по гамбургеру на моб версии
	$('.nav-mobile__link').click(function() {
		$('.nav-mob').toggleClass('show');
	});
	$('.nav-mob .nav-list__item').click(function() {
		$('.nav-mob').removeClass('show');
	});

	// Отправка формы
	$('form').submit(function() {
		var formlink = $(this).find("input[name='link']").val();
		var data = $(this).serialize();
		data += '&ajax-request=true';
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			dataType: 'json',
			data: data,
			success: (function() {
				if (!formlink) {
					$.fancybox.close();
					$.fancybox.open({src:'#thn'});

					$('form').find("input[name='name']").val('');
					$('form').find("input[name='phone']").val('');
					$('form').find("input[name='part']").val('');
					$('form').find("input[name='brand']").val('');
					$('form').find("input[name='city']").val('');
				} else {
					window.open(formlink, "_blank");
					console.log(formlink);

					$.fancybox.close();
					$.fancybox.open({src:'#thn'});
					
					$('form').find("input[name='name']").val('');
					$('form').find("input[name='phone']").val('');
					$('form').find("input[name='part']").val('');
					$('form').find("input[name='brand']").val('');
					$('form').find("input[name='city']").val('');
				}
			})()
		});
		return false;
	});

	// Инит фансибокса
	$('.fancybox').fancybox({
		margin: 0,
		padding: 0,
		beforeClose: function() {
			$('.modal form').find("input[name='link']").val('');
		}
	});

	$('.formLink').click(function() {
		var link = $(this).data('link');
		$('.modal form').find("input[name='link']").val(link);
	});

	// Функция для анимации
	$(".scroll").each(function () {
		var block = $(this);
		$(window).scroll(function() {
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				var top = block.offset().top-400;
			} else {
				var top = block.offset().top+400;
			}
			var bottom = block.height()+top;
			top = top - $(window).height();
			var scroll_top = $(this).scrollTop();
			if ((scroll_top > top) && (scroll_top < bottom)) {
				if (!block.hasClass("animated")) {
					block.addClass("animated");
					block.trigger('animatedIn');
				}
			}
		});
	});

	$(window).on('load', function() {
		$('.nav-bg, .head-ttl, .head-bg').addClass('animated');
	});

	// Инит слайдера Slick
	$('.reviews-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.catalog-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		adaptiveHeight: true
	});

	$('.parts-list__item').click(function() {
		$('.parts-slider').slick('unslick');
		$('.parts-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			adaptiveHeight: true
		});
	});

	$('.parts-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		adaptiveHeight: true
	});

	$('.brands-item__btn').hover(
		function() {
			var parent = $(this).parent();
			parent.find('.brands-item').addClass('show');
		}, function() {
			$('.brands-item').removeClass('show');
		}
	);

	$('.parts-list').on('click', 'li:not(.active)', function() {
	$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('.parts').find('.parts-tab').removeClass('active').eq($(this).index()).addClass('active');
	});

});
