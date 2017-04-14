
$(function () {
	// 是否显示会员申请列表 1 为显示列表 其他为未设置会员等级 不可用状态
	var member = 1;

	var  noneCard= $('.noneCard'),
		 memeberList= $('.has-Member'),
		 newMember = $('.add-newmember'),
		 memberInfo = $('.member-info'),
		 addNewMember = $('.add-newmember'),
		 addNewmemberCard = $('.add-newmember-card'),
		 declineApply = $('.decline-apply'),
		 levelText ='',
		 title
		;
	function renderMemberList(member) {

		if(member === 1){
			memeberList.show();
			title = '会员管理';
		} else {
			noneCard.show();
			title = '等级设置';
		}
		changeTitle(title);
	}
	
	renderMemberList(member)
	// add new member
	$('.new-member').on('click',function () {
		var editinfo = $('.add-newmember').find('.member-input'),
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

			fullname.val('')
			firstName.val('')
			secondName.val('')
			sex.val('')
			birthday.val('')
			IDCard.val('')
			email.val('')
			phone.val('')
			addr.val('')
			submit.val('')

		memeberList.hide()
		newMember.show()
	})
		// 新增会员保存 && 编辑会员信息
		$('.add-new-save').on('click',function () {
			var editinfo = $('.add-newmember').find('.member-input'),
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
						console.log(i+1)
						return false ;
					}
				}

			var _t = $(this);
			if(_t.hasClass('editing')){
				$('.editing').removeClass('editing');
				var edit = $('.member-info').find('.member-input').find('li').find('.input-text').find('span');
				for(var i = 0;i <= edit.length;i++){$(edit[i]).text(inputinfo[i])}
				newMember.hide()
				memberInfo.show()
			}else{
				newMember.hide();
				memeberList.show();
			}

		})
		// 新增会员取消
		$('.add-new-cancel').on('click',function () {
			if($(this).hasClass('editing')){
				$('.editing').removeClass('editing');
				newMember.hide()
				memberInfo.show()
			}else{
				newMember.hide();
				memeberList.show();
			}
		})
	// 处理申请信息
	$('.single-member').on('click',function () {
		var _t = $(this),
			mList = $('.has-Member'),
			info = $('.member-info')
			;
		mList.hide()
		info.show()
		changeTitle("审核会员");

	})
	// pass apply
	$('.pass-apply').on('click',function () {
		var _t = $(this),
			addCard = $('.add-newmember-card'),
			info = $('.member-info')
			;
		info.hide()
		addCard.show()
		setTimeout(function () {
			// layer.msg('请为新成员添加相关会员信息')
		},1000)

	})
	// decline apply
	$('.pass-decline').on('click',function () {
		memberInfo.hide()
		declineApply.show()
	})
		$('.decline-sure').on('click',function () {
		    var declineInfo = $('.decline-res').find('textarea').val();
		    if(declineInfo == ''){
		    	layer.msg('请输入拒绝理由');
		    	return false;
		    }else{
				layer.open({
					title:false,
					btn: ['确认', '取消'],
				  	content: '确认拒绝该申请？',
				  	btn1:function(index, layero){
					    //do something
						    layer.msg('已拒绝本次申请')
						    layer.close(index);
						    declineApply.hide();
						    memeberList.show();
					},
					btn2:function (index) {
						layer.msg('你可接着处理，也可放松放松待会儿再来处理本次申请')
					},
					cancel:function () {
						layer.msg('溜达了一圈，什么也没做.')
					}
				});
			}
		})
	$('.decline-cancel').on('click',function () {
		memberInfo.show()
		declineApply.hide()
	})
	// edit apply info
	$('.edit-apply').on('click',function () {
		var minfo = $('.member-info').find('.member-input'),
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


		var editinfo = $('.add-newmember').find('.member-input'),
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
			addNewMember.show()
			$('.add-new-save').addClass('editing');
			$('.add-new-cancel').addClass('editing');

	})
	// 选择会员级别
	$('.card-level').on('click',function () {
		var cardLevel = $('.member-card-level'),
			addCard = $('.member-card-info')
		;
		levelText = $(this).find('.card-level-label').text()
		$('.member-card-level').find('.card-sign').text(levelText)
		addCard.hide()
		cardLevel.show()
	})
	// 会员卡级别选择
		$('.member-card-level-cancel').on('click',function () {
			var cardLevel = $('.member-card-level'),
				addCard = $('.member-card-info')
			;
			cardLevel.hide()
			addCard.show()
		})
		$('.member-card-level-save').on('click',function () {
			var cardLevel = $('.member-card-level'),
				addCard = $('.member-card-info'),
				stime = $('input[name="member-card-starttime"]').val(),
				etime = $('input[name="member-card-endtime"]').val(),
				cardNum = $('input[name="member-card-uniqnum"]').val(),
				stopit = true
			;
			if (stime == '') {
				layer.msg('请选择起始日期');
				return false;
			}if(etime == ''){
					layer.msg('请选择终止日期');
					return false;
			}if(cardNum == ''){
				layer.msg('请正确输入卡号');
				return false;
			}
			var memberSign = '<span><span class="member-get-sign">'+cardNum+'</span><span class="member-get-sign">'+stime+'-'+etime+'</span></span>'
			if(levelText === '银牌会员'){
				$('.card-level-silver').find('.card-level-select').find('p span').removeClass("unselect").addClass('getmembernum').html(memberSign)
			}else if(levelText === '普通会员'){
				$('.card-level-normal').find('.card-level-select').find('p span').removeClass("unselect").addClass('getmembernum').html(memberSign)
			}

			cardLevel.hide()
			addCard.show()
		})
	// 会员卡信息保存
	var count = 0;
		$('.member-card-sign-save').on('click',function () {
			var  mcNum= $('input[name="member-card-number"]').val()
			;
			count += 1;
			if(mcNum == ''){
				layer.msg('请输入会员编号')
				if(count > 10){
					layer.alert('请输入会员编号，无编号无法保存...',{
						title:false
					})
				}
				return false;
			}
			addNewmemberCard.hide()
			memeberList.show()
			count = 0;
		});
		//取消
		$('.member-card-sign-cacel').on('click',function () {
			addNewmemberCard.hide()
			memberInfo.show()
		});


})