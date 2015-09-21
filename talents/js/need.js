$(document).ready(function(){
	// 需求标签页选择标签
	$(".tag").click(function(){
		console.log("标签被点击");
		$(".active-tag").removeClass("active-tag");
		$(this).addClass("active-tag");
		$(".tagSelect").hide();
				$(".selected-tag").show();

		resiezInput();
		// resizeTalentsinfo();
	})
	$(".next-step input").click(function() {
		$(".step-one").hide();
		$(".step-two").show();
		resiezInput();
		// resizeTalentsinfo();
	});
	// 工作推送
	$(document).delegate(".waitSend","click",function(){
		$(this).addClass('hidden');
		
		$(this).next(".sended").removeClass('hidden');
	})
	function resiezInput(){
		var inputArray = $(".item-details input");
		for (var i = 0;i<=inputArray.length - 1; i++) {
			var thisInputP = $(inputArray[i]).closest(".item-details");
			thisInputP.width($(".container").width()-thisInputP.prev(".item-title").width()-30);
		};
	}
	function resizeTalentsinfo(){
		var talentsinfoArray = $(".talents-info");
		for (var i = 0;i<=talentsinfoArray.length - 1; i++) {
			var thisInfo = $(talentsinfoArray[i]).closest(".talents");
			$(talentsinfoArray[i]).width($(".talents").width()-70);
		};
	}

	$(".job-needed").click(function() {
		$(".active").removeClass('active');
		$(this).addClass('active');
		$(".talents").hide();
		$(".needed").show();
	});
	$(".talents-resume").click(function() {
		$(".active").removeClass('active');
		$(this).addClass('active');
		$(".needed").hide();
		$(".talents").show();
	});
	$(".talents a").click(function(){
		alert("1");
	})

	// 弹出浮层选择
		// 职位类型
		$(".duty-htm").click(function(){
			var url="load/duty.htm",name="职位类别";
			appendlayer(name);
			$(".layer-content").load(url);
			removelayer();
		});
		// 学历要求
		$(".education-background").click(function(){
			var url="load/education-background.htm",name="学历要求";
			appendlayer(name);
			$(".layer-content").load(url);
			removelayer();
		});
		// 薪资待遇
		$(".money-duty").click(function(){
			var url="load/money-duty.htm",name="薪资待遇";
			appendlayer(name);
			$(".layer-content").load(url);
			removelayer();
		});
		// 语言能力
		$(".language").click(function(){
			var url="load/language.htm",name="语言能力";
			appendlayer(name);
			$(".layer-content").load(url);
			removelayer();
		});

		
		function appendlayer(name){
			$("body").append(""+
				"<div class='backdrop'></div>"+
				"<div class='layer'>"+
					"<div class='layer-title clearfix'>"+
						"<div class='select-cancel clearfix'>"+
							"<div class='cancel'><a type='button' href='javascript:;'>取消</a></div>"+
							"<div class='action-title'>"+name+"</div>"+
							"<div class='selecting'><a type='button' href='javascript:;'>确定</a></div>"+
						"</div>"+
					"</div>"+
					"<div class='layer-content'></div>"+
					"<div class='layer-footer'></div>"+
				"</div>")		
		}
		function removelayer(){
			$(document).delegate('.backdrop', 'click', function() {
				$(".backdrop,.layer").remove();
			});
			$(document).delegate('.cancel a', 'click', function() {
				$(".backdrop,.layer").remove();
			});
		}
			


});