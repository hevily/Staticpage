
$(function () {
	// 首屏背景图
	(function () {
		var all = 7,
		current = Math.ceil(Math.random() * 7 ),
		dir = 'url(../img/page1/'+current+'.jpg)',
		goal = $('.page-one').find('.random-img');
		goal.css('background-image',dir)
	})()
	// 监测设备类型
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
     	// document.writeln("您的浏览设备为：");
        if ( bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        // document.writeln("phone");
            return true ;
        } else {
        // document.writeln("pc");
			return false ;
        }
    }

    if (browserRedirect()) {
    	console.log('mobile device');
    	$('.fullpage').find('.special-page').addClass('mobile fp-auto-height')
    }
    var HP = $('#HomePage');
    // init fullpage
	$('#HomePage').fullpage({
		navigation: true,
		scrollOverflow:true,
		// verticalCentered:false,
		// anchors:['page1','page2','page3','page4','page5','page6'],
		onLeave:function (index,nextIndex,direction) {
			HP.find('.page').eq(index-1).trigger('onLeave');
		},
		afterLoad:function (anchorLink,index) {
			controlNav(index)
			HP.find('.page').eq(index-1).trigger('afterLoad');
		}
	})

	// trigger page
	HP.find('.page').on('onLeave',function(){
		var _this = $(this);
		var index = _this.index();
		console.log(index+'离开');
		// _this.fadeOut(200);
	})
	HP.find('.page').on('afterLoad',function(){
		var _this = $(this);
		var index = _this.index();
		console.log(index+'进入完成');
		// _this.fadeIn(200);
	})

	// 首屏点击进入第二屏
	$('.next-page').click(function () {
		$.fn.fullpage.moveTo(2);
	})
	// 切换右侧导航标点
	function controlNav(page) {
		if(page == 1){
			$('#fp-nav').hide()

		}else{
			$("#fp-nav").show()
		}
		// console.log(page)
	}

})