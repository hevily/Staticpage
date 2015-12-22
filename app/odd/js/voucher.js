$(document).ready(function(){
	$(".select li").click(function() {
		if (!$(this).hasClass("nav-open")) {
			$(".nav-open").removeClass('nav-open');
			$(this).addClass('nav-open');
			$(".show-area").hide().eq($(this).index()).show().addClass('nav-open');
		}
		// console.log($(this).index());
	});
})