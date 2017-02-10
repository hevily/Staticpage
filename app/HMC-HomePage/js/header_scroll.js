$(function () {
		var slide = document.querySelector('.header-section');
		var header = document.querySelector('.hmc-header-nav');
		function browserRedirect() {
	        var sUserAgent = navigator.userAgent.toLowerCase();
	        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	        var bIsAndroid = sUserAgent.match(/android/i) == "android";
	        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
			//      document.writeln("您的浏览设备为：");
	        if ( bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
			//          document.writeln("phone");
	            return true ;
	        } else {
			//          document.writeln("pc");
				return false ;
	        }
	    }
		if( browserRedirect() ){
			slide.style.marginTop = header.offsetHeight+'px';
			header.setAttribute('class','navbar navbar-default navbar-fixed-top hmc-header-nav mobile');
			// cN = '';
		//	console.log('shouji')
		}
	


	window.onscroll = function(){
		var sTop = document.body.scrollTop ||  document.documentElement.scrollTop 
		// console.log(sTop)
		if( !browserRedirect()){
			HmcHeaderNav(sTop)
		}else{
			console.log('mobile')
		}
	}
	function HmcHeaderNav(sTop) {
		var nav = $('.hmc-header-nav'),
		sArea = $('.header-section')
		,sAreaH = sArea.height() - nav.height()
		if( sAreaH < sTop ){
			nav.addClass('scrollOut')
			console.log('out TImg')
		}else{
			nav.removeClass('scrollOut')
		}
	}

	// backtop
	$('.backtop-btn').click(function () {
		var sTop = document.body.scrollTop ||  document.documentElement.scrollTop,
			x	 = sTop
			setInterval(function () {
				x = parseInt(x/1.5);
				if(x <= 1 )return
				$(window).scrollTop(x);
			},80)
	})
})