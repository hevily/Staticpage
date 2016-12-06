/**
 * Created by Administrator on 2016/1/26.
 */
(function($){
    $.fn.extend({
        validate:function(){
            var patterns = {
                'email':/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
                'mobile':/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
                'idCard':/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/,
                'telORemail':/(\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14})|(^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$)/
            }
            if($(this).hasClass("required")){
                if($.trim($(this).val()).length<=0){
                    $(this).siblings("i").addClass("errorTip").text($(this).attr("data-empty"));
                }else {
                    $(this).siblings("i").removeClass("errorTip");
                    var regex = $(this).attr("data-regex");
                    if (typeof(regex) != "undefined") {
                        var pattern = patterns[regex];
                        if (!eval(pattern).test($.trim($(this).val()))&&($.trim($(this).val()).length>0)) {
                            var msg = $(this).attr("data-errMsg");
                            $(this).siblings("i").addClass("errorTip").text(msg);
                        }
                    }
                }
            }
        }
    })
})(jQuery);