document.body.addEventListener('touchstart',function () {});
window.onload = function () {
	$('#optin-classes').change(function () {
		var _t = $(this).find("option:selected"),
		basedir = '../../js/manage_store/',
		dataUrl = _t.attr('data-url'),
		url = basedir + dataUrl
		getData(url)
		_t.closest('select').attr('data-level',_t.index()+1)
	})

	function getData(url) {
		$.ajax({
			url: url,
			type: 'get',
			dataType: 'json'
		})
		.done(function(data) {
			renderItemChoose(data)
		})
		.fail(function() {
			var data = ''
			renderItemChoose(data)
		})
	}

	function renderItemChoose(data) {
		var optionsBox = $('.option-items-choose').find('ul'),ops = '';
		if (data == '' || data== undefined ) {
			ops ='<li style="font-size: 18px;background: #fff;border: none;text-align: center;width: 100%;">--该分类暂无栏目可选--</li>';
		}else{
			jQuery.each(data,function (i,item) {
				ops +='<li class="item-choose" data-level="'+item.level+'"><span class="option-item">'+item.name+'</span>'+
							'<span class="option-selected">-</span></li>';
			})
		}
		optionsBox.html(ops)
	}

	// choose items
	$('.option-items-choose ul').on('click','.item-choose',function (e) {
		var _t = $(this),selectedBox = $('.select-area').find('ul');
		if(selectedBox.find('li').length < 8){
			selectedBox.append(_t.css({opacity:0}).removeClass('item-choose'))
			_t.animate({opacity:1});
		}else{
			alert('至多选择8项')
		}
		e.stopPropagation()
	})

	// remove items
	$('.select-area').on('click','li',function (e) {
		e.stopPropagation()
	})
	$('.select-area').on('click','.option-selected',function (e) {
		var _t = $(this).closest('li').addClass('item-choose'),
			optionsBox = $('.option-items-choose').find('ul');
		if(!checkLevel(_t)){
			_t.remove();
			// call server api reset database
			serverRemove()
			return ;
		}
		optionsBox.append(_t.css({opacity:0}))
		_t.animate({opacity:1})
		e.stopPropagation()
	})

	function checkLevel(goal) {
		var level = $('#optin-classes').attr('data-level')
		gL = goal.attr('data-level')
		console.log(level,gL)
		if(gL === level ){
			return true;
		}else{
			return false;
			alert('1')
		}
	}
	function serverRemove() {
		// body...
	}


}