$(function () {

	$.ajax({
		url:"./js/setting.json"
		,type:'get'
		,data_type:"json"
	}).done(function (data) {
		console.log(data)
		initPage(data)
	})

	function initPage(data) {
		function initHeader(data) {
			var data = data.home_icon;
			$('.home-icon').append('<img src="'+data+'"/>');
		}
		function initSlider(data) {
			var dom = $('.bg-slider');
			var data = data.slider,
			sliders = data.sliders,
			sliderinner ='',dots =''
			var fSClass = ' da-slide-toleft da-slide-fromright da-current',
				fDClass = 'da-dots-current'

			for (var i = 0;i <= sliders.length - 1; i++) {
				// console.log(sliders[i])
			if (i!== 0) {fSClass = "";fDClass = "";};
			if( sliders.length == 1){dom.find('.da-arrows').hide();dom.find('.da-dots').hide()}
			sliderinner += 	'<div class="slider-anima'+fSClass+'">'+
						'<div class="top-slider slider-one ">'+
							'<img src="'+sliders[i].left.src+'" alt="'+sliders[i].left.alt+'">'+
							'<img src="'+sliders[i].right.src+'"'+sliders[i].right.alt+'" >'+
						'</div></div>\n';

			dots += '<span class="'+fDClass+'"></span>';
			}

			// console.log(sliderinner)
			bgurl = "url('"+data.slider_bg+"')";
			$('.header').css("background-image",bgurl);
			
			
			dom.find('.da-slider').find('.slider-inner').append(sliderinner)
			dom.find('.da-dots').append(dots)
		}
		function initFooter(data) {
			var data = data.footer;
			var dom = $('.footer');
			var link = data.links,share = data.share_icon
			var links = ''
			for (var i = 0; i < link.length; i++) {
				// console.log(link[i])
				links += '<div class="footer-nav col-xs-4 col-sm-2 col-md-2 col-lg-2"><a href="'+link[i].link+'">'+link[i].name+'</a></div>';

			}
			linkdom = dom.find('.footer-navs');
			linkdom.append(links);

			var share_icons = '';
			for (var i = 0; i < share.length; i++) {
				var right = "right"
				if ((i+1)%2 === 0) {
					right = "left"
				}
				share_icons += '<div class="'+right+' wx col-xs-6 col-sm-6 col-md-6 col-lg-6 "><a href="'+share[i].link+'"><img src="'+share[i].icon+'"></a></div>';
			}
			shareDom = dom.find('.share-tool');
			shareDom.append(share_icons)
			
			var company_info = '<p>联系电话：'+data.contact_phone+'</p><p>联系邮箱：'+data.contact_email+'</p><div>'+data.record_info+'</div>';
			companyDom = dom.find('.contact-company');
			companyDom.append(company_info)
		}
		initHeader(data);
		initSlider(data);
		initFooter(data);
	}

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
		setTimeout(function () {
			goal.css('background-position',pos);
		},800)
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
			rightOut= 'da-slide-toright',
			timeoff = 1000;
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
			},timeoff)
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
				},timeoff)
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