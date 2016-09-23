// JavaScript Document
//web 除了点击购物车和加减按钮，其他 .new_list_item 点击跳转详情页，冒泡事件

$(function(){

		//点击跳转详情页面（周边列表） 
        $("body >*").on("click", ".new_list_item", function (e) {
            var id = $(this).attr('link_id');
			//如果提供了事件对象，则这是一个非IE浏览器
			if(  (e && e.stopPropagation ) ) {
			　　//因此它支持W3C的stopPropagation()方法
			　　e.stopPropagation();
			
				//跳转url
				location.href = urlRoot + "Home/Goods/view?goods_id=" + id + "&beginappi&action=newView&navbar=goods&endappi";
			} else {
				
			　　//否则，我们需要使用IE的方式来取消事件冒泡
			　　window.event.cancelBubble = true;
			}
            return false;
        });
		
		//带属性商品或者库存为0或者开启批发的商品 或者开启分享购买的商品 点击跳转详情页
		$("body >*").on('click','.item-goodsobj',function  () {
			
				if(($(this).parents(".new_list_item").data('isuseattributes')==1) || ($(this).parents(".new_list_item").data("gwc_flag") =="gwc_3") || ($(this).parents(".new_list_item").data("limit_wholesale") > 0) || ($(this).parents(".new_list_item").data("sharepost_id") !=0) ){
					var id = $(this).parents(".new_list_item").attr('link_id');
					location.href = urlRoot + "Home/Goods/view?goods_id=" + id + "&beginappi&action=newView&navbar=goods&endappi";
				}
		})	
		//点击加减购物车阻止冒泡,阻止跳转详情页
		$("body >*").on("click",".item-goodsobj",function(e){
			 e.stopPropagation();
		})
		
})

