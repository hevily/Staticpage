window.onload = function(){
	

	$('#service').carousel({
	  	interval: 5000 
	});
	
	$('#cooperation').carousel({
		interval:3000
	});
	
	// 顶部导航滚动更改主题  base on js
	(function(){
		var slide = document.getElementById('service');
		var header = document.getElementById('header');
		var cN = 'stay-top';
	//	滚动监听处理
		window.onscroll = function(){
			var sTop = document.body.scrollTop
			checkNav(sTop)
			checkFilm(sTop)
			
		}
		function checkNav(sTop){
			var sH = slide.offsetHeight,
				sTop = document.body.scrollTop,
				headH = header.offsetHeight,
				dCN = ' navbar navbar-default navbar-fixed-top ';
//				console.log(sTop+'|'+sH+'|'+headH)
			if(sTop > (sH - headH)){
				header.setAttribute('class',dCN);
			}else{
				header.setAttribute('class',dCN+cN);
			}
		}checkNav();
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
