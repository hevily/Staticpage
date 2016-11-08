//base on jQuery
var domvisiabled = function(Doms){
	var Doms = Doms;		
//	滚动监听处理
	window.onscroll = function(){
		var sTop = document.body.scrollTop ||  document.documentElement.scrollTop ;
		check(Doms)
	}
	
	function isVisible (Dom) {
		var o = $(Dom);
		var of = o.offset();
		var w = $(window);
//			滚动距离+屏幕高度 小于目标顶部定位 在下部未冒头
		if((w.scrollTop() + w.height()) > (of.top+(o.outerHeight())- 100)){
//			console.log('进入')
			return true;
//				console.log(o)
//			滚动距离大于 目标顶部定位+自身高度 在上部未下落&&超出屏幕
			if(w.scrollTop() > (of.top + o.outerHeight())){
				console.log('超出屏幕')
			}
		}
	}
	
	function check(Array){
		var className = 'showed'
		$.each(Array, function(key,value) {
			if(!$(value).hasClass(className)){
//					console.log('first-see')
				if(isVisible(value)){
					$(value).addClass(className);
				}
			}
		});
	}check(Doms)
};