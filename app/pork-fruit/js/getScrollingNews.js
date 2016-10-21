function getNews(stores_id,callback){
	 var timestamp = new Date().getTime() , newsData = [],data = {};
    $.getJSON("https://shop.yshjie.com/statichtml/bjmovie01/estores/Mall/Public/getScrollingNews?time="+timestamp,function(jsonData){
		 var data = jsonData ;
		 if ($.isFunction(callback)){
		 	callback(newsJson);
		 }
	})
}
