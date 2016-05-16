$(document).ready(function(){
	$(".select li").click(function() {
		console.log($(this).index());
		if ($(this).hasClass("nav-open")) {
			$(".backdrop,.layer").remove();
			if($(this).hasClass("nav-loading")){
				$(".nav-loading").removeClass('nav-loading');
				console.log("当前需关闭")
			}else{
				console.log("当前需加载");
				$(this).addClass('nav-loading');
				appendlayer();
				if($(this).index()==0){
					$(".layer-content").load("load-page1.htm");
				}
				if($(this).index()==1){
					$(".layer-content").load("load-page2.htm");
				}
				if($(this).index()==2){
					$(".layer-content").load("load-page3.htm");
				}
				if($(this).index()==3){
					$(".layer-content").load("load-page4.htm");
				}
				
				
			}
		}else{
			$(".backdrop,.layer").remove();
			$(".nav-open").removeClass('nav-open nav-loading');
			$(this).addClass('nav-open nav-loading');
			appendlayer();
			if($(this).index()==0){
					$(".layer-content").load("load-page1.htm");
				}
				if($(this).index()==1){
					$(".layer-content").load("load-page2.htm");
				}
				if($(this).index()==2){
					$(".layer-content").load("load-page3.htm");
				}
				if($(this).index()==3){
					$(".layer-content").load("load-page4.htm");
				}
			
			
			
		};
		console.log($(this).index());
		removelayer();
	});
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