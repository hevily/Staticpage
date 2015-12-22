$(document).ready(function(){
	$(".sended").click(function() {
		$(this).closest(".own-action-left").find(".sendable").show();
		$(this).hide();
	});
	$(".sendable").click(function() {
		$(this).closest(".own-action-left").find(".sended").show();
		$(this).hide();
	});
	$(".add img").click(function() {
		alert("1");
	});
	//弹出我的资料设置页面
	$(".set").click(function() {
		var _this = $(this).closest("li").index();
		appendSetContent(_this);
		$(".backdrop").click(function(){
			$(".backdrop,.content").remove();
		})
	});
	// 设置默认简历
	$(document).delegate(".set-default-resume","click",function() {
		var thisIndex = ($(this).attr("thisIndex"));
		$(".own-name span").addClass('default-hidden');
		$(".resume-list li").eq(thisIndex).find(".own-left").find(".own-name span").removeClass('default-hidden');
	});
	//关闭我的资料设置页面
	$(document).delegate(".close-set-content","click",function() {
		$(".backdrop,.content").remove();
	});
	//关闭&开启我的简历
	$(document).delegate(".close","click",function(){
		if(confirm("确认关闭该简历？")){
			$(this).find("span").toggle();
		}
	});
	//删除简历
	$(document).delegate(".del","click",function(){
		if(confirm("确认关闭该简历？")){
			$(this).closest('li').remove();
		}
	});
	

	function appendSetContent(_this){
			$("body").append("<div class='backdrop'></div>"+
						"<div class='content'>"+
							"<div class='set-content'>"+
								"<div class='set-default-resume' thisIndex='"+_this+"'>设为默认简历</div>"+
								"<div class='out-To-doc'>导出为.doc</div>"+
								"<div class='out-To-pdf'>导出为.pdf</div>"+
								"<div class='out-To-jpg'>导出为.jpg</div>"+
								"<div class='close-set-content'>取消</div>"+
							"</div>"+
						"</div>")
	}


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
			$('.backdrop').click(function() {
				$(".backdrop,.layer").remove();
			});
			$(document).delegate('.cancel a', 'click', function() {
				$(".backdrop,.layer").remove();
			});
		}
})