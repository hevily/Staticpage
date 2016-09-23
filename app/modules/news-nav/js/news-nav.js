// JavaScript Document
$(function () {

			// 配置popover 弹层动画 出现位置 添加内容 弹层父容器
			var settings = {
					trigger:'click',
					padding:true,
					placement:"bottom",
					delay:{ show: 500, hide: 100 }
			};
			$('.news-list.news-addr').webuiPopover('destroy').webuiPopover(settings);

			// 标签 高亮状态切换
			$('.news-list').click(function (e) {
					e.stopPropagation();
					var _this = $(this);
				  	if (_this.hasClass('hide-addr')) {
						$('.news-list.news-addr').webuiPopover('hide');
				  	}else if(_this.hasClass('news-addr')){
				  			$('.news-list.news-addr').webuiPopover('hide');
				  		if(_this.hasClass('active')){
				  			$('.news-list.news-addr').webuiPopover('show')
				  		}
				  	}
				  	$('.active').removeClass('active');
				  	_this.addClass('active');

				// control mask
					var popOver = $('.webui-popover'),newsMask = $('.news-navbar-mask'),
						style = popOver.css('display')
						// console.log(style)
						if (style == "block") {
							$('body').addClass('showing-mask');
							newsMask.css('display','block');
						}else{
							newsMask.css('display','none');
							$('body').removeClass('showing-mask');
						}
					popOver.css('top',"30px")
			})
					$(".news-navbar-mask").click(function () {
						hideMask()
					})

				// switch secend nav content
				$('body').on('click','.news-addr-target',function () {
					var _this = $(this),
						goal = $('.news-list.news-addr').find('span'),
						txt = _this.text();
					goal.text(txt);
					hideMask()
				})
				function hideMask() {
						$('.news-list.news-addr').webuiPopover('hide');
						$('.news-navbar-mask').css('display','none');
						$('body').removeClass('showing-mask');
				}
		})