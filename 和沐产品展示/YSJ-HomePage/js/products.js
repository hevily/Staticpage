$(function(){
	
	// 顶部导航滚动更改主题  base on js
	(function(){
		var slide = document.getElementById('service');
		var header = document.getElementById('header');
		var cN = 'stay-top';
		var Doms = $('.module');
		
		
	//	滚动监听处理
		window.onscroll = function(){
			var sTop = document.body.scrollTop ||  document.documentElement.scrollTop 
//			checkNav(sTop)
			console.log('head')
			check(Doms)
		}
		function checkNav(sTop){
			var sH = slide.offsetHeight,
				sTop = document.body.scrollTop || document.documentElement.scrollTop,
				headH = header.offsetHeight,
				dCN = ' navbar navbar-default navbar-fixed-top ';
				console.log(sTop+'|'+sH+'|'+headH)
			if(sTop > (sH - headH)){
				header.setAttribute('class',dCN);
			}else{
				header.setAttribute('class',dCN+cN);
			}
		}
//		checkNav();
		function checkFilm(sTop){
			var goal = document.getElementById('film'),
				gH = goal.offsetHeight;
			var oT = goal.offsetTop;
			var img1 = document.getElementById('img1'),
				img2 = document.getElementById('img2'),
				img3 = document.getElementById('img3')
				
//			console.log(oT+"--"+sTop);
			if(sTop > (oT - gH)){
				img1.setAttribute('class','film-img film-img-1 animated bounceInUp show');
				img2.setAttribute('class','film-img film-img-2 animated bounceInDown show');
				img3.setAttribute('class','film-img film-img-3 animated bounceInRight show')
			}else{
				img1.setAttribute('class','film-img film-img-1 animated hide');
				img2.setAttribute('class','film-img film-img-2 animated hide');
				img3.setAttribute('class','film-img film-img-3 animated hide');
			}
			
		}
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
			header.setAttribute('class','navbar navbar-default navbar-fixed-top phone');
			cN = '';
	//	console.log('shouji') 
		}
		
		function isVisible (Dom) {
			var o = $(Dom);
			var of = o.offset();
			var w = $(window);
//			滚动距离+屏幕高度 小于目标顶部定位 在下部未冒头
			if((w.scrollTop() + w.height()) > (of.top+(o.outerHeight())- 100)){
				console.log('进入')
				return true;
//				console.log(o)
	//			滚动距离大于 目标顶部定位+自身高度 在上部未下落&&超出屏幕
				if(w.scrollTop() > (of.top + o.outerHeight())){
					alert('超出屏幕')
				}
				
			}
			
			
		}
		
		function check(Array){
			var className = 'showed'
			$.each(Array, function(key,value) {
//					console.log(value)
				if(!$(value).hasClass(className)){
						console.log('first-see')
					if(isVisible(value)){
							console.log(value);
						$(value).addClass(className);
					}
				}
				
			});
		}check(Doms)
		
	}());
})
