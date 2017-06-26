$(function () {
	//展开评论框
	$('.newsfeed-replay-btn').click(function () {
		var tPoint = $(this).closest('.newsfeed-action-btn').next('.newsfeed-replay');
		tPoint.find('.text').toggle()
		tPoint.find('.text').next('a').toggle()
	})
	//点赞
	$('.newsfeed-praise').click(function () {
		$(this).toggleClass('praising');
	})
	function renderImgNum(goal,num) {
		$(goal).find('li:nth-child(9)').append('<span>+'+num+'</span>')
	}
	renderImgNum('.img-box.three-more .img-center-box',9)

	// bdShare module
		// var pic = document.getElementById('img').getAttribute('src');
		window._bd_share_config={
			common : {
				//此处放置通用设置
				bdPic:[11]
			}
			,share : [
				//此处放置分享按钮设置
				{bdCustomStyle:"../css/bdshare.css"}
			]
		}
		with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
})