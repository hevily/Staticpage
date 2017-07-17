$(function () {
	(function renderChatArea() {
		var area = $('.scroll-area')
			charHeader = $('.chat-header')
			topArea = $('.chat-body-top')
			winHeight = $(window).height()
			winWidth  = $(window).width()
		var send = $('.send')
			receive = $('.receive')
			sendBox = send.find('.media .media .media-body')
			receiveBox = receive.find('.media .media .media-body')

			// console.log(sendBox)
			// console.log(receiveBox)

			sendBox.each(function (i,item) {
				initWidth = winWidth - 100 - 12 - 65 - 5
				var goal = $(item).find("div[class$='info']")
				if(goal.parent('.media-body').prev('.media-left').length != 0){
					goal.css({width:initWidth})
				}else{
				}
			})
			receiveBox.each(function (i,item) {
				initWidth1 = winWidth - 40 - 60 - 12 - 65 - 5
				var goal = $(item).find("div[class$='info']")
				if(goal.parent('.media-body').prev('.media-left').length != 0){
					goal.css({width:initWidth1})
				}else{
				}
			})
		area.height(winHeight - charHeader.height() - topArea.height())

		// renderVoice
		var voice = $('.voice')
		voice.each(function (i,item) {
			_this = $(item)
			time = parseInt(_this.data('voice'))
			if(_this.closest('li').hasClass('receive')){
				_this.find('img').css({'padding-left':time+8+'px'});
				_this.find('span').text(time+'"')
			}else{
				_this.find('img').css({'margin-left':time+8+'px'});
				_this.find('span').text(time+'"')
			}

		})
	})()
})