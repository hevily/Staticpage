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
	$.ajax({
		url:"../js/news-list.json",
		cache:false,
	}).fail(function(){
		alert('there is something wrong here')
	}).done(function(data){
		var hmcN = data.hmc,mN = data.moviehelper,
			hmcP = hmcN.length,mP = mN.length,
			allPages = hmcP + mP;
		 
		console.log(allPages)
//		all
		laypage({
		  cont: $('#pannel1 .news-lists-control'), //容器。值支持id名、原生dom对象，jquery对象,
		  pages: allPages, //总页数
		  skip: false, //是否开启跳页
		  skin: '#AF0000',
		  groups: 5, //连续显示分页数
		  first: false,
  		  last: false,
		  prev: '<', //若不显示，设置false即可
		  next: '>',
		  jump:function(obj){
//		  	$('#pannel1 .news-lists').text(obj.curr)
		  }
		});
//		hmc
		laypage({
		  cont: $('#pannelhmc .news-lists-control'), 
		  pages: hmcP, 
		  skip: false, 
		  skin: '#AF0000',
		  groups: 5, 
		  first: false,
  		  last: false,
		  prev: '<', 
		  next: '>',
		  jump:function(obj){
//		  	$('#pannelhmc .news-lists').text(obj.curr+"----")
		  }
		});
		
		
	})
})
