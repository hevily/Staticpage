	// Swticher Cookie Base
	/**
	* Styleswitch stylesheet switcher built on jQuery
	* Under an Attribution, Share Alike License
	* By Kelvin Luck ( http://www.kelvinluck.com/ )
	* Thanks for permission! 
	**/
	(function($)
	{
		$(document).ready(function() {
			$('.styleswitch').click(function()
			{
				switchStylestyle(this.getAttribute("rel"));
				return false;
			});
			var c = readCookie('style');
			if (c) switchStylestyle(c);
		});
	
		function switchStylestyle(styleName)
		{
			$('link[rel*=style][title]').each(function(i) 
			{
				this.disabled = true;
				if (this.getAttribute('title') == styleName) this.disabled = false;
			});
			createCookie('style', styleName, 365);
		}
	})(jQuery);
	
	function createCookie(name,value,days)
	{
		if (days)
		{
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
	function readCookie(name)
	{
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++)
		{
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	function eraseCookie(name)
	{
		createCookie(name,"",-1);
	}
	(function($){
		$(document).ready(function() {
			// DEMO Swticher Base
			jQuery('.demo_changer .demo-icon').click(function(){
				if(jQuery('.demo_changer').hasClass("active")){
					jQuery('.demo_changer').animate({"left":"-400px"},function(){
						jQuery('.demo_changer').toggleClass("active");
					});
				}else{
					jQuery('.demo_changer').animate({"left":"0px"},function(){
						jQuery('.demo_changer').toggleClass("active");
					});			
				} 
			});
			$(document).click(function(e){
				if ($('.demo_changer').has(e.target).length === 0) {
					jQuery('.demo_changer').animate({"left":"-400px"},function(){
						jQuery('.demo_changer').removeClass("active");
					});
				}
			});
		});
	})(jQuery);
	
	