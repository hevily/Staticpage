$(document).ready(function(){
	// 需求标签页选择标签
	$(".tag").click(function(){
		console.log("标签被点击");
		$(".active-tag").removeClass("active-tag");
		$(this).addClass("active-tag");
	})
	// 工作推送
	$(document).delegate(".waitSend","click",function(){
		$(this).addClass('hidden');
		$(this).next(".sended").removeClass('hidden');
	})
	function resiezInput(){
		var inputArray = $(".item-details input");
		for (var i = 0;i<=inputArray.length - 1; i++) {
			var thisInputP = $(inputArray[i]).closest(".item-details");
			thisInputP.width($(".edit-resume").width()-thisInputP.prev(".item-title").width()-10);
		};
	}resiezInput();
	function resizeTalentsinfo(){
		var talentsinfoArray = $(".talents-info");
		for (var i = 0;i<=talentsinfoArray.length - 1; i++) {
			var thisInfo = $(talentsinfoArray[i]).closest(".talents");
			$(talentsinfoArray[i]).width($(".talents").width()-70);
		};
	}resizeTalentsinfo();

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
	$(".item-details input").click(function(){
		var url="load/duty.htm";
		$("body").append("<div class='backdrop'></div><div class='layout'></div>")
		$(".layout").load(url);
		removelayer();
	})

	function removelayer(){
		$(".backdrop").click(function() {
			$(".layout,.backdrop").remove();
		});
	}

			


});

// 	myScroll = new IScroll('#wrapper', {
// 					  snap:"li",
//                       momentum:false,
//                       hScrollbar:false,
//                       vScrollbar:false});
// }
// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);