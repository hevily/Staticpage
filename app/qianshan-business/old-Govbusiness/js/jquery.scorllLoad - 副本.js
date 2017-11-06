/**
 * Created by wangliang 20160909 for optimised page
 */
(function($){
    //默认参数
    var defaults = {
        url:'',
        data:'',
        success:function(data){console.log(data)},
        error:function(data){console.log(data)},
    };

    //检测参数是否合法
    function isValid(options) {
        return !options || (options && typeof options === "object") ? true : false;
    }

    //主函数
    $.fn.extend({
        scorllLoad:function(options){
            if(!isValid(options)){return this;} //检测用户传进来的参数是否合法
            var opts = $.extend({}, defaults, options); //使用jQuery.extend 覆盖插件默认参数
            var params = { //初始化参数
                "options" : opts,
                "object":this,
            }
            var hasCame;
            $(window).bind("scroll",function(){
            	
                var scrollTop = $(this).scrollTop();//滚动条顶部距离
                var scrollHeight = $(document).height();//页面总高度
                var windowHeight = $(this).height();//可视区域高度
                var objectHeight = params.object.offset().top;//要加载区域距离顶部的高度

                if( scrollTop < objectHeight && scrollTop > (objectHeight - windowHeight) && hasCame != objectHeight){
                    handleData(params);
                    hasCame = objectHeight;
                }
            });
        }
    });

    function handleData(params){
        console.log("开始获取数据")
        $.ajax({
            type:"post",
            url:params.options.url,
            data:params.options.data,
            async:true,//false是同步请求
            dataType:"json",
            success:function(data){params.options.success(data)},
            error:function(data){params.options.error(data)},
        });
    }
})(jQuery);