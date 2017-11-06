/**
 * Created by lzx on 2016/4/17.
 */
$.fn.lunbo = function(object) {
        var canshu = $.extend({
            itemWidth : null,
            moveIndex : 0,
            moveWidth : 0,
            time : 3000,
            autoplay : true
        }, object);
        var start;
        var animate = true;
        var index = 0;
        var prev = $(this).find(".before");
        var next = $(this).find(".after");
        var lunbo = $(this).find(".carousel");
        var lunboItem = lunbo.children();
        var moveWidth = canshu.moveWidth ? canshu.moveWidth : lunboItem.eq(0).width();
        var pagenation = $(this).find(".pagenationAll");
        var length = lunboItem.length;
        var endIndex = canshu.moveIndex ? Math.ceil(length/canshu.moveIndex) : length;
        //初始化
        lunbo.width(endIndex * moveWidth);
        for( var i = 0;i< endIndex;i ++){
            if(i == 0){
                pagenation.append("<span class='fl active'></span>");
            }else{
                pagenation.append("<span class='fl'></span>");
            };
        };
        var page = pagenation.children("span");
        //********====**********//
        var carousel = function(){
            index ++;
            if(index == endIndex){
                index = 0;
            }
            pageclick();
        };
        prev.on("click",function(){
            if(!animate){
                return;
            };
            index --;
            if(index == -1){
                index = endIndex-1;
            };
            pageclick();
        });
        next.on("click",function(){
            if(!animate){
                return;
            };
            index ++;
            if(index == endIndex){
                index = 0;
            };
            pageclick()
        });
        page.on("click",function() {
            index = $(this).index();
            pageclick();
        })
        function pageclick(){
            page.eq(index).addClass("active").siblings().removeClass("active");
            animate = false;
            lunbo.animate({
                left : -moveWidth * index
            },500,function(){
                setTimeout(function(){animate = true;},500)
            });
        };
        if(canshu.autoplay){
            start = setInterval(carousel,canshu.time);
        }
        $(this).on("mouseover",function(){
            clearInterval(start);
        }).on("mouseout",function(){
        	if(canshu.autoplay){
                start = setInterval(carousel,canshu.time);
            }
        });
    };