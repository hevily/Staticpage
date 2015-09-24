$(document).ready(function(){
	// 需求标签页选择标签
	$(".tag").click(function(){
		console.log("标签被点击");
		$(".active-tag").removeClass("active-tag");
		$(this).addClass("active-tag");
	})
	// 发送简历
	$(".waitSend").click(function(){
		$(this).addClass('hidden');
		$(this).next(".sended").removeClass('hidden');
	})
	// 发送信息
	$(".send-msg").click(function() {
		alert("发送信息");
	});
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
		resizeTalentsinfo();
	});
	$(".talents a").click(function(){
		alert("1");
	})


	// 弹出浮层选择
		// 工作经验
		$(".duty-experance").click(function(){
			var url="load/duty.htm",name="工作经验";
			appendlayer(name);
			$(".layer-content").load(url);
			removelayer();
			// selectIng = $(".duty-experance");
		});
		// 拍摄地址
		$(".shoot-address").click(function(){
			var url="load/shoot-address.htm",name="拍摄地址";
			$("body").append("<div class='backdrop'></div><div class='layer-address'></div>")
			// appendlayer(name);
			$(".layer-address").load(url);
			$(".backdrop").click(function() {
				$(".layer-address,.backdrop").remove();
			});
		});
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
			myScroll();
		});
		// 薪资待遇
		$(".money-duty").click(function(){
			var url="load/money-duty.htm",name="薪资待遇";
			appendlayer(name);
			$(".layer-content").load(url);
			removelayer();

		});
		function abc(){
			console.log("abc");
		}


		
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

		
});