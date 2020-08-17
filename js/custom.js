$(function () {

	$(window).scroll(function () {
		var scrollAmount = $(window).scrollTop();
		if (scrollAmount > 150) {
			$(".sticky").addClass("sticky_active");
		} else {
			$(".sticky").removeClass("sticky_active");
			$(".side_menu").removeClass("side_menu_active");
		}
	});
	$(".s_m_botton").click(function () {
		$(".side_menu").toggleClass("side_menu_active");
		$(".icon_open").toggleClass("i_open");
		$(".icon_close").toggleClass("i_close");
	});

	$(".slide_wrap").slick({
		arrows: true,
		nextArrow: ".right_btn",
		prevArrow: ".left_btn",
		autoplay: true,
		autoplaySpeed: 3000,
		dots:true,
		
	});



});
