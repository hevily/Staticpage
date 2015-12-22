/**
 * Created by pc on 2015/8/20.
 */
$(document).ready(function(){
    //展开收起场次
    $(".billing-title").click(function(){
        if($(this).hasClass("openingBill")){
            $(this).removeClass("openingBill").next(".billing-details").hide();
        }else{            
            $(this).addClass("openingBill").next(".billing-details").show();
            var imgS = $(this).next(".billing-details").find("li"),arrayHeight = new Array(), imgSL = imgS.length, lowest = 0, maxest = 0;
            var imgLi = $(this).next(".billing-details").find("img");
            for(var i = 0;i<imgSL;i++){
                var imgSH = imgS.eq(i).height();
                arrayHeight[i] = imgSH;
            }
          //比较数组最小值&&最大值
           function numOfSmallest(a){
                for(var i = 0;i<imgSL;i++){
                    if (a[i]<a[lowest]) lowest = i;
                    if (a[i]>a[maxest]) maxest = i;
                }
                return lowest+maxest;
           }
            numOfSmallest(arrayHeight);
            for(i = 0;i<imgSL;i++){
                imgLi.eq(i).css("height",arrayHeight[lowest]);
            }
        }
    });

   //至此开始后面未使用
    //编辑相册按钮 进入编辑模式
    $(".edit-photo").click(function(){
        if($(this).hasClass("editing-photo")){
            $(this).removeClass("editing-photo");
            $(".billing-details").hide();
            $(".select-all").hide();
            $(".openingBill").removeClass("openingBill");
            $(".select-picture").removeClass("select-picture");
            $(".select-one-picture").removeClass("select-one-picture");
        }else{
            $(this).addClass("editing-photo");
            $(".billing-title").addClass("openingBill");
            $(".billing-details").show();
            $(".select-all").show();
        }

    });

    //选择全部照片
    $(".select-all").click(function(e){
        if($(this).hasClass("select-picture")){
            $(this).removeClass("select-picture");
            $(this).closest(".billing-title").next(".billing-details").find(".select-one").removeClass("select-one-picture");
        }else{
            $(this).addClass("select-picture");
            $(this).closest(".billing-title").next(".billing-details").find(".select-one").addClass("select-one-picture");
        }
        e.stopPropagation();
    });
    //单张照片选择
    $(".billing-photo img:nth-child(1)").click(function(){
        if($(".edit-photo").hasClass("editing-photo")){
            if($(this).next(".select-one").hasClass("select-one-picture")){
                $(this).next(".select-one").removeClass("select-one-picture");
            }else{
                $(this).next(".select-one").addClass("select-one-picture");
            }
        }
    })
    //删除选中照片

    $(".del-select-photo").click(function(){
        $(".select-one-picture").closest("li").remove();
    })
});
