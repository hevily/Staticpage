
// 弹出浮层选择
		// 科目分类
		$(".subject").click(function(){
			var name="科目分类",where = 'subject';
			appendlayer(name,where);
			var url = '../../js/data.json?type=subject';
			$.ajax(url).done(function (data) {
				initsnap(data);
			})
			removelayer();
		});
		// 子科目分类
		$(".son-subject").click(function(){
			var name="子科目分类",where = 'son-subject';
			appendlayer(name,where);
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
				// alert('draft');
			}else if (_thisTab.parent().parent().hasClass('examine')) {
				// alert('examine');
			}else if (_thisTab.hasClass('done')) {
				// alert('done');
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

var userAlert = {
	// @program userAlert
	// @program append id，text，type
	// return userAlert Dom into the id

	append:function (id,text,type) {
		var alertArea = document.getElementById(id),
			btn_cancel = '',user_ensure = '';
			alertArea.style.display = 'block';
		if (type === 'two') {
			user_ensure = 'user-ensure';
			btn_cancel = '<a href="javascript:;" id="user_btn_cancel" onclick="this.isclick=2" >取消</a>';
		};
		var text =	'<div class="user-alert trans-opacity" id="user_alert">'+
					'<div class="uer-alert-backdrop"></div>'+
						'<div class="user-alert-content">'+
							'<p>'+text+'</p>'+
							'<div class="user-alert-btn '+user_ensure+'" id="user_alert_btn">'+
								btn_cancel+
								'<a href="javascript:;" id="user_btn_ensure" onclick="this.isclick=1" >确认</a>'+
							'</div>'+
						'</div>'+
					'</div>';
		alertArea.innerHTML = text;
	},
	// @program result checkClass
	// return false or true

	result:function () {
		// var _this = _this;
		// _this.attributes.clasName ='clicked12';
			var oldnode = document.getElementById('user_alert');
			var btn_ensure = document.getElementById('user_btn_ensure');
			if (oldnode) {
				oldnode.parentNode.removeChild(oldnode)
				console.log(oldnode);
				if(btn_ensure.isclick == 1){
					return  true;
				}else{
					return  false;
				};
				return false;
			}
	}
};