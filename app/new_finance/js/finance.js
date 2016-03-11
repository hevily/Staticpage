
// 弹出浮层选择
		// 科目分类
		$(".subject").click(function(){
			var name="科目分类";
			appendlayer(name,'subject');
			var url = '../../js/data.json?type=subject';
			$.ajax(url).done(function (data) {
				initsnap(data);
			})
			removelayer();
		});
		// 子科目分类
		$(".son-subject").click(function(){
			var name="子科目分类";
			appendlayer(name,'son-subject');
			var url = '../../js/data.json?type=son-subject&';
			$.ajax(url).done(function (data) {
				initsnap(data);
			})
			removelayer();
		});
		$('.tabpanel .media').click(function () {
			var _thisTab = $(this).closest('.tabpanel');
			// switch(){

			// }
			if (_thisTab.hasClass('draft')) {
				alert('draft');
			}else if (_thisTab.parent().parent().hasClass('examine')) {
				alert('examine');
			}else if (_thisTab.hasClass('done')) {
				alert('done');
			}
		})

		function userAlert(text) {
			function userAlertInsert() {
				$('body').append('')
			}
		}

		window.onscroll = function () {
			// alert(1);
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
			"<div class='layer-content'><div id='wrapper' class='f_half'><div id='scroller'><ul></ul></div><div class='middle_s'></div></div></div>"+
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
function myScroll(){
	var myScroll=new IScroll("#wrapper",{
 		snap:"li"
 	});
 	var ind = null;
 	myScroll.on('scrollEnd', function(){
 		var position,index=0;
 		// console.log(this.y);
 		position = this.y;
 		index = position/40;
 		console.log(-index+"-1354654");
 		var currentLi = $('#scroller').find('li');
 		console.log(currentLi);
 		$('.current').removeClass('current');
 		currentLi.eq(-index+1).addClass("current");
 		// alert($('.current'));
 		return ind = -index;
 	});
 	$(".select-cancel").delegate(".selecting","click",function(e){
 		var liIndex=0;
 		liIndex = (parseInt(ind+1));
 		console.log("当前滚动至："+liIndex);
 		//alert($("#scroller li").eq(liIndex).text());
 		var Classvalue = $(this).attr("Classvalue");
 		// alert(Classvalue);
 		$("."+Classvalue).val($("#scroller li").eq(liIndex).text());
 		$(".backdrop,.layer").remove();
 	});
}
function initsnap(data) {
	var fillarea = $('#scroller').find('ul');
		console.log(data,fillarea);
		$.each(data,function (item,key) {
			fillarea.append('<li>'+data[item]+'</li>')
		});
		myScroll();
}