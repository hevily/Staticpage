$(document).ready(function(){
	$(".nav .select li").click(function() {
		var _this = $(this);
		if ($(".nav-opening")) {
			$(".nav-opening").removeClass('nav-opening');
			$(this).addClass('nav-opening');
			$(".factor,.factor .select-factor").hide();
			$(".factor").find(".select-factor").hide();
			_this.closest(".select").next(".factor").show();
			$(".nav .factor").find("li").find(".select-factor").eq(_this.index()).show();
		}else{
			$(this).addClass('nav-opening');
			$(".factor,.factor .select-factor").hide();
			_this.closest(".select").next(".factor").show();
			$(".nav .factor").find("li").find(".select-factor").eq(_this.index()).show();
		};
		console.log(_this.index());
	});
	$(".factor a").click(function() {
		console.log("已点击排序条件")
		$(".factor,.factor .select-factor").hide();
	});
})