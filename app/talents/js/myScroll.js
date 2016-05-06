				$(document).ready(function(){
					function myScroll(){
						var myScroll=new IScroll("#wrapper",{
					 		snap:"li"
					 	});
					 	var currentLi = null;
					 	myScroll.on('scrollEnd', function(){
					 		var position,index=0;
					 		// console.log(this.y);
					 		position = this.y;
					 		index = position/40;
					 		console.log(-index);
					 		liIndex = parseInt(-index+1)
					 		currentLi = $("#scroller li").eq(liIndex);
					 		console.log(currentLi);
					 		currentLi.addClass('current');
					 		return currentLi ;
					 	});
					 	$(".select-cancel").delegate(".selecting","click",function(e){
					 		var liIndex=0;
					 		// liIndex = (parseInt(ind+1));
					 		// currentLi = $("#scroller li").eq(liIndex);
					 		currentLi.addClass('current');
					 		// console.log("当前滚动至："+liIndex);
					 		//alert($("#scroller li").eq(liIndex).text());
					 		var Classvalue = $(this).attr("Classvalue");
					 		$("."+Classvalue).val(currentLi.text());
					 		$(".backdrop,.layer").remove();
					 	});
					}myScroll();
				})
// <script src="../../js/myScroll.js"></script>

