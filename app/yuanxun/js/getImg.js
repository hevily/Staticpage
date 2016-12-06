/**
html部分规则：
<div class='nidaye'>
<img src="给一个默认图片" data-collectid="333333344"  isnew='yes' />
</div>
**/
//$(function(){
//	getAjaxImg(".pagination-news",100,100,2);
//})

//列表页 图片的展示
//@param object 选择器
//@param object 图片宽度
//@param object 图片高度
//@param object 展示类型，2~5，自己试自己感觉


function getAjaxImg(object,width,height,type){
	var url = "https://shop.yshjie.com/statichtml/bjmovie01/site/public/rest_api/getCollect_public.php"
	$(object).find(".news-img").each(function(){
		var $img = $(this);
		var collectId = $img.data("collectid");
		console.log(collectId)
		
		if(collectId){
//			var data = "?collect_id:"+collectId+"&itemsIndexMin:0&itemsIndexMax:200&itemsLimit:1"
//			$.getJSON(url+data,function(){
//				console.log(1)
//			})
//			
			
			$.ajax({
				type:"post",
				
				//getCollectElems_public.php
//				url:urlRestapi+"getCollect_public.php", 
				
				url:url, 
//				dataType:"jsonp",
				data:'{"collect_id":"'+collectId+'","itemsIndexMin":0,  "itemsIndexMax":200,  "itemsLimit":1  }',
				async:true,
				success:function(response){
					if(response.isSuccess){
						var urlHost = "https://shop.yshjie.com";
						window.urlRoot = urlHost+"/";
						window.urlRoot = urlHost+"/statichtml/bjmovie01/estores/";
						window.imgSrcBase = urlRoot+"Store/Public/img?id="
						
	                    if(response.item.wfemltableid){
	                        $img.attr('src',imgSrcBase+response.item.wfemltableid+"&width="+width+"&height="+height+"&type="+type);
	                    }else if(response.item.elems){
	                        $.map(response.item.elems,function(item){
	                            $img.attr('src',imgSrcBase+item.wfemltableid+"&width="+width+"&height="+height+"&type="+type);
	                        });
	                    }
						$img.attr('isnew',"no");
					}
				}
			});


		}
	});
}

