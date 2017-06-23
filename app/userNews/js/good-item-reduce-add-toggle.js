//开始添加到购物车
$("body").delegate( ".item-addcart","click", function  () {
	$(this).closest('.item-add-cart').hide();
	$(this).closest(".item-add-cart").next(".item-reduce-add").show();

});
//添加商品数量
$(".item-reduce-add").delegate('.item-addmore','click',function  () {
	var obj = $(this).siblings("span");
		num = parseInt(obj.text())+1;
		obj.text(num);
})
$(".item-reduce-add").delegate('.item-reduceless','click',function  () {
	var obj = $(this).siblings("span");
		num = parseInt(obj.text())-1;
		if (num>0) {
			obj.text(num);
		}else{
			$(this).closest(".item-reduce-add").hide();
			$(this).closest(".item-reduce-add").siblings(".item-add-cart").show();
		};
})
// 图片惰性加载 节约流量
// $('img.lazy').lazyload({
//  threshold : 100,
//  effect : "fadeIn"
// });