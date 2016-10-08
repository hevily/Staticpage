$(function () {
	function changeBg(_this,goal,dir) {
			var goal = $(goal),
			right = false,
			times = goal.attr('times')?goal.attr('times'):0;
		if (_this.hasClass('da-arrows')) {
			if (_this.hasClass('da-arrows-next')) {right = true;}
		}else{
			right = dir;
		}
		right?
		goal.attr({'times':++times}):
		goal.attr({'times':--times});
		var pos = times*50 + '%' +' 0%';
		goal.css('background-position',pos);
		return right;
	}
	$('.da-arrows-prev,.da-arrows-next').click(function () {
		var _this = $(this),goal = '.header',
			userdir = right,
		// changeBg(_this,goal);
		right = changeBg(_this,goal);
		slide('.da-slider',right,userdir)
		changeNav(curIndex)
	});

	function slide(elem,right,userdir) {
		var leftin = 'da-slide-fromleft',
			rightin= 'da-slide-fromright',
			// out
			leftOut= 'da-slide-toleft',
			rightOut= 'da-slide-toright';
		var curItem = $('.da-current'),
			items = $(elem).find('.slider-anima'),
			dClass = 'slider-anima'
			curIndex = curItem.index()+1,
			pre = curIndex -1 ,next = curIndex +1
		if(right){
			if (curIndex == 1) {
				pre = 0;
			}else if(curIndex == items.length - 1){
				next = 0;
			}else if(curIndex == items.length){
				curIndex = 0;
				pre = items.length -1;
				next = 1;
			}
			items.eq(pre).removeClass(rightin+' '+rightOut+' '+leftin).addClass(leftOut)
			setTimeout(function () {
				items.eq(curIndex).addClass(rightin+" "+leftOut)
				$('.da-current').removeClass('da-current')
				items.eq(curIndex).addClass('da-current')
			},1600)
		}else{
			// leftin
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
				items.eq(pre).removeClass(leftin+' '+leftOut+' '+rightin).addClass(rightOut)
				setTimeout(function () {
					items.eq(curIndex).addClass(leftin+" "+rightOut)
					$('.da-current').removeClass('da-current')
					items.eq(curIndex).addClass('da-current')
				},1600)
		}
	}
	function changeNav(index) {
		var navs = $('.da-dots').find('span'),classname='da-dots-current'
		$('.'+classname).removeClass(classname);
		navs.eq(index).addClass(classname);
	}
	function navChange(index) {
		var sliders = $('.da-slider').find('.slider-anima');
		$('.da-current').removeClass('da-current');
		sliders.eq(index).addClass('da-current');
	}
	function removeClass(classname,time) {
		if (time == ''|| time == 'undefined' ) {
			time =1000;
		}
		setTimeout(function () {
			$('.'+classname).removeClass(classname);
		},time)
	}
	function dotSlide(oIndex,cIndex,right) {

		var leftin = 'da-slide-fromleft',
			rightin= 'da-slide-fromright',
			// out
			leftOut= 'da-slide-toleft',
			rightOut= 'da-slide-toright';
		var curItem = $('.da-current'),
			items = $('.da-slider').find('.slider-anima'),
			dClass = 'slider-anima',
			curIndex = cIndex,
			pre = oIndex
		if(right){
			items.eq(pre).removeClass(rightin+' '+rightOut+' '+leftin).addClass(leftOut)
			setTimeout(function () {
				items.eq(curIndex).addClass(rightin+" "+leftOut)
				$('.da-current').removeClass('da-current')
				items.eq(curIndex).addClass('da-current')
			},1600)
		}else{
			items.eq(pre).removeClass(leftin+' '+leftOut+' '+rightin).addClass(rightOut)
			setTimeout(function () {
				items.eq(curIndex).addClass(leftin+" "+rightOut)
				$('.da-current').removeClass('da-current')
				items.eq(curIndex).addClass('da-current')
			},1600)
		}
	}

	$('.da-dots span').click(function () {
		var oIndex = $('.da-dots-current').index(),right = false,
			cIndex = $(this).index();
		oIndex - cIndex > 0 ?
			right = false:
			right = true;
		var _this = $(this),goal = '.header'
		right = changeBg(_this,goal,right);
		changeNav(cIndex)
		dotSlide(oIndex,cIndex,right)
	})

})