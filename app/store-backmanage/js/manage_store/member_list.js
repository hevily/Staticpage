$(function () {
	var memberList = $('.member-list-home-filter'),// 会员列表
		memberInfo = $('.member-info'),// 会员信息
		relationShipFree = $('.relationShip-free'),// 解除关系
		editInfo = $('.edit-info-box') // 修改资料
		;
	// toggle filter
	$('.filter-title').on('click',function (){
		var _t = $(this).closest('.filter-colum');
		var filtering = _t.hasClass('filtering')
		if (filtering) {
			_t.removeClass('filtering')
		}else{
			$('.filtering').removeClass('filtering')
			_t.closest('.filter-colum').addClass('filtering')
		}
	})
	$('.filter-colum').find('li').on('click',function (e) {
		var txt = $(this).text();
		console.log(txt)
	})

	// memberInfo
	$('.member-info-handle').on('click',function () {
		memberList.hide()
		memberInfo.show()
	})

	// toggle info detail
	$('.toggle-ul-detail').on('click',function () {
		var _t = $(this);
		_t.toggleClass('mgb-1').next('ul').toggle()
	})


	// relationship free
	$('.relationship-free.btn').on('click',function () {
		memberInfo.hide()
		relationShipFree.show()
	})
		// relationship free cancel
		$('.relationShip-cancel').on('click',function () {
			relationShipFree.hide()
			memberInfo.show()
		})
		// relationship free done
		$('.relationShip-free-done').on('click',function () {
			var txt = relationShipFree.find('.decline-res').find('textarea').val();
			if (txt == '') {
				layer.msg('请输入解除理由');
			}else{
				layer.open({
					title:false,
					btn: ['容我三思', '解除关系'],
				  	content: '确认解除该会员？',
				  	btn1:function(index, layero){
						layer.msg('你可接着处理，也可放松放松待会儿再来处理本次操作')
					},
					btn2:function (index) {
					    //do something
						    layer.msg('已解除该会员')
						    layer.close(index);
						    relationShipFree.hide();
						    memberList.show();
					},
					cancel:function () {
						layer.msg('溜达了一圈，什么也没做.')
					}
				});
			}
		})
	// edit info
	$('.edit-info.btn').on('click',function () {
		var minfo = $('.member-info').find('.member-base'),
			fullnameT = minfo.find('.fullnameT').find('span').text(),
			firstNameT = minfo.find('.first-nameT').find('span').text(),
			secondNameT = minfo.find('.second-nameT').find('span').text(),
			sexT = minfo.find('.member-sexT').find('span').text(),
			birthdayT = minfo.find('.birthdayT').find('span').text(),
			IDCardT = minfo.find('.personalIDCardT').find('span').text(),
			emailT = minfo.find('.emailT').find('span').text(),
			phoneT = minfo.find('.phoneT').find('span').text(),
			addrT = minfo.find('.addressT').find('span').text(),
			submitT = minfo.find('.submitT').find('span').text()
			;


		var editinfo = $('.edit-info-box').find('.member-input'),
			fullname = editinfo.find('input[name="fullname"]'),
			firstName = editinfo.find('input[name="firstName"]'),
			secondName = editinfo.find('input[name="secondName"]'),
			sex = editinfo.find('input[name="sex"]'),
			birthday = editinfo.find('input[name="birthday"]'),
			IDCard = editinfo.find('input[name="personalIDCard"]'),
			email = editinfo.find('input[name="email"]'),
			phone = editinfo.find('input[name="phone"]'),
			addr = editinfo.find('input[name="address"]'),
			submit = editinfo.find('input[name="submit"]')
			;

			fullname.val(fullnameT)
			firstName.val(firstNameT)
			secondName.val(secondNameT)
			sex.val(sexT)
			birthday.val(birthdayT)
			IDCard.val(IDCardT)
			email.val(emailT)
			phone.val(phoneT)
			addr.val(addrT)
			submit.val(submitT)

		memberInfo.hide()
		editInfo.show()
	})
		// edit info cancel
		$(".edit-info-cancel").on('click',function () {
			editInfo.show()
			memberInfo.show()
		})
		// edit info save
		$('.edit-info-save').on('click',function () {
			
			var editinfo = $('.edit-info-box').find('.member-input'),
				fullname = editinfo.find('input[name="fullname"]'),
				firstName = editinfo.find('input[name="firstName"]'),
				secondName = editinfo.find('input[name="secondName"]'),
				sex = editinfo.find('input[name="sex"]'),
				birthday = editinfo.find('input[name="birthday"]'),
				IDCard = editinfo.find('input[name="personalIDCard"]'),
				email = editinfo.find('input[name="email"]'),
				phone = editinfo.find('input[name="phone"]'),
				addr = editinfo.find('input[name="address"]'),
				submit = editinfo.find('input[name="submit"]'),
				inputinfo = new Array();
				inputinfo.push(fullname.val(),firstName.val(),secondName.val(),sex.val(),birthday.val(),IDCard.val(),email.val(),phone.val(),addr.val(),
submit.val());
				for (var i = 0; i < inputinfo.length; i++) {
					if(inputinfo[i] == '') {
						var notice = editinfo.find('li').eq(i+1).find('.input-label').text()
						layer.msg('请检查是否已输入-'+notice+'-的内容')
						return false ;
					}
				}
				var _t = $(this);
				var edit = $('.member-info').find('.member-input').find('.member-base').find('li').find('.input-text').find('span');
				
				for(var i = 0;i <= edit.length;i++){$(edit[i]).text(inputinfo[i])}


			editInfo.hide()
			memberInfo.show()
		})
})