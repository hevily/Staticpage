/**
 * 触摸屏滑动监听
 * 初始化Touch 实例 , 向上滑动超过600毫秒并且滑动距离>=1/6才会触发
new Touch({
	dom: window,
	callback: function(){
		if ($(window).scrollTop() == $(document).height() - $(window).height()){
	    	loading();
			loadMore(9);
	    }
	}
});
 */

if(!(Touch && Touch.prototype.bindDOM)) {

//构造函数
function Touch(opts) {
	//构造函数需要的参数
	this.wrap = opts.dom;
	this.callback = opts.callback;
	//构造三步奏
	this.init();
	this.bindDOM();
}

//第一步 -- 初始化
Touch.prototype.init = function() {
	//设定窗口比率
	this.radio = window.innerHeight / window.innerWidth;
	//设定一页的宽度
	this.scaleW = window.innerWidth;
	this.scaleH = window.innerHeight;
};

//第三步 -- 绑定 DOM 事件
Touch.prototype.bindDOM = function() {
	var self = this;
	var scaleW = self.scaleW;
	var scaleH = self.scaleH;
	var outer = self.wrap;

	//手指按下的处理事件
	var startHandler = function(evt) {

		//记录刚刚开始按下的时间
		self.startTime = new Date() * 1;

		//记录手指按下的坐标
		self.startX = evt.touches[0].pageX;
		self.startY = evt.touches[0].pageY;

		//清除偏移量
		self.offsetX = 0;
		self.offsetY = 0;

		//事件对象

		var target = evt.target;
		while (target && target.nodeName != 'LI' && target.nodeName != 'BODY') {
			target = target.parentNode;
		}

		self.target = target;

	};

	//手指移动的处理事件
	var moveHandler = function(evt) {
		//兼容chrome android，阻止浏览器默认行为
//		evt.preventDefault();

		//计算手指的偏移量
		self.offsetX = evt.targetTouches[0].pageX - self.startX;
		self.offsetY = evt.targetTouches[0].pageY - self.startY;

	};

	//手指抬起的处理事件
	var endHandler = function(evt) {
//		evt.preventDefault();

		//边界就翻页值
		var boundaryW = scaleW / 6;
		var boundaryH = scaleH / 6;
		//手指抬起的时间值
		var endTime = new Date() * 1;

		//当手指移动时间超过300ms 的时候，按位移算
		if (endTime - self.startTime > 300) {
			if (self.offsetY <= -boundaryH) {
				self.callback();
			}
		}
	};

	//绑定事件
	outer.addEventListener('touchstart', startHandler);
	outer.addEventListener('touchmove', moveHandler);
	outer.addEventListener('touchend', endHandler);
};

}