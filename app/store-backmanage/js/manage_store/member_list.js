$(function () {
	// 会员列表-会员信息
		var memberList = $('.member-list-home-filter'),// 会员列表
			memberInfo = $('.member-info'),// 会员信息
			relationShipFree = $('.relationShip-free'),// 解除关系
			editInfo = $('.edit-info-box'), // 修改资料
			memberCardChange = $('.member-card-change'), // 会员信息修改
			changeCard = $('.member-card-info'), // 会员卡资料卡号编辑
			cardLevel = $('.member-card-level') //会员卡等级设置
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

		// member-info-cancel
		$('.member-info-cancel').on('click',function () {
			memberInfo.hide()
			memberList.show()
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
				editInfo.hide()
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
					inputinfo.push(fullname.val(),firstName.val(),secondName.val(),sex.val(),birthday.val(),IDCard.val(),email.val(),phone.val(),addr.val(),submit.val());
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
			});
		// change card
		$('.change-card').on('click',function () {
			var cardNum = $('.card-number-txt').find('span').text();

				$('input[name="member-card-number"]').val(cardNum);
				console.log(cardNum)
			memberInfo.hide()
				memberCardChange.show()
			changeCard.show()
		})
			// change card level
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
						$('.card-number-txt').find('span').text(mcNum)
						changeCard.hide()
						memberInfo.show()
						count = 0;
					});
					//取消
					$('.member-card-sign-cacel').on('click',function () {
						changeCard.hide()
						memberInfo.show()
					});

	// 会员列表-消费信息
	var a
})