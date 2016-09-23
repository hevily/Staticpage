// JavaScript Document
//web 加减购物车，可以通用

$(function(){
	var timestamp = new Date().getTime();

		//开始添加到购物车
				$("body >*").delegate( ".item-addcart","click", function  () {
					
					var $obj=$(this);
							
					//不开启属性的商品且库存不为0的,且不是批发的，且不是分享购买的 可以点开购物车
					if(($obj.data("isuseattributes")==0 )&& ($obj.data("gwc_flag") != "gwc_3") && ($obj.data("limit_wholesale")==0)  && ($obj.data("sharepost_id")==0) ){
								
							//判断没登录让登陆，主要判断静态页上不好加判断的动态商品
						$.get(urlRoot + "Home/Public/isLogin?time="+timestamp,function(response){
							if(response && response.status==-1){
								
								var url_param=location.search;
								if(url_param.indexOf("?")!=-1){   //有参数
								
									var getval=GetQueryString('page');
								
									if(getval==null){  
										var url = location.href+'&page=login';	
									}else{ //已经存在login，直接跳转
										var url=location.href;
									}
								}else{  //无参数
									var url = location.href+'?page=login';
								} 
								location.href = url;
								return false;
								
							}else{
								
								var goods_id=$obj.data("goods_id");
								var goods_itemid=$obj.data("goods_itemid");
									
								$.post("/statichtml/bjmovie01/estores/Home/Cart/checkGoodsCartNum?time=" + timestamp + "&" + Math.random(),{goods_id:goods_id,goods_itemid:goods_itemid},function(v){
										if(v.status==1){
											if(v.goods_qty >0  ){
												alert("该商品在购物车中的数量已经发生改变");
												$(".gwcnumid_"+goods_id+"_"+goods_itemid).text(v.goods_qty);//改变数量
												if(v.limit_buy_attr.limit_buy){
													$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy",v.limit_buy_attr.limit_buy);
													$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy_also",v.limit_buy_attr.limit_buy_also);
													$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy_num",v.limit_buy_attr.limit_buy_num);						
												}
												$(".add_cart_"+goods_id+"_"+goods_itemid).hide();
												$(".reduce_add_"+goods_id+"_"+goods_itemid).show();
																	
												return false;
											}
											addmore(goods_id,goods_itemid,0);//加购物车
										}else{
											console.log(v.msg);	
										}
									})
								}
							
							})
						}
					
				});	
				
})


//采用正则表达式获取地址栏参数   获取url 参数 get 的值	
// 调用方法   alert(GetQueryString("参数名1"));
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

	//减
	function reduceless(goods_id,goods_itemid){
					var timestamp = new Date().getTime();
					
					var obj = $(".reduceless_"+goods_id+"_"+goods_itemid).siblings("span");
					var status=obj.attr("data-status");
					if(status==1){
						return false;
					}
					
					var price=obj.data("shop_price");
					var promotion_itemid=obj.data("promotion_itemid");
					var goods_stock=obj.data("goods_stock");
					var isstockcount=obj.data("goods_isstockcount");//1启用库存 0不启用库存
					var limit_buy=obj.data("limit_buy");//限购数量
					var limit_buy_num=obj.data('limit_buy_num');//还可以购买多少件
					var limit_buy_also=obj.data('limit_buy_also');//已购买多少件
					
					$.post("/statichtml/bjmovie01/estores/Home/Cart/checkGoodsCartNum?time=" + timestamp + "&" + Math.random(),{goods_id:goods_id,goods_itemid:goods_itemid},function(v){
							if(v.status==1){
								//购物车中已删除
								if(v.goods_qty==null ){
									alert("该商品在购物车中的数量已经发生改变");
									$(".gwcnumid_"+goods_id+"_"+goods_itemid).text(0);//改变数量
									$(".add_cart_"+goods_id+"_"+goods_itemid).show();
									$(".add_cart_"+goods_id+"_"+goods_itemid).find("img").attr("src","/statichtml/bjmovie01/estores/Public/images/home/gwc_1.jpg");
									$(".reduce_add_"+goods_id+"_"+goods_itemid).hide();
									return false;
								}
								if(v.goods_qty !=  Number(obj.text()) ){
									
									//购物车中数量改变
									alert("该商品在购物车中的数量已经发生改变");
									$(".gwcnumid_"+goods_id+"_"+goods_itemid).text(v.goods_qty);//改变数量
									if(v.limit_buy_attr.limit_buy){
										$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy",v.limit_buy_attr.limit_buy);
										$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy_also",v.limit_buy_attr.limit_buy_also);
										$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy_num",v.limit_buy_attr.limit_buy_num);						
									}
									return false;
								}
										
									
									
								var num = Number(obj.text());
								if (num >= 1) {
									num = num - 1 ; 
								}else{
									$(".add_cart_"+goods_id+"_"+goods_itemid).show();
									$(".add_cart_"+goods_id+"_"+goods_itemid).find("img").attr("src","/statichtml/bjmovie01/estores/Public/images/home/gwc_1.jpg");
									$(".reduce_add_"+goods_id+"_"+goods_itemid).hide();
									return false;
								}
					
								//加入购物车，异步返回结果	状态
								$.post("/statichtml/bjmovie01/estores/Home/Cart/productAdd?time=" + timestamp + "&" + Math.random(),{goods_id:goods_id,goods_itemid:goods_itemid,goods_qty:num,shop_price:price,promotion_itemid:promotion_itemid},function(response){
									if(response.status==1){
										//数据赋值
											if(response.limit_buy_attr.limit_buy){
												$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy",response.limit_buy_attr.limit_buy);
												$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy_also",response.limit_buy_attr.limit_buy_also);
												$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy_num",response.limit_buy_attr.limit_buy_num);						
											}else{
												$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy",0);
												$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy_also","");
												$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy_num","");									
											}
										$(".gwcnumid_"+goods_id+"_"+goods_itemid).text(num);
										appCart();
										
										if (num<=0) {
											$(".add_cart_"+goods_id+"_"+goods_itemid).show();
											$(".add_cart_"+goods_id+"_"+goods_itemid).find("img").attr("src","/statichtml/bjmovie01/estores/Public/images/home/gwc_1.jpg");
											$(".reduce_add_"+goods_id+"_"+goods_itemid).hide();
										}else{
											
											
										}
										
			
									}else{
										if(response.status!=-5){
											console.log(response.msg);
										}
										
									}
								});
									
							}else{
								console.log(v.msg);	
							}
						})
						
	}
				
	//加		
	//@param c_status  如果是从0状态开始添加 c_status=0,如果是从购物车数量>0开始添加，c_status=1		
	function addmore(goods_id,goods_itemid,c_status){
			
						var timestamp = new Date().getTime();
						
						
						var obj = $(".addmore_"+goods_id+"_"+goods_itemid).siblings("span");
						var status=obj.attr("data-status");
						if(status==1){
							return false;
						}
						
						
						var price=obj.data("shop_price");
						var promotion_itemid=obj.data("promotion_itemid");
						var goods_stock=Number(obj.data("goods_stock"));
						var isstockcount=obj.data("goods_isstockcount");//1启用库存 0不启用库存
						var limit_buy=obj.data("limit_buy");//限购数量
						var limit_buy_num=obj.data('limit_buy_num');//还可以购买多少件
						var limit_buy_also=obj.data('limit_buy_also');//已购买多少件
						
						
						//每次加减购物车前都核实下该商品在购物车中的当前数量,如果不一致，那就先把数量纠正成购物车当前数量再进行加减吧
						$.post("/statichtml/bjmovie01/estores/Home/Cart/checkGoodsCartNum?time=" + timestamp + "&" + Math.random(),{goods_id:goods_id,goods_itemid:goods_itemid},function(v){
							if(v.status==1){
								
								
								
								//购物车中已删除
								if(v.goods_qty==null && c_status==1 ){
									alert("该商品在购物车中的数量已经发生改变");
									$(".gwcnumid_"+goods_id+"_"+goods_itemid).text(0);//改变数量
									$(".add_cart_"+goods_id+"_"+goods_itemid).show();
									$(".add_cart_"+goods_id+"_"+goods_itemid).find("img").attr("src","/statichtml/bjmovie01/estores/Public/images/home/gwc_1.jpg");
									$(".reduce_add_"+goods_id+"_"+goods_itemid).hide();
									return false;
								}
								if(v.goods_qty!=null  && v.goods_qty  != Number(obj.text())   ){
									
									//购物车中数量改变
									alert("该商品在购物车中的数量已经发生改变");
									$(".gwcnumid_"+goods_id+"_"+goods_itemid).text(v.goods_qty);//改变数量
									if(v.limit_buy_attr.limit_buy){
										$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy",v.limit_buy_attr.limit_buy);
										$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy_also",v.limit_buy_attr.limit_buy_also);
										$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy_num",v.limit_buy_attr.limit_buy_num);						
									}
									return false;
								}
								
									//next
									
									var flagCart=0;
									var num = Number(obj.text())+1;
									console.log(num);
									if(isstockcount==0){  //无限制不启用库存
										if(limit_buy==0){ 
											flagCart=1;
											
										}else{ //采用限购
											if(num>limit_buy_num){
												alert("该商品为限购商品，您已下单过"+limit_buy_also+"件，您最多只能添加"+limit_buy_num+"件至购物车");return false;
											}
											flagCart=1;
										}
										
									}else{
										
										if(goods_stock>0){ //库存大于0
											if(num<=goods_stock){
												
												if((num>limit_buy_num) && (limit_buy!=0) ){
													alert("该商品为限购商品，您已下单过"+limit_buy_also+"件，您最多只能添加"+limit_buy_num+"件至购物车");return false;
												}
												flagCart=1;
												
											}else{
													alert("库存不足，无法操作~~");return false;
											}
										}else{
											alert("库存不足，无法操作~~");return false;
										}
									}
						
									if(flagCart==1){
										
										//加入购物车，异步返回结果	状态
										$.post("/statichtml/bjmovie01/estores/Home/Cart/productAdd?time=" + timestamp + "&" + Math.random(),{goods_id:goods_id,goods_itemid:goods_itemid,goods_qty:num,shop_price:price,promotion_itemid:promotion_itemid},function(response){
											if(response.status==1){
												//数据赋值
													if(response.limit_buy_attr.limit_buy){
														$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy",response.limit_buy_attr.limit_buy);
														$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy_also",response.limit_buy_attr.limit_buy_also);
														$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy_num",response.limit_buy_attr.limit_buy_num);						
													}else{
														$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy",0);
														$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy_also","");
														$(".gwcnumid_"+goods_id+"_"+goods_itemid).data("limit_buy_num","");									
													}
												
												$(".gwcnumid_"+goods_id+"_"+goods_itemid).text(num);
												appCart();
												//从购物车变成数量为1
												if(num>0){
														$(".add_cart_"+goods_id+"_"+goods_itemid).hide();
														$(".reduce_add_"+goods_id+"_"+goods_itemid).show();
												}
			
											}else{
												if(response.status!=-5){
													alert(response.msg);
												}
											}
										});
										
									}
									
										
								
							}else{
								console.log(v.msg);	
							}
							
						})
						
						
						
	}
//主动调用ios和andride的加入购物车 横条 和 navbar 购物车数量
function appCart(){
	try {
		console.log("调用appcart");
		
        if(window.cartCountAndMoney){
            window.cartCountAndMoney.getCartCountAndMoney();
        } else {
            //ios的
        	getCartCountAndMoney();
        }
    } catch (e) {
        
    }
}
//触发navbar 购物车数量
function appCartHead(){
	try {
		console.log("调用appcart navbar 购物车数量");
        if(window.cartCountAndMoney){
            window.cartCountAndMoney.getCartCount();
        } else {
            //ios的
        	getCartCount();
        }
    } catch (e) {
        
    }
}

