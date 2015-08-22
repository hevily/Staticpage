/**
 * Created by pc on 2015/8/14.
 */



$(document).ready(function(){

    function showLayer(){
        $(".layerOut").show();
    }
    $(".cancel-layout").click(function(){
        $(".layerOut").hide();
    });
    $(window).resize( function(){
        $(".profile").width($(".step-details ").width()-$(".profile-edit ").width()-1);
        $(".email").width($(".step-details").width()-$(".send-email").width()-2);
    });

//        剧本大纲导入
    $(".chara").click(function(){
        $(".selecting").removeClass("selecting");
        $(this).addClass("selecting");
        showLayer();
    });

//        人物小传导入
    $(document).delegate(".edit-img a","click",function(){
        if($(".editing").length == 0){
            $(this).closest(".step-details").addClass("editing");
            $(this).closest(".edit-img").hide().next(".save-btn").show();
            $(this).closest(".step-details").find(".profile input").removeAttr("readonly").eq(0).focus();
        }else{
            alert("请先完成当前编辑！")
        }
    });

//        取消编辑人物小传
    $(document).delegate(".save-btn .cancel-profile","click",function(){
        var Input = $(this).closest(".step-details").find(".profile input");
        var inputV0 = Input.eq(0).val();
        var inputV1 = Input.eq(1).val()
//            if(inputV0 =="" || inputV1 ==""){
//                alert("不要慌,是不是还有什么忘了填?");
//            }else{
        Input.eq(0).value=inputV0;
        Input.eq(1).value=inputV1;
        $(".editing").removeClass("editing");
        $(this).closest(".save-btn").hide().prev(".edit-img").show();
        $(this).closest(".step-details").find(".profile input").attr("readonly","readonly");
//            }

    });

//        保存人物小传
    $(document).delegate(".save-btn .save-profile","click",function(){
        var Input = $(this).closest(".step-details").find(".profile input");
        var inputV0 = Input.eq(0).val();
        var inputV1 = Input.eq(1).val();
        if(inputV0 =="" || inputV1 ==""){
            alert("不要慌,是不是还有什么忘了填?");
        }else{
            Input.eq(0).value=inputV0;
            Input.eq(1).value=inputV1;
            $(".editing").removeClass("editing");
            $(this).closest(".save-btn").hide().prev(".edit-img").show();
            $(this).closest(".step-details").find(".profile input").attr("readonly","readonly");
        }
    });

    $(".btn-add-actor input").click(function(){
        if($(".editing").length == 0){
            var tInput = "角色名称",bInput = "给点提示，来点幽默，小小点评。";
            appendText (tInput,bInput);
            $(this).closest(".btn-add-actor").next(".step-details").find(".profile input").eq(0).focus();

        }
    });
    function appendText (tInput,bInput){
        $(".btn-add-actor").after(" <div class='step-details clearfix editing'>"+
            "<div class='profile'>"+
            "<div class='profilename'>"+
            "<input type='text' placeholder='"+ tInput +"'/>"+
            "</div>"+
            "<div class='profile-detail'>"+
            "<input type='text' placeholder='"+ bInput +"'/>"+
            "</div>"+
            "</div>"+
            "<div class='profile-edit'>"+
            "<div class='edit-img' style='display:none;'>"+
            "<a href='javascript:;'><img src='../../img/add-theater/edit.png' alt='编辑'/></a>"+
            "</div>"+
            "<div class='save-btn' style='display: block;'>"+
            "<div class='cancel-profile'>"+
            "<a href='javascript:;'>取消</a>"+
            "</div>"+
            "<div class='save-profile'>"+
            "<a href='javascript:;'>保存</a>"+
            "</div>"+
            "</div>"+
            "</div></div>");
        $(".profile").width($(".step-details ").width()-$(".profile-edit ").width()-1);
    }
    $(".profile").width($(".step-details ").width()-$(".profile-edit ").width()-1);
    //    剧本分集大纲
    $(".gather span").click(function(){
        $(".selectgather").removeClass("selectgather");
        $(this).addClass("selectgather");
        showLayer()
    });
//    剧本导入
    $(".email").width($(".step-details").width()-$(".send-email").width()-2);
})

