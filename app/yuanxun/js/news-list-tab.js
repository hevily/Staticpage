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
					
					NewsList+=  "<div class='list  col-lg-4 col-md-4 col-sm-4'>"+
						"<div class='list-box animated fadeInRight'>"+
								"<img src='"+newsImg+"' data-collectid='"+collectid +"' class='news-img' alt='"+newsImgT+"' isnew='no' />"+
								"<div class='news-title'><a href='#'>"+newsTitle+"</a></div>"+
								"<div class='news-time-editer'>"+
									newsDate+"&nbsp;&nbsp;by&nbsp;&nbsp;<span class='editer-dark'>"+newsEditer+"</span></div>"+
								"<div class='news-desc'>"+newsDesc+"</div>"+
								"<div class='news-detail'><a href='"+newsDetail+"'>更多<span>>></span></a></div>"+
								"<div class='news-share'><hr />分享"+
									"<div class='share-icon'>"+
										"<a href='#'><img src='../img/news/news-list/share/fb-d.png' alt='' /><img src='../img/news/news-list/share/fb.png' alt='' /></a>"+
										"<a href='#'><img src='../img/news/news-list/share/wb-d.png' alt=' '/><img src='../img/news/news-list/share/wb.png' alt='' /></a>"+
										"<a href='#'><img src='../img/news/news-list/share/pyq-d.png' alt=' '/><img src='../img/news/news-list/share/pyq.png' alt=' '/></a>"+
										"<a href='#'><img src='../img/news/news-list/share/wx-d.png' alt=' '/><img src='../img/news/news-list/share/wx.png' alt='' /></a>"+
									"</div>"+
								"</div>"+
						"</div></div>"
				}
			  	$(goal).find('.news-lists').html(NewsList)
			  	getAjaxImg(".pagination-news",346,208,3);
			  	$(window).scrollTop(0)
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
		})		  	
		  	
	}
		
	(function getPage (){
		$.ajax({
			type:"get",
			url:"../js/getPage.json",
			async:true
		}).fail(function(){
			
		}).done(function(data){
			var allP = data.allP,
				hmcP = data.hmcP,
				movP = data.moviehelperP
				
			//		all
			laypage({
				cont: $('#pannelA .news-lists-control'), //容器。值支持id名、原生dom对象，jquery对象,
				pages: allP, //总页数
				skip: false, //是否开启跳页
				skin: '#AF0000',
				groups: 5, //连续显示分页数
				first: false,
				last: false,
				prev: '<', //若不显示，设置false即可
				next: '>',
				jump:function(obj){
					getdata({
							"url":'../js/news.json',
							"type":"all",
							"page":obj.curr,
							"goal":".pannelA"
					})
				}
			});	
			
			
		//		moviehelper
		laypage({
			cont: $('#pannelm .news-lists-control'), //容器。值支持id名、原生dom对象，jquery对象,
			pages: movP, //总页数
			skip: false, //是否开启跳页
			skin: '#AF0000',
			groups: 5, //连续显示分页数
			first: false,
			last: false,
			prev: '<', //若不显示，设置false即可
			next: '>',
			jump:function(obj){
				getdata({
						"url":'../js/news.json',
						"type":"moviehelper",
						"page":obj.curr,
						"goal":".pannelm"
				})
			}
		});	
		
		
		//		hmc
		laypage({
			cont: $('#pannelhmc .news-lists-control'), //容器。值支持id名、原生dom对象，jquery对象,
			pages: hmcP, //总页数
			skip: false, //是否开启跳页
			skin: '#AF0000',
			groups: 5, //连续显示分页数
			first: false,
			last: false,
			prev: '<', //若不显示，设置false即可
			next: '>',
			jump:function(obj){
				getdata({
						"url":'../js/news.json',
						"type":"hmc",
						"page":obj.curr,
						"goal":".pannelhmc"
				})
			}
		});	
				
		});
	})()

})
