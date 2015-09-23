				$(document).ready(function(){
					var myScroll=new IScroll("#wrapper",{
				 		snap:"li"
				 	});
				 	var ind = null;
				 	myScroll.on('scrollEnd', function(){
				 		var position,index=0;
				 		// console.log(this.y);
				 		position = this.y;
				 		index = position/40;
				 		console.log(-index);
				 		return ind = -index;
				 	});
				 	$(".select-cancel").delegate(".selecting","click",function(e){
				 		 // e.stopPropagation();
				 		var liIndex=0;
				 		liIndex = (parseInt(ind+1));
				 		console.log("当前滚动至："+liIndex);
				 		alert($("#scroller li").eq(liIndex).text());
				 	})
				})
// <script src="../../js/myScroll.js"></script>