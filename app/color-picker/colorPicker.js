		// 定义颜色选择器样式
		var style = "<style>.userColorPick-mask{z-index:100;position:fixed;width:100%;height:100%;background-color:transparent;top:0;left:0}.userColorPick{z-index:101;position:absolute;box-sizing:border-box;width:140px;background-color:#fff;border:1px solid #CFCDCD;box-shadow:1px 1px 3px 1px rgba(0,0,0,.3);border-radius:3px;font-size:12px}.userColorPick .userColorPick-title{z-index:210;color:#606061;background-color:#FFF;padding:7px 10px;border-bottom:1px solid #E6E6E6;font-weight:700}.userColorPick .userColorPick-color{z-index:210;color:#0F1418}.userColorPick table{position:relative;padding:0 5px;margin:0 auto}.userColorPick table thead tr th{text-align:left;font-size:14px;padding-bottom:4px}.userColorPick table tbody tr td{background-color:#FFF;width:14px;height:14px;margin:1px;text-align:center;color:red;border:1px solid rgba(0,0,0,.05);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.userColorPick table tbody tr td:hover{border:1px solid rgba(0,0,0,.3)}.userColorPick table tbody tr td.select-this-color{border:1px solid #fff;box-shadow:1px 1px 2px 1px rgba(0,0,0,.2)}.userColorPick .userColorPick-decision{width:100%;padding-bottom:10px;padding-left:10px}.userColorPick .userColorPick-decision a{display:inline-block;text-align:center;text-decoration:none;width:48px;border:1px solid #E3E3E3;color:#14161C;padding:3px}.userColorPick .userColorPick-decision a:nth-child(2){margin-left:8px}.userColorPick .userColorPick-decision a:hover{color:#f36303;background-color:#fff}.userColorPick .userColorPick-decision a:active{color:#000;background-color:#EFEFF0}</style>";
		$('body').append(style)
	var userColorPick =  function  (goal,callback) {
		// 定义颜色选择器dom结构
		var ColorPick = ""+
		"<div class='userColor'>"+
			"<div class='userColorPick-mask'></div>"+
			"<div class='userColorPick' style='display:none;'>"+
				// "<div class='userColorPick-title'>"+
				// 	"编辑颜色"+
				// "</div>"+
				
				"<div class='userColorPick-color' >"+
				"<div class='userColorPick-title' style='background-color:#EEEEEF;'>背景色板拾取器</div>"+
					"<table style='background-color:#fff;' cellspacing='8'>"+
						// "<thead>"+
						// 	"<th colspan='8'>基本颜色</th>"+
						// "</thead>"+
						"<tbody >"+
							"<tr>"+
								"<td style='background-color: #FFFFFF;'>&nbsp;</td>"+
								"<td style='background-color: #27FF95;'>&nbsp;</td>"+
								"<td style='background-color: #FFCC45;'>&nbsp;</td>"+
								"<td style='background-color: #FFA076;'>&nbsp;</td>"+
								""+
							"</tr> "+
							"<tr> "+
								"<td style='background-color: #C66DFF;'>&nbsp;</td>"+
								"<td style='background-color: #6CDB73;'>&nbsp;</td>"+
								"<td style='background-color: #6DAEFF;'>&nbsp;</td>"+
								"<td style='background-color: #C6A086;'>&nbsp;</td>"+
							"<tr>"+
								"<td style='background-color: #5CC6FF;'>&nbsp;</td>"+
								"<td style='background-color: #FFB1AF;'>&nbsp;</td>"+
								"<td style='background-color: #5DFFE3;'>&nbsp;</td>"+
								"<td style='background-color: #FF90FB;'>&nbsp;</td>"+
							"</tr>"+
							"<tr>"+
								"<td style='background-color: #9797C6;'>&nbsp;</td>"+
								"<td style='background-color: #D0C4AF;'>&nbsp;</td>"+
								"<td style='background-color: #FDFF4D;'>&nbsp;</td>"+
								"<td style='background-color: #AFC7D0;'>&nbsp;</td>"+
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
	// 初始化控件
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
	// 定位
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