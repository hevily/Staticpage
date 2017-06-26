$(function () {
	var noClasses = $('.none-classes')
		,addClasses = $('.add-classes')
		,classesBox = $('.classes-edit')
		,classesBtn = classesBox.find('.member-btn')
		,classesList = classesBox.find('.classes-list')
		,editItem = -1
	;
	// 是否已建立分类初次验证 决定初始页面
	(function () {
		if(cSign == 1){ // 无
			noClasses.show()
		}else{
			classesBox.show()
		}
	})()
	// add edit 
	$('.create-now').on('click',function () {
		noClasses.hide()
		addClasses.addClass('newest').show()
		var cLevel = addClasses.find('input[name="classes-level"]').val("")
			,cName = addClasses.find('input[name="classes-name"]').val("");
			addClasses.find('#checkbox_c1').prop('checked',false)
		;
	})
		// cancel
		$('.add-classes-cancel').on('click',function () {
			if($('.add-classes-submit').hasClass('editing') || $('.add-classes-submit').hasClass('adding')){
				addClasses.hide()
				classesBox.show()
			}else{
				addClasses.removeClass('newest').hide()
				noClasses.show()
			}

		})
		// save
		$('.add-classes-submit').on('click',function () {
			var cLevel = addClasses.find('input[name="classes-level"]').val()
				,cName = addClasses.find('input[name="classes-name"]').val()
				,hideC = addClasses.find('#checkbox_c1').is(':checked')
			;
			if(cLevel == '' ){
				layer.msg('请输入分类级别');
				return false;
			}else if (cName == '') {
				layer.msg('请输入分类名称');
				return false;
			}
			if($(this).hasClass('editing')){
				var item = classesList.find('ul').find('li').eq(editItem);
				item.find('.media-body').text(cName)
				hideC?item.find('.media').addClass('not-publish'):item.find('.media').removeClass('not-publish');
			}else{
				hideC?notPublish='not-publish':notPublish='';
				var item = '<li><div class="media '+notPublish+'">'+
								'<div class="media-left">'+
									'<div class="item-checkbox"><input class="classes_edit" type="checkbox"></div></div>'+
								'<div class="media-body">'+cName+'</div>'+
								'<div class="media-right">'+
								'<span class="hidden-tag">已隐藏</span><span class="sorting-tag"><span></span></span><span class="more-tag"></span>'+
								'</div>'+
							'</div></li>';
				classesList.find('ul').prepend(item);
				$('input.classes_edit').iCheck('destroy');
				$('input.classes_edit').iCheck({checkboxClass: 'iradio_square-green',increaseArea: '20%'});


				$('input.classes_edit').on('ifChanged', function(event){
				  // alert(event.type + ' callback');
				  checkBtn()
				});
			}
			addClasses.hide()
			classesBox.show()
			$('.editing').removeClass('editing');
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
			// console.log('----0')
			classesBtn.find('.edit-btn').addClass(cN)
			classesBtn.find('.add-btn').removeClass(cN)
			classesBtn.find('.del-btn').addClass(cN)
			classesBtn.find('.sort-btn').removeClass(cN)
		}else if(checkedNum == 1){
			// console.log('----1')
			classesBtn.find('.del-btn').removeClass(cN)
			classesBtn.find('.add-btn').addClass(cN)
			classesBtn.find('.edit-btn').removeClass(cN)
			classesBtn.find('.sort-btn').addClass(cN)
		}else if(checkedNum > 1){
			// console.log('---->1')
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
			var cLevel = addClasses.find('input[name="classes-level"]').val('')
				,cName = addClasses.find('input[name="classes-name"]').val('');
				addClasses.find('#checkbox_c1').prop('checked',false)
			;
			classesBox.hide()
			addClasses.show()
			$('.add-classes-submit').addClass('adding');
		}
	})
	// 编辑
	$('.edit-btn').on('click',function () {
		var _this = $(this);
		if(availableBtn(_this)){return false;}else{
			console.log('available')
			var cItem = $('input.classes_edit:checked').closest('li'),
				cName = cItem.find('.media-body').text(),
				notPublish = cItem.find('.media').hasClass('not-publish');
				editItem = cItem.index();
			addClasses.find('input[name="classes-name"]').val(cName)
			notPublish?addClasses.find('#checkbox_c1').prop('checked',true):addClasses.find('#checkbox_c1').prop('checked',false);
			$('.add-classes-submit').addClass('editing');

			classesBox.hide()
			addClasses.show()
		}
	})
	// 排序
	var sortableList = '';
	$('.sort-btn').on('click',function () {
		if(!$(this).hasClass('disabled-btn')){
			classesBtn.find('.btn').toggleClass('sorting');
			classesList.toggleClass('sorting');
		}
		var _this = $(this),sortEL = document.getElementById('sortList');
		if(_this.hasClass('sorting')){
			Sortable.create(sortEL, {
				handle:'.sorting-tag',
				animation:20,
				dragClass:'draging',
				ghostClass:'moving'
			});

			// sortableList = new Sortable(sortEL,{
			// 	handle:'.media-right',
			// 	animation:100,
			// 	dragClass:'draging',
			// 	ghostClass:'moving'
			// })
		}else{
			if(sortableList != ''){
				sortableList.destroy()
				sortableList = '';
			}
			console.log(111)
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