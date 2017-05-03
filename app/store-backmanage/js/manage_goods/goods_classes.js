$(function () {
	var cSign = '1'
		,noClasses = $('.none-classes')
		,addClasses = $('.add-classes')
		,classesBox = $('.classes-edit')
		,classesBtn = classesBox.find('.member-btn')
		,classesList = classesBox.find('.classes-list')
	;
	// 是否已建立分类初次验证 决定初始页面
	(function () {
		if(cSign == 1){ // 无
			classesBox.show()

		}
	})()
	// add edit 
	$('.create-now').on('click',function () {
		noClasses.hide()
		addClasses.addClass('newest').show()
	})
		// cancel
		$('.add-classes-cancel').on('click',function () {
			var newest = $('.newest').length == 0;
			console.log(newest)
			if(!newest){
				addClasses.removeClass('newest').hide()
				noClasses.show()
			}else{
				addClasses.hide()
				classesBox.show()
			}

		})
		// save
		var editItem = {};
		$('.add-classes-submit').on('click',function () {
			var cLevel = addClasses.find('input[name="classes-level"]').val()
				,cName = addClasses.find('input[name="classes-name"]').val()
				,hideC = addClasses.find('#checkbox_c1').is(':checked')
			;
			// if(cLevel == '' ){
			// 	layer.msg('请输入分类级别');
			// 	return false;
			// }else if (cName == '') {
			// 	layer.msg('请输入分类名称');
			// 	return false;
			// }
			if($(this).hasClass('editing')){
				alert(editItem)
			}
			var item = '<li><div class="media">'+
							'<div class="media-left">'+
								'<div class="item-checkbox"><input class="classes_edit" type="checkbox"></div></div>'+
							'<div class="media-body">'+cName+'</div>'+
							'<div class="media-right">'+
							'<span class="hidden-tag">已隐藏</span><span class="sorting-tag"></span><span class="more-tag"></span>'+
							'</div>'+
						'</div></li>';
			classesList.find('ul').append(item);
			$('input.classes_edit').iCheck('destroy');
			$('input.classes_edit').iCheck({checkboxClass: 'iradio_square-green',increaseArea: '20%'});


			addClasses.hide()
			classesBox.show()
			$('input.classes_edit').on('ifChanged', function(event){
			  // alert(event.type + ' callback');
			  checkBtn()
			});

		})
	$('input.classes_edit').iCheck({
	    checkboxClass: 'iradio_square-green',
	    // radioClass: 'iradio_square-green',
	    increaseArea: '20%' // optional
	  });

	$('input.classes_edit').on('ifChanged', function(event){
	  // alert(event.type + ' callback');
	  checkBtn()
	});
	function checkBtn() {
		var checkedNum = $('input.classes_edit:checked').length
		var cN = 'disabled-btn';
		if (checkedNum == 0) {
			console.log('----0')
			classesBtn.find('.edit-btn').addClass(cN)
			classesBtn.find('.add-btn').removeClass(cN)
			classesBtn.find('.del-btn').addClass(cN)
			classesBtn.find('.sort-btn').removeClass(cN)
		}else if(checkedNum == 1){
			console.log('----1')
			classesBtn.find('.del-btn').removeClass(cN)
			classesBtn.find('.add-btn').addClass(cN)
			classesBtn.find('.edit-btn').removeClass(cN)
			classesBtn.find('.sort-btn').addClass(cN)
		}else if(checkedNum > 1){
			console.log('---->1')
			classesBtn.find('.del-btn').removeClass(cN)
			classesBtn.find('.edit-btn').addClass(cN)
			classesBtn.find('.sort-btn').addClass(cN)
		}
	}checkBtn()
	// 删除
	$('.del-btn').on('click',function () {
		var _this = $(this);
		if(availableBtn(_this)){return false;}else{
			console.log('available')
			var items = $('input.classes_edit:checked').closest('li');
			console.log(items)
			layer.open({
				title:false,
				content:'确认删除？',
				btnAlign: 'c',
			  	btn: ['取消','删除'] //按钮
			  	,btn1:function () {
			  		layer.msg('已取消');
			  	},
			  	btn2:function () {
			  		layer.msg('已删除所选条目')
			  		items.remove()
					console.log('del')
					checkBtn()
			  	}
			});
		}
	})
	// 添加
	$('.add-btn').on('click',function () {
		var _this = $(this);
		if(availableBtn(_this)){return false;}else{
			console.log('available')
			classesBox.hide()
			addClasses.show()
		}
	})
	// 编辑
	$('.edit-btn').on('click',function () {
		var _this = $(this);
		if(availableBtn(_this)){return false;}else{
			console.log('available')
			var cItem = $('input.classes_edit:checked').closest('li'),
				cName = cItem.find('.media-body').text(),
				editItem.index = cItem.index()
				alert(editItem.index)
			addClasses.find('input[name="classes-name"]').val(cName)

			$('.add-classes-submit').addClass('editing');

			classesBox.hide()
			addClasses.show()
		}
	})
	// 排序
	$('.sort-btn').on('click',function () {
		if(!$(this).hasClass('disabled-btn')){
			classesBtn.find('.btn').toggleClass('sorting');
			classesList.toggleClass('sorting');
		}
	})

	function availableBtn(_this) {
		if(_this.hasClass('sorting')){
			return true;
		}else if(_this.hasClass('disabled-btn')){
			return true;
		}
	}
})