
$(function () {
	var member = '4';
	var  noneCard= $('.noneCard'),
		 memeberList= $('.has-Member'),
		 newMember = $('.add-newmember'),
		 memberInfo = $('.member-info'),
		 addNewMember = $('.add-newmember'),
		 addNewmemberCard = $('.add-newmember-card'),
		 levelText ='',
		 title
		;
	function renderMemberList(member) {
		if (member == '' || member == undefined || member == null) {
			noneCard.show();
			title = '等级设置';
		}else if(member === '1'){
			addNewMember.show();
			title = '添加会员';
		}else if(member === '2'){
			addNewmemberCard.show();
			title = '开通会员';
		}else if(member === '3'){
			addNewmemberCard.show();
			title = '开通会员';
		}else if(member === '4'){
			memberInfo.show();
			title = '会员审核';
		}else {
			memeberList.show();
			title = '会员管理';
		}
		changeTitle(title);
	}
	function changeTitle(title) {
		document.querySelectorAll('title')[0].text = title;
	}
	renderMemberList(member)
	// add new member
	$('.new-member').on('click',function () {
		memeberList.hide()
		newMember.show()
	})
		// 新增会员保存
		$('.add-new-save').on('click',function () {

			newMember.hide()
			memeberList.show();

		})
		// 新增会员取消
		$('.add-new-cancel').on('click',function () {
			newMember.hide()
			memeberList.show()
		})
	// 处理申请信息
	$('.single-member').on('click',function () {
		var _t = $(this),
			mList = $('.has-Member'),
			info = $('.member-info')
			;
		mList.hide()
		info.show()

	})
	// pass apply
	$('.pass-apply').on('click',function () {
		var _t = $(this),
			addCard = $('.add-newmember-card'),
			info = $('.member-info')
			;
		info.hide()
		addCard.show()
	})
	// decline apply
	$('.pass-decline').on('click',function () {
		var notice = confirm('确认拒绝该申请？');
		if (notice) {
			alert('已拒绝本次申请')
			memberInfo.hide()
			memeberList.show()
		}else{
			alert('你可接着处理，也可放松放松待会儿再来处理本次申请')
		}
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
			// console.log(fullname,firstName,secondName,sex,birthday,IDCard,email,phone,addr,submit)

	})
	// 选择会员级别
	$('.card-level').on('click',function () {
		var cardLevel = $('.member-card-level'),
			addCard = $('.member-card-info')
		;
		levelText = $(this).find('.card-level-label').text()
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
			if(stime == '' || etime == '' || cardNum == ''){
				stime? "":alert('请选择起始日期')
				etime? "":alert('请选择终止日期')
				cardNum? "":alert('请正确输入卡号')
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
		$('.member-card-sign-save').on('click',function () {
			var  mcNum= $('input[name="member-card-number"]').val()
			;
			if(mcNum == ''){
				alert('请输入会员卡号')
				return false;
			}
			addNewmemberCard.hide()
			memeberList.show()
		});
		//取消
		$('.member-card-sign-cacel').on('click',function () {
			// memberInfo.removeClass('slideOutRight')
			addNewmemberCard.hide()
			memberInfo.show()
		});


})