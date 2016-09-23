/**
 * 手机版
 */

$(function(){
	
	//收藏按钮
	function favourite(){
		var session_id = cookieGet("PHPSESSID");
		$(".favouriteAble").each(function(i,e){
			var $obj = $(e);
			
			function check(){
				var data = null;
				var url = urlRestapi+"favourite_check.php?session_id=" + session_id;
				switch($obj.attr('type')){
					case "goods":
						data = '{"goods_id":'+$obj.data("goods_id")+'}';
						break;
					case "store":
						data = '{"stores_id":'+$obj.data("stores_id")+'}';
						break;
				}
				$.ajax({
					type:"post",
					url:url,
					data:data,
					async:true,
					success:function(response){
						if(response.isSuccess){
							$obj.show();
							if(response.isExist){
								//已收藏
								$obj.data('a_usernewsfeed_id',response.a_usernewsfeed_id);
								$obj.find(".ico").addClass("already");
								$obj.find(".text").text("已收藏");
							}else{
								//未收藏
								$obj.find(".text").text("收藏");
							}
						}else{
							
						}
					}
				});
			}
			check();
			function listen(){
				$obj.on("click",function(){
					var url;
					if(!($obj.find(".ico").hasClass('already'))){
						
						switch($obj.attr('type')){
							case "goods":
								data = '{"item":{"goods_id":'+$obj.data("goods_id")+'}}';
								break;
							case "store":
								data = '{"item":{"stores_id":'+$obj.data("stores_id")+'}}';
								break;
						}
						url = urlRestapi+"favourite_add.php?session_id=" + session_id;
						$.ajax({
							type:"post",
							url:url,
							data:data,
							success:function(response){
								if(response.isSuccess){
									$obj.data('a_usernewsfeed_id',response.item.id);
									$obj.find(".ico").addClass("already");
									$obj.find(".text").text("已收藏");
									amAlert("success",'收藏成功',1000);
								}else{
									amAlert("warning",'收藏失败',1000);
								}
							},
							error:function(){
								amAlert("danger",'ajax错误',1000);
							},
							async:true
						});
					}else{
						url = urlRestapi+"favourite_delete.php?session_id=" + session_id;
						$.ajax({
							type:"post",
							url:url,
							data:'{"id":'+$obj.data('a_usernewsfeed_id')+'}',
							success:function(response){
								if(response.isSuccess){
									$obj.find(".ico").removeClass("already");
									$obj.find(".text").text("收藏");
									amAlert("success",'取消收藏成功',1000);
								}else{
									amAlert("warning",'取消收藏失败',1000);
								}
							},
							error:function(){
								amAlert("danger",'ajax错误',1000);
							},
							async:true
						});
					}
				});
			}
			listen();
			
		});


	}
	favourite();
	

	
	
	
	$("#favouriteStores").on("click",function(){
		console.log("click stores");
		var session_id = cookieGet("PHPSESSID");
		var stores_id = $(this).attr("data-storesId");
		var url = urlRestapi+"favourite_add.php?session_id=" + session_id;
		$.ajax({
			type:"post",
			url:url,
			data:'{"item":{"stores_id":"'+stores_id+'"}}',
			async:true,
			success:function(response){
				if(response.isSuccess){
					amAlert('success','收藏成功',1000);
				}else{
					if(response.status == 45){
						err = '已经收藏过了';
					}else if(response.error==-9){
						err = '您没有登录';
					}else{
						err = '收藏失败:';
					}
					amAlert('warning',err,1000);
				}
				
			},
			error:function(){
				amAlert('warning','收藏失败',1000);
			}
		});
	});
	$("#favouriteGoods").on("click",function(){
		var session_id = cookieGet("PHPSESSID");
		var goods_id = $(this).attr("data-GoodsId");
		var goods_itemid = $(this).attr("data-ItemId");
		var url = urlRestapi+"favourite_add.php?session_id=" + session_id;
		$.ajax({
			type:"post",
			url:url,
			data:'{"item":{"goods_id":"'+goods_id+'"}}',
			async:true,
			success:function(response){
				if(response.isSuccess){
					amAlert('success','收藏成功',1000);
				}else{
					if(response.status == 45){
						err = '已经收藏过了';
					}else if(response.error==-9){
						err = '您没有登录';
					}else{
						err = '收藏失败:';
					}
					amAlert('warning',err,1000);
				}
			},
			error:function(){
				amAlert('warning','收藏失败',1000);
			}
		});
	});
});
$(document).ready(function() {






	/**
	 * 顶部滑动隐藏
	 */

	var startX, startY, endX, endY;

	if(document.getElementById("glist")){
		document.getElementById("glist").addEventListener("touchstart", touchStart, false);
		document.getElementById("glist").addEventListener("touchmove", touchMove, false);
	}
	

	function touchStart(event) {
		var touch = event.touches[0];
		startY = touch.pageY;
		startX = touch.pageX;
	}

	function touchMove(event) {
		var touch = event.touches[0];
		//endY = (startY - touch.pageY);

		moveY = (startY - touch.pageY);
		endY = touch.pageY;
		endX = touch.pageX;
		//console.dir(moveY);

		if (moveY > 0) {
			$(".topsch").removeClass("psf");
			$(".topsch").addClass("psa");
			
		} else {
			
			$(".topsch").removeClass("psa");
			$(".topsch").addClass("psf");
			
			
		}




	}








});

/**
 * 鼠标 顶部滑动隐藏
 */
var scrollFunc = function(e) {

	e = e || window.event;
	if (e.wheelDelta) { //IE/Opera/Chrome 
		if (e.wheelDelta == 120) {
			//向上滚动事件
			//alert(e.wheelDeta + "向上");

			$(".topsch").removeClass("psa");
			$(".topsch").addClass("psf");


		} else {
			//向上滚动事件
			//alert(e.wheelDeta + "向下");
			$(".topsch").removeClass("psf");
			$(".topsch").addClass("psa");

		}
	} else if (e.detail) {
		//Firefox 
		if (e.detail == -3) {
			//向上滚动事件<br> 
			//alert(e.detail + "向上");

			$(".topsch").removeClass("psa");
			$(".topsch").addClass("psf");

		} else {
			//向下滚动事件<br>
//			alert(e.detail + "向下 ");

			$(".topsch").removeClass("psf");
			$(".topsch").addClass("psa");

		}
	}
};
if (document.addEventListener) {
	//adding the event listerner for Mozilla
	document.addEventListener("DOMMouseScroll", scrollFunc, false);
}


//IE/Opera/Chrome 
window.onmousewheel = document.onmousewheel = scrollFunc;