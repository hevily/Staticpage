$(document).ready(function(){
	$(".select li").click(function() {
		if ($(this).hasClass("nav-open")) {
			$(".backdrop,.layer").remove();
			if($(this).hasClass("nav-loading")){
				// $(this).addClass('nav-open');
				$(".nav-loading").removeClass('nav-loading');
				console.log("当前需关闭")
			}else{
				console.log("当前需加载");
				$(this).addClass('nav-loading');
				appendlayer();
				$(".layer-content").load("load-page.htm");
			}
		}else{
			$(".backdrop,.layer").remove();
			$(".nav-open").removeClass('nav-open nav-loading');
			$(this).addClass('nav-open nav-loading');
			appendlayer();
			$(".layer-content").load("load-page.htm");

			// $(".factor,.factor .select-factor").hide();
			// _this.closest(".select").next(".factor").show();
			// $(".nav .factor").find("li").find(".select-factor").eq(_this.index()).show();
		};
		console.log($(this).index());
		removelayer();
		});
	// $(".factor a").click(function() {
	// 	console.log("已点击排序条件")
	// 	$(".factor,.factor .select-factor").hide();
	// });
	function appendlayer(name,Classvalue){
		$("body").append(""+
			"<div class='backdrop'></div>"+
			"<div class='layer'>"+
				"<div class='layer-title clearfix'>"+
					"<div class='select-cancel clearfix'>"+
						"<div class='cancel'><a type='button' href='javascript:;'>取消</a></div>"+
						"<div class='action-title'>"+name+"</div>"+
						"<div class='selecting' Classvalue='"+Classvalue+"'><a type='button' href='javascript:;'>确定</a></div>"+
					"</div>"+
				"</div>"+
				"<div class='layer-content'></div>"+
				"<div class='layer-footer'></div>"+
			"</div>");
	}
	function removelayer(){
		// $('.backdrop').click(function() {
		// 	$(".backdrop,.layer").remove();
		// });
		$(document).delegate('.backdrop', 'click', function() {
			$(".backdrop,.layer").remove();
			// $("."+removeClass).removeClass(''+removeClass+'');
			$(".nav-loading").removeClass('nav-loading');
		});
		$(document).delegate('.cancel a', 'click', function() {
			$(".backdrop,.layer").remove();
		});

	}
})