window.onload = function(){
	
}
$(function(){
	var tabs = $('.pagination-news').find('.tab');
	var tabChange = function(tab){
		var pannels = $(tab).find('.pannel'),CN = 'news-active'
		$(tab).find('.tab').click(function(){
			$('.tab.'+CN).removeClass(CN)
			var Ind = $(this).addClass(CN).index()
			console.log(Ind)
			pannels.hide().removeClass(CN);
			pannels.eq(Ind).show().addClass(CN)
		})
		
		
	}
		new tabChange('.pagination-news')
	
	
	
	function setNews(data,goal,obj){
		  		var data = data,
			  		NewsList=""
//			  		console.log(data)
				for(var i=0;i<data.length;i++ ){
					newsImg    = data[i].img
					collectid  = data[i].collect_id
					
					newsImgT   = data[i].img_title
					newsTitle  = data[i].title
					newsDate   = data[i].date_time
					newsEditer = data[i].editer
					newsDesc   = data[i].desc
					newsDetail = data[i].detail_link
					
					NewsList+=
						"<div class='list  col-lg-4 col-md-4 col-sm-4'>"+
						"	<div class='list-box'>"+
						"		<a class='hoverLarger' href='news-details.html'><img src='"+newsImg+"' class='news-img' alt='"+newsImgT+"' data-collectid='"+collectid+"'/></a>"+
						"		<div class='news-title'><a href='news-details.html'>"+newsTitle+"</a></div>"+
						"		<div class='news-desc'>"+newsDesc+"</div>"+
						"		<div class='news-detail'>"+
						"			<a href='javascript:;' class='more-detail'>更多<span>>></span></a>"+
						"			<div class='share-icon'>"+
						// "<div class='bdsharebuttonbox' data-tag='share_1'><a class='bds_more' data-cmd='more'>更多</a><a class='bds_weixin' data-cmd='weixin'></a><a class='bds_tsina' data-cmd='tsina' href='#'></a><a class='bds_fbook' data-cmd='fbook'></a></div>"+
						"				<a href='#' title='更多分享'><img src='./img/news/news-list/share/more.png'></a><a href='#' title='分享到微信'><img src='./img/news/news-list/share/wx-f.png'></a><a href='#' title='分享到新浪微博'><img src='./img/news/news-list/share/wb-f.png'></a><a href='#' title='分享到facebook'><img src='./img/news/news-list/share/facebook.png'></a >"+
						"			</div>"+
						"		</div>"+
						"		<div class='news-info'><div class='news-editer'>"+newsEditer+"</div><div class='news-time'>"+newsDate+"</div></div>"+
						"	</div>"+
						"</div>"
				}
			  	$(goal).find('.news-lists').html(NewsList)
			  	getAjaxImg(".pagination-news",346,208,3);
			  	$(window).scrollTop(0)
		  	}
		function forceLoadBaiduShare(){
		    console.log('forceLoadBaiduShare')
		    delete window._bd_share_main
		    setTimeout(function(){ 
		        if($('.share-icon').size()>0){
		            setTimeout(function(){
		                with (window.document)0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'https://o7oquuacu.qnssl.com/static/api/js/share.js'];
		            },2000)
		        }else{ 
		            forceLoadBaiduShare()
		        }
		    }, 500);
		}


	function getdata(option){
		var url= option.url,
			type=option.type,
			page=option.page,
			goal=option.goal
		$.ajax({
			url:url,
			data:{
				type:type,
				page:page
			},
			type:"get",
			cache:false,
		}).fail(function(){
			alert('there is something wrong here')
		}).done(function(data){	
//			console.log(data)
			setNews(data,goal,page)
			$('.spinner').hide()

			window._bd_share_config = {
			    "common": {
			        "bdSnsKey": {},
			        "bdText": "",
			        "bdMini": "2",
			        "bdMiniList": false,
			        "bdPic": "",
			        "bdStyle": "0", 
			        "bdSize": "16"
			    }, "share": {}
			};    
			forceLoadBaiduShare()
		})
	}

	(function getPage (){
		$.ajax({
			type:"get",
			url:"./js/getPage.json",
			async:true
		}).fail(function(){
			
		}).done(function(data){
			var allP = data.allP;
			//		all
			laypage({
				cont: $('#pannelA .news-lists-control'), //容器。值支持id名、原生dom对象，jquery对象,
				pages: allP, //总页数
				skip: false, //是否开启跳页
				skin: '#0993D5',
				groups: 5, //连续显示分页数
				first: false,
				last: false,
				prev: '<', //若不显示，设置false即可
				next: '>',
				jump:function(obj){
					getdata({
							"url":'./js/news.json',
							"type":"all",
							"page":obj.curr,
							"goal":".pannelA"
					})
					$(".spinner").show();
				}
			});

		});
	})()


	
	



})
