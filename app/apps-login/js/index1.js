$(function () {
	function changeBg(_this,goal) {
		var goal = $(goal),
		right = false,
		times = goal.attr('times')?goal.attr('times'):0;
		if (_this.hasClass('glyphicon-chevron-right')) {right = true;}
		right?
		goal.attr({'times':++times}):
		goal.attr({'times':--times});
		var pos = times*50 + '%' +' 0%';
		goal.css('background-position',pos);
	}
	$('.glyphicon-chevron-right,.glyphicon-chevron-left').click(function () {
		var _this = $(this),goal = '.header'
		changeBg(_this,goal);
	});

	$('#arousel-generic').carousel({
		interval: 2000
	})
	$('#carousel-generic1').on('slide.bs.carousel', function (direction) {
		dir = direction.direction == 'left'?'left':'right' ;
		console.log(dir)
		// hmcmall-slide-fromleft
		// hmcmall-slide-fromright
		// 
		var leftin = 'hmcmall-slide-fromleft',
			rightin= 'hmcmall-slide-fromright',
			// out
			leftOut= 'hmcmall-slide-toleft',
			rightOut= 'hmcmall-slide-toright';
		var curItem = $('.active'),
			items = $('.carousel-inner').find('.item'),
			dClass = 'item'
			// dClass = 'transition-box container trans-two'
			curIndex = curItem.index()+1,
			pre = curIndex -1 ,next = curIndex +1


		if(dir == 'left' ){
			if (curIndex == 1) {
				pre = 0;
			}else if(curIndex == items.length - 1){
				next = 0;
			}else if(curIndex == items.length){
				curIndex = 0;
				pre = items.length -1;
				next = 1;
			}


			items.eq(pre).attr('class',dClass + ' '+ leftOut)
			removeClass(leftOut,2000)

			items.eq(curIndex).addClass(rightin)
			removeClass(rightin,2000)
		}else{
			console.log('right-dir')
			curIndex -= 2;
			pre = curIndex +1 
			next = curIndex -1
			if (curIndex == -1) {
				console.log('last-one')
				curIndex = items.length -1;
				pre = 0;
				next = items.length -2;
			}else if(curIndex == 0){
				pre = 1;
				next = items.length -1;
			}

			console.log(pre+'^curIndex:'+curIndex+'^'+next);

			items.eq(pre).attr('class',dClass+' '+ rightOut)
			removeClass(rightOut,2000)

			items.eq(curIndex).addClass(leftin)
			removeClass(leftin,2000)
		}
		function removeClass(classname,time) {
			if (time == ''|| time == 'undefined' ) {
				time =1000;
			}
			setTimeout(function () {
				$('.'+classname).removeClass(classname);
			},time)
		}


	})
})