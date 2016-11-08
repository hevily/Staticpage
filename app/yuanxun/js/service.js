//services
$(function(){
	$(".serBox").hover(
	  function () {
		 $(this).children().stop(false,true);
		 $(this).children(".serBoxOn").fadeIn("slow");
	     $(this).children(".pic1").animate({right: -110},400);
	     $(this).children(".pic2").animate({left: 75},400);
	     $(this).children(".txt1").animate({left: -260},400);
	     $(this).children(".txt2").animate({right: 10},400);	 
		 }, 
	  function () {
		 $(this).children().stop(false,true);
		 $(this).children(".serBoxOn").fadeOut("slow");
		 $(this).children(".pic1").animate({right:75},400);
	     $(this).children(".pic2").animate({left: -110},400);
	     $(this).children(".txt1").animate({left: 10},400);
	     $(this).children(".txt2").animate({right: -260},400);	
	  }
	);
	// navbar jump link
	$('.navbar-nav').find('a').click(function(){
		var _this = $(this);
		var href = _this.attr('href');
		if(href != '#' || href != 'javascript:;'){
			window.location.href = href;
		}
	})

})
