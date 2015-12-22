// JavaScript Document
$(function(){
				var screenHeight,
					screenWidth,
					popMenuHeight,
					$Win = $(window),
					bannersHeight,
					oneHeight,
					myscroll1,
					quarter, 
					bFlag = true,
					preventDefault,
					oneWidth;
					preventDefault=function(e){
							e.preventDefault();
						}
					var menuBtns = $(".menuBtn");
				//弹窗菜单导航js	
				var popMenu = {
					openMenu:function(){
						screenHeight =$(window).height();
						screenWidth = $(window).width();
						headerHeight = $("#header").outerHeight();
						popMenuHeight = screenHeight -headerHeight ;
						oneHeight = $("#popMenu").find("li").height();
						quarter = parseInt(screenWidth/4,10);
						$("#popMenu").find("li").css({width:screenWidth+'px'});
						$("#popMenu").find("li a").css({width:quarter-1+'px',height:oneHeight-1+'px'});
						$("#popMenu").css({width:'100%',height:popMenuHeight+'px',position:'absolute',left:0,top:headerHeight+'px',zIndex:1000,overflow:'hidden',backgroundColor:'rgba(106,84,54,0.98)'});
						
						},
					init:function(){
							popMenu.openMenu();	
							$(".menuItems").each(function(index, element) {
								if($(this).find("li").length>=2){
									$(this).css({height:oneHeight*2+'px',overflow:'hidden'})
									}else {
										$(this).css({height:oneHeight+'px',overflow:'hidden'})	
										}
							});					
							if(bFlag){																	
									$("#popMenu").hide();	
									$("#popMenu").slideDown(600);
									bFlag = false;
									setTimeout(function () { myscroll1=new IScroll("#popMenu",{mouseWheel:true,preventDefault:false,useTransform:true})},600);
									$("body").css({overflow:"hidden"})
									if(document.addEventListener){
										document.addEventListener('touchmove',preventDefault,false);	
										}
									else {
											document.attachEvent('ontouchmove',preventDefault);
										}
													
								}
							else{
									$("#popMenu").slideUp('fast');
									bFlag = true;
									popMenu.showMore();
									menuBtns.removeClass('active').children("span").html("展开更多");
									$("body").css({overflow:"auto"})
									document.removeEventListener('touchmove',preventDefault,false);
									if(document.removeEventListener){
										document.removeEventListener('touchmove',preventDefault,false);	
										}
									else {
											document.attachEvent('ontouchmove',preventDefault);
										}	
									
								}						
						},
					reset:function(){
							popMenu.openMenu();	
							popMenu.refresh();		
						},
					resize:function(){
						
								popMenu.reset();
													
						},
					refresh:function(){
								setTimeout(function () {
									myscroll1.refresh();
								}, 0);	
							},
						//点击展开按钮js
						showMore:function(){
								menuBtns.each(function(i){			
										var openBtn = true;
										$(this).on('click',function(){												
												var _this = $(this);
												var curIndex = _this.index(this);
												var liSize = 0;
												liSize = $(this).parent().find("ul li").length;
												if(openBtn){
													_this.addClass("active").children("span").html("收起");
													_this.parent().find("ul").stop().animate({height:liSize*oneHeight+'px'},400,function(){
														popMenu.refresh();
														openBtn = false;
														
														});
													
													
												}else {
													_this.removeClass("active").children("span").html("展开更多");
													_this.parent().find("ul").stop().animate({height:2*oneHeight+'px'},400,function(){popMenu.refresh();
													openBtn = true;
													
														});
													
													}
											})
									})
							}	
										
				};
				$(window).resize(function(){
					popMenu.resize();
					});
				popMenu.showMore();
				$(".showMenu").on("click",function(){
						$(this).toggleClass('hideMenu');	
						popMenu.init();
						popMenu.reset();
					});	



				var topValue=0,
				interval=null;
				var sW = ($(".footer").height())
				$(".scrollTop").css("bottom",sW)
				$(window).scroll(function(){
					clearInterval(interval);
					$(".scrollTop").hide();
					interval=setInterval(function(){test()},2000);
					topValue=$(window).scrollTop;
				})

				function test(){
					if($(window).scrollTop==topValue){
						$(".scrollTop").show();
						clearInterval(interval);
					}
				}
				$(".scrollTop").click(function(){
					$(window).scrollTop(0);
				})
			})


/* 导航2处理 */
$(function(){
	$("#Refooter").css({"bottom":"-"+$("#Refooter").height()+"px"});
	$("#swtIcon_Counter").html(GetRandomNum(3,9));
	
    var myScroll2=null;
    
    function menuInit(){
        var _menuScroll = $(".menuScroll");
        var _menuScroll_size = _menuScroll.find("li").length;
        var liWidth = 0;					
        $(".menuScroll li").each(function(){
            liWidth +=$(this).outerWidth()	;
        });					
        _menuScroll.css({width:liWidth+1+'px'});
        function loaded(){
            myScroll2=new IScroll(".menus",{ventPassthrough: true, scrollX: true, scrollY: false, preventDefault:false});
            $(".menuScroll li").each(function(index){
                if($(this).attr("selfid")==_McSelfId){
                    var _this = document.querySelector('#menuScroll li:nth-child('+index+')',500);
                    $(this).addClass("active").siblings().removeClass("active");
                    myScroll2.scrollToElement(_this);
                }
            });
        }
        window.addEventListener("DOMContentLoaded",loaded,false);
    }			
    menuInit();
    $(window).resize(function(){
            menuInit();
    });							
})