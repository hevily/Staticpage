	var userColorPick =  function  (goal,callback) {

		var ColorPick = ""+
		"<div class='userColor'>"+
			"<div class='userColorPick-mask'></div>"+
			"<div class='userColorPick' style='display:none;'>"+
				// "<div class='userColorPick-title'>"+
				// 	"编辑颜色"+
				// "</div>"+
				"<div class='userColorPick-color'>"+
					"<table>"+
						"<thead>"+
							"<th colspan='8'>基本颜色</th>"+
						"</thead>"+
						"<tbody>"+
							"<tr>"+
								"<td style='background-color: #FFFFFF;'>&nbsp;</td>"+
								"<td style='background-color: #FFFE85;'>&nbsp;</td>"+
								"<td style='background-color: #82FD7E;'>&nbsp;</td>"+
								"<td style='background-color: #0BF782;'>&nbsp;</td>"+
								""+
							"</tr> "+
							"<tr> "+
								"<td style='background-color: #097DEC;'>&nbsp;</td>"+
								"<td style='background-color: #FE7AC1;'>&nbsp;</td>"+
								"<td style='background-color: #FC80F7;'>&nbsp;</td>"+
								"<td style='background-color: #FE0009;'>&nbsp;</td>"+
							"<tr>"+
								"<td style='background-color: #7BFD01;'>&nbsp;</td>"+
								"<td style='background-color: #05FB41;'>&nbsp;</td>"+
								"<td style='background-color: #0DF7F8;'>&nbsp;</td>"+
								"<td style='background-color: #0A7ABB;'>&nbsp;</td>"+
							"</tr>"+
							"<tr>"+
								"<td style='background-color: #7BFD01;'>&nbsp;</td>"+
								"<td style='background-color: #05FB41;'>&nbsp;</td>"+
								"<td style='background-color: #0DF7F8;'>&nbsp;</td>"+
								"<td style='background-color: #0A7ABB;'>&nbsp;</td>"+
							"</tr>"+
						"</tbody>"+
					"</table>"+
					"<div class='userColorPick-decision'>"+
						"<a href='javascript:;' class='enter'>确定</a>"+
						"<a href='javascript:;' class='cancel'>取消</a>"+
					"</div>"+
				"</div>"+
			"</div>"+
		"</div>"

	if ($('.userColorPick').length == 0) {
		initpicker()
	}else{
		$('.userColor').remove()
		initpicker();
	}
	function initpicker() {
		$('body').append(ColorPick)
				var pos = calculatePosition(goal);
				// var pos = getOffset(goal);
				$(".userColorPick").css({"left":pos.left + "px","top":pos.top + "px"}).fadeIn(300);
				// console.log('call userColorPick')
				var className = 'select-this-color';
				var color ,stringArray

				$('body').delegate('.userColorPick-color td', 'click', function(e) {
					e.stopPropagation()
					$('.'+className).removeClass(className);
					$(this).addClass(className);
					
				});
				// $('body').on('click', 'a.enter', function(e) {
				$('a.enter').click(function (e) {
						// body...
						e.stopPropagation()
					if ($('.select-this-color').length != 0) {
						stringArray = $('.select-this-color').attr('style').split('#');
						// console.log(stringArray[1])
						// console.log(callback)
						var color = stringArray[1].substr(0,6)
						if ($.isFunction(callback)){
							callback(color)
							$('.userColor').remove()
						}
						return
					}else{
						alert('请选择一个颜色')
						return
					}
					
				});
				$('body').delegate('a.cancel', 'click', function(e) {
					e.stopPropagation()
					$('.userColor').remove()
				});
				$('.userColorPick-mask').click(function () {
					if ($('.userColorPick').length != 0) {
						$('.userColor').remove();
					}
				})
	}

	function getOffset(picker, input) {
	    var extraY = 0;
	    var dpWidth = picker.outerWidth();
	    var dpHeight = picker.outerHeight();
	    var inputHeight = input.outerHeight();
	    var doc = picker[0].ownerDocument;
	    var docElem = doc.documentElement;
	    var viewWidth = docElem.clientWidth + $(doc).scrollLeft();
	    var viewHeight = docElem.clientHeight + $(doc).scrollTop();
	    var offset = input.offset();
	    offset.top += inputHeight;

	    offset.left -=
	        Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
	        Math.abs(offset.left + dpWidth - viewWidth) : 0);

	    offset.top -=
	        Math.min(offset.top, ((offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
	        Math.abs(dpHeight + inputHeight - extraY) : extraY));

	    return offset;
	}


	//计算出拾取器层的left,top坐标
	function calculatePosition ($el,scrollbox) {
		// console.log(elPos)
		var offset = $el.position()
			// ,mTop = $el.style:margin-top

		// console.log(offset)
		var  winWidth = $(window).width()
			,winHeight = $(window).height()
			// console.log(winWidth,winHeight)
			
		var pos = {left:offset.left,top:offset.top + $el.height()};
		// console.log(pos)

		var compatMode = document.compatMode == 'CSS1Compat';
		var w = compatMode ? document.documentElement.clientWidth : document.body.clientWidth;
		var h = compatMode ? document.documentElement.clientHeight : document.body.clientHeight;
		var pos = {left:offset.left+10,top:offset.top + $el.height()};
		var $userColorPick = $(".userColorPick");
		if(offset.left + $userColorPick.width() > w){
			console.log(w)
			pos.left = offset.left - $userColorPick.width() ;
			if(pos.left < 0){
				pos.left = 0;
			}
		}
		if(offset.top + $el.height() + $userColorPick.height() > h){
			pos.top = offset.top - $userColorPick.height() ;
			if(pos.top < 0){
				pos.top = 0;
			}
		}
		// console.log(pos)
		return pos;
	}
}