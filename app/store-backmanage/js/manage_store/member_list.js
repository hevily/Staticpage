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
			changeTitle('会员资料')
		})

		// member-info-cancel
		$('.member-info-cancel').on('click',function () {
			memberInfo.hide()
			memberList.show()
			changeTitle('会员列表')
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
			changeTitle('解除会员')
		})
			// relationship free cancel
			$('.relationShip-cancel').on('click',function () {
				relationShipFree.hide()
				memberInfo.show()
				changeTitle('会员资料')
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
							    changeTitle('会员列表')
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
			changeTitle('编辑会员信息')
		})
			// edit info cancel
			$(".edit-info-cancel").on('click',function () {
				editInfo.hide()
				memberInfo.show()
				changeTitle('会员资料')
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
				changeTitle('会员资料')
			});
		// change card
		$('.change-card').on('click',function () {
			var cardNum = $('.card-number-txt').find('span').text();
				$('input[name="member-card-number"]').val(cardNum);
			memberInfo.hide()
			memberCardChange.show()
			changeCard.show()
			changeTitle('变更会员卡')
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
					changeTitle('会员等级设置')
				})
				// 会员卡级别选择
					$('.member-card-level-cancel').on('click',function () {
						var cardLevel = $('.member-card-level'),
							addCard = $('.member-card-info')
						;
						cardLevel.hide()
						addCard.show()
						changeTitle('变更会员卡')
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
						changeTitle('变更会员卡')
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
						changeTitle('会员资料')
					});
					//取消
					$('.member-card-sign-cacel').on('click',function () {
						changeCard.hide()
						memberInfo.show()
						changeTitle('会员资料')
					});

	// 会员列表-消费信息
		var shoppingList = $('.shopping-list'), // 消费信息
			moneyDetail = $('.money-detail'), // 消费明细
			moneyLog = $('.section.money-log'), // 消费记录
			integralDetail = $('.integral-detail'), // 积分明细
			integralUse = $('.integral-use'), // 积分兑现
			integralAdd = $('.integral-add'), // 新增积分
			addNewMoneyLog = $('.add-new-money-log'), // 新增消费记录
			addIntegralGift = $('.add-integral-gift'), // 新增 赠送积分
			cashIntegral = $('.cash-integral') // 兑现积分

			;

		// 消费记录展示
		$('li.money-log').on('click',function () {
			shoppingList.hide()
			moneyLog.show()
			changeTitle('消费记录')
		})
		// 消费记录 取消
		$('.money-log-back').on('click',function () {
			moneyLog.hide()
			shoppingList.show()
			changeTitle('消费记录')
		})
		// 新增消费记录
		$('.money-log-add').on('click',function () {
			addNewMoneyLog.show()
			moneyLog.hide()
			changeTitle('新增消费记录')
			})
			// 新增消费记录 取消
			$('.add-money-log-cancel').on('click',function () {
				addNewMoneyLog.hide()
				moneyLog.show()
				changeTitle('消费记录')
			})
			// add-money-log-submit
			$('.add-money-log-submit').on('click',function () {
				var addMoneyLog = $('.add-new-money-log'),
					shoppingDay = addMoneyLog.find('input[name="shoppingDay"]'),
					shoppingCash = addMoneyLog.find('input[name="shoppingCash"]'),
					integralStartTime = addMoneyLog.find('input[name="integralStartTime"]'),
					integralEndTime = addMoneyLog.find('input[name="integralEndTime"]'),
					integralNum = addMoneyLog.find('input[name="integralNum"]'),
					leaveMsg = addMoneyLog.find('.leaveMsg'),
					email = addMoneyLog.find('input[name="email"]')
				;
				var logInfo = new Array();
				if($('#checkbox_c1').is(':checked ')){
					logInfo.push(shoppingDay.val(),shoppingCash.val(),integralStartTime.val(),integralEndTime.val(),integralNum.val())
				}else{
					logInfo.push(shoppingDay.val(),shoppingCash.val())
				}
				for(var i in logInfo){
					if(logInfo[i]=='' || logInfo[i] == undefined){
						var txt = addMoneyLog.find('li').eq(i).find('.input-label').text()
						layer.msg('请输入'+txt+'的内容');
						return false;
					}
				}
				layer.msg('消费记录新增成功');
				setTimeout(function () {
					addNewMoneyLog.hide();
					moneyLog.show();
					changeTitle('消费记录')
				},500)
			})
		// 赠送积分
		$('.integral-add-btn').on('click',function () {
			addIntegralGift.show()
			moneyLog.hide()
			var ind = $(this).closest('li').index()
			$('.add-integral-gift-cancel').attr('data-ind',ind)
			changeTitle('赠送积分')
		})
			// 赠送积分取消 同新增积分取消
			
			// 赠送积分提交 同新增积分提交
			
			// 兑现积分
			$('li.integral-use').on('click',function () {
				cashIntegral.show()
				shoppingList.hide()
				changeTitle('兑换积分')

				})
				// 兑换积分取消
					$('.cash-integral-cancel').on('click',function () {
					cashIntegral.hide()
					shoppingList.show()
					changeTitle('消费记录')
				})
				// 兑换积分 确认
				$('.cash-integral-submit').on('click',function () {
					var cashIntegralBox = $('.cash-integral'),
						cashTime = cashIntegralBox.find('input[name="cashIntegralTime"]'),
						cashIntegralNum =  cashIntegralBox.find('input[name="cashIntegralNum"]'),
						leaveMsg = cashIntegralBox.find('.leaveMsg')
					;
					var cashArray = new Array()
					cashArray.push(cashTime.val(),cashIntegralNum.val());
					for(i in cashArray){
						if(cashArray[i] == '' || cashArray[i] == undefined){
							// console.log(i-0+1)
							var txt = cashIntegralBox.find('li').eq(i-0+1).find('.input-label').text()
							layer.msg('请输入'+ txt +'的内容');
							return false;
						}
					}
					layer.msg('积分已兑换');
					setTimeout(function () {
						cashIntegral.hide()
						shoppingList.show()
						changeTitle('消费记录')
					},500)
				})

			// 新增积分
			$('li.integral-add').on('click',function () {
				addIntegralGift.show();
				$('.add-integral-gift-cancel').addClass('shoppingList')
				shoppingList.hide()
				changeTitle('新增积分')
				})
				// 新增积分 取消
				$('.add-integral-gift-cancel').on('click',function () {
					hideAddIntegral()
				})
				// 新增积分 确认
				$('.add-integral-gift-submit').on('click',function () {
					var addIntegralNum = $('.add-integral-gift'),
						startTime = addIntegralNum.find('input[name="startTime"]'),
						endTime = addIntegralNum.find('input[name="endTime"]'),
						integralNum = addIntegralNum.find('input[name="integralNum"]')
					;
					var addIntegralArray = new Array();
					addIntegralArray.push(startTime.val(),endTime.val(),integralNum.val());

					for(var i in addIntegralArray){
						if(addIntegralArray[i] == '' || addIntegralArray[i] ==  undefined){
							var txt = addIntegralNum.find('li').eq(i).find('.input-label').text()
							layer.msg('请输入'+txt+'的内容')
							return false;
						}
					}
					var ind = $('.add-integral-gift-cancel').attr('data-ind'),
						num = integralNum.val()
					;
					hideAddIntegral(ind,num)
					layer.msg('已增加积分')
				})
				function hideAddIntegral(ind,num) {
					addIntegralGift.hide()
					var cn = 'shoppingList'
					if($('.'+cn).length != 0){
						shoppingList.show()
					}else{
						var integralGoal = $('.money-log-list').find('li').eq(ind).find('.media-body');
						integralGoal.addClass('gifted');
						integralGoal.find('p:nth-child(2)').text(num)
						moneyLog.show()
					}
					changeTitle('消费记录')
					$('.'+cn).removeClass(cn)
				}
})