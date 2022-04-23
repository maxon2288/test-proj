
$(document).ready(function () {
	$("body").css({'visibility': "visible", "opacity": "1"});
	$(".cont-open").click(function() {
		$('html').addClass('no-scroll');
		$(".cont__left, .cont__left-overlay").addClass("active")
	});
	$(".cont-close, .cont__left-overlay").click(function() {
		$('html').removeClass('no-scroll');
		$(".cont__left, .cont__left-overlay").removeClass("active")
	});
	
	$(".m-bg-cont").each(function() {
		var img = $(this).find("img:first-of-type").attr("src");
		$(this).css("background-image", "url(" + img + ")");
	});
	 
});