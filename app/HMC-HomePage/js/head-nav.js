window.onload = function(){
	

	$('#service').carousel({
	  interval: 10000 
	});
	
	$('#cooperation').constructor({
		interval:3000
	});
	
	// 顶部导航滚动更改主题  base on js
	(function(){
		var slide = document.getElementById('service');
		var header = document.getElementById('header');
		var cN = 'stay-top';
	//	滚动监听处理
		window.onscroll = function(){
			checkNav()
			
			
		}
		function checkNav(){
			var sH = slide.offsetHeight,
				sTop = document.body.scrollTop
				headH = header.offsetHeight;
	//			console.log(sH+'|'+sTop+'|'+headH)
				dCN = ' navbar navbar-default navbar-fixed-top ';
			if(sTop > (sH - headH)){
				(sTop > sH) ? false : header.setAttribute('class',dCN);
			}else{
				header.setAttribute('class',dCN+cN);
			}
		}checkNav();
	}());
	
	// slide touch gallery width base on jq
	function touchSlide(container,item){
		var slide = container;
		var slide = $(slide);
		var items = slide.find(item);
		items.each(function(i,key){
			items[i].addEventListener('touchstart',touchStart);
			items[i].addEventListener('touchmove',touchMove);
			items[i].addEventListener('touchend',touchEnd);
		})
		
		var SX,SY,EX,EY;
		function touchStart(e){
			var touches = e.touches[0];
			SX = touches.pageX,SY = touches.pageY;
//			console.log('touch-Start'+SX+"|"+SY);
		}
		function touchMove(e){
			var touches = e.touches[0] ;
			CX = touches.pageX,CY = touches.pageY;
//			console.log('touch-move'+CX+'|'+CY)
		}
		function touchEnd(e){
			var offset = 60;
			var LX = CX?CX:0;
			if(LX - SX > offset ){
				$('.carousel').carousel('prev')
//				console.log('向右划'+CX+'-'+SX);
			}else if(LX - SX < (-offset)){
				$('.carousel').carousel('next')
//				console.log('向左滑'+CX+'-'+SX)
			}
		}
	}
	
	touchSlide('#service','.item');
	
//	cooperation slide
	touchSlide('#cooperation','.item');
	

	
}
