/**
 * Created by pc on 2015/7/22.
 */

$(document).ready(function(){
 $(document).on("focusout","#search",function(e){
                var value = $("#search").val();
                if(value==""||value=="null"){
                    $("#search").css("background","url('../../../../pakage/img/creator/search-bg.png') 50% -6px").css("background-size"," 400px 40px");
               }else{
                    $("#search").css("background","none");
                }
            });

    //去掉最后一个人员底边框
    function removeBorderBottom(){
        var PL = $(".person-list"),pLisstL = PL.length;
        for(var i = 0;i< pLisstL;i++){
            var perL =  PL.eq(i);
            var pDetails = $(perL).find(".person-details:last");
            $(pDetails).css("border","none");
        }
    };removeBorderBottom();
    //去掉最后一个第二级分组边框
    function removelastS () {
        var SL= $(".second-group"), L = SL.length;
        for (var i = 0; i < L; i++) {
            var SLi = SL.eq(i).find(".sec-top-group:last");
            SLi.css("border-bottom","none");
        }
     };removelastS();
    //展开小组
    $('.creator-body ul').on("click",".top-group",function(){
        $(".secOPL").removeClass('secOPL');
        var $topO = $(".top-opening");
        $topO.css("border-bottom","none");
        $(this).css("border-bottom","1px solid #cfcfcf");
        $(".sec-action-group").next(".third-group").hide(); //隐藏人员
        if($topO.length != 0){
            $topO.next(".second-group").find(".sec-action-group").hide();
            if($(this).hasClass("top-opening")){
                $(this).removeClass("top-opening").next(".second-group").find(".sec-action-group").hide(); //当前隐藏
                        $topO.css("border-bottom","none");
            }else{
                $topO.next(".second-group").find(".sec-action-group").hide();
                        $topO.css("border-bottom","none");
                $topO.removeClass("top-opening");
                $(this).addClass("top-opening").next(".second-group").find(".sec-action-group").show(); //小组显示
            }
        }else {
            $(this).addClass("top-opening").next(".second-group").find(".sec-action-group").show(); //小组显示
        }
    });
    //展开人员详细信息
    $(document).on("click",".sec-action-group",function(){
        var length = $(this).closest("ul").find(".sec-action-group").length,
            inx = $(this).closest("li").index(),
            secOP = $(".secOP"),secOPL = $(".secOPL"),thirdBorder = $(".thr-border");
            console.log(inx);
            if(inx==length-1){console.log("最后一个");
                if ($(".secOPL").length===0) {
                    secOP.removeClass('secOP').next(".third-group").hide();
                    console.log("未展开")
                    $(this).addClass('secOPL').next(".third-group").show();
                }else{console.log("已展开")
                    if ($(this).hasClass('secOPL')) {
                        $(this).removeClass('secOPL').next(".third-group").hide();
                    }else{
                        $(this).addClass('secOPL').next(".third-group").show();
                    }
                }
            }else{console.log("非最后一个");
                thirdBorder.removeClass('thr-border');
                $(this).next(".third-group").addClass('thr-border');
                secOP.next(".third-group").hide();
                secOPL.removeClass("secOPL").next(".third-group").hide();
                if ($(this).hasClass('secOP')) {
                    console.log("非最后自己")
                    $(this).removeClass("secOP").next(".third-group").hide();
                }else{
                    secOP.removeClass('secOP');
                    console.log("非最后-----非自身")
                    $(this).addClass("secOP").next(".third-group").show();
                }
            }
    });
    //添加分组
    $(".add-group-person").find("input[value='添加分组']").click(function(){
        var ul =$(".creator-body").children("ul"), firstLi = ul.children("li:first");
        var txt =  "<div class='group-name'><div class='editable'><input type='text' id='editing' /></div></div>"+
        "<div class='action'>"+
            "<a href='javascript:' class='toggle'><img src='../../../../pakage/img/creator/img-dropdown.png' alt='下拉'/></a> "+
            "<a href='javascript:' class='btn-delete'><img src='../../../../pakage/img/creator/img-delete.png'  alt='删除'/></a>"+
            "<a href='javascript:' class='btn-add'><img src='../../../../pakage/img/creator/img-add.png' alt='添加'/></a>"+
            "<a href='javascript:' class='btn-edit'><img src='../../../../pakage/img/creator/img-edit.png' alt='编辑'/></a>"+
        "</div>";
        var txtL = "<li><div class='action-content for-border'>"+
                        "<div class='top-group clearfix'></div>"+
                        "<div class='second-group'><ul><li></li></ul></div>"+
                    "</div></li>";
        firstLi.before(txtL);

        $(".creator-body").children("ul").children("li:first").find(".top-group").append(txt);
        $("#editing").focus();
    });
    //添加人员
            //点击添加人员按钮
        $(".add-group-person").find("input[value='添加人员']").click(function() {
            $(".search-img").show();
            $(".main-creator").hide();
            $(".person-search-jobed").show();
            // $("#search").focus();
        });
        // 点击搜索框
    $("#search").focus(function(){
        $(".search-img").show();
        $(".person-search").show();
        $(".main-creator").hide();
        $(".bg-input").css("width","80%");
        $(".empty").show();
        $("#close-search").show();
    });

    //搜索框小叉
    $(".bg-search .empty").click(function(){
        $(this).closest(".bg-search").find("#search").val("");
        $("#search").css("background","url('../../img/creator/search-bg.png') 50% -6px").css("background-size"," 400px 40px");
    });
    $("#search").change(function(){
        if($("#search").val() == "" || $("#search").val() == null ){
            $("#search").css("background","url('../../img/creator/search-bg.png') 50% -6px").css("background-size"," 400px 40px");
        }
    })
    //离开搜索
    $("#close-search").click(function(){
         $(".search-img").hide();
        $(".bg-input").css("width","100%");
        $(".main-creator").show();
        $(".person-search,.person-search-jobed").hide();
        $(".empty").hide();
        $("#close-search").hide();
        $(this).closest(".bg-search").find("#search").val("");
    });
    //添加弹层
    function addLayer(url){
        $("body").append("<div class='add-layer'></div>");//弹窗底层
        $(".add-layer").append("<div class='layer-title'></div><div class='layer-content'></div>");
        $(".layer-content").load(url);
    }
    //分配职务
    $(document).on("click",".replace-duty",function(){
        if ($(this).hasClass('disabled')) {
            return;
        };
        var url = "duty.html";
        $(".creator").hide();
        addLayer(url);
    });
    //分配权限
    $(document).on("click",".set-authority",function(){
        if ($(this).hasClass('disabled')) {
            return;
        };
        var url = "author.html";
        $(".creator").hide();
        addLayer(url);
    });
    // 关闭分配页面
    $(document).on("click",".close-btn",function(){
            $(".add-layer").remove();
        $(".creator").show();
        });
    function close(){
        $(document).on("click",".close-btn",function(){
            $(".add-layer").remove();
        });
    };
    //停用人员
    $(".stop-someone").click(function  () {
        $(this).hide();
        $(this).next(".re-Start").show();
        $(this).closest(".duty-replace").find(".replace-duty").css("border-color","#cfcfcf").css("color","#cfcfcf").css('cursor', 'not-allowed').addClass('disabled');
        $(this).closest(".duty-replace").find(".set-authority").css("border-color","#cfcfcf").css("color","#cfcfcf").css('cursor', 'not-allowed').addClass('disabled');
        $(this).closest(".person-details").find(".base-info,.more-info").css('color', '#cfcfcf');
        $(this).closest(".person-details").find(".base-info").find("span").css('color', '#cfcfcf');
        $(this).closest(".person-details").find(".more-info").find("span").css('color', '#cfcfcf');

        $(this).closest(".duty-replace").find(".replace-duty").css("border-color","#cfcfcf").css("color","#cfcfcf").css('cursor', 'not-allowed').addClass('disabled');
        $(this).closest(".duty-replace").find(".set-authority").css("border-color","#cfcfcf").css("color","#cfcfcf").css('cursor', 'not-allowed').addClass('disabled');
        $(this).closest(".person-search-jobed").find(".base-info,.more-info").css('color', '#cfcfcf');
        $(this).closest(".person-search-jobed").find(".base-info").find("span").css('color', '#cfcfcf');
        $(this).closest(".person-search-jobed").find(".more-info").find("span").css('color', '#cfcfcf');
    })
    //启用人员
    $(".re-Start").click(function() {
        $(this).hide();
        $(this).prev(".stop-someone").show();
        $(this).closest(".duty-replace").find(".replace-duty").css("border-color","#9c9c9c").css('color', '#000').css('cursor', 'pointer').removeClass('disabled');
        $(this).closest(".duty-replace").find(".set-authority").css("border-color","#9c9c9c").css('color', '#000').css('cursor', 'pointer').removeClass('disabled');
        $(this).closest(".person-details").find(".base-info,.more-info").css('color', '#000');
        $(this).closest(".person-details").find(".base-info").find("span").css('color', '#9c9c9c');
        $(this).closest(".person-details").find(".base-info").find("span").css('color', '#9c9c9c');
        $(this).closest(".person-details").find(".more-info").find("span").css('color', '#9c9c9c');

        $(this).closest(".duty-replace").find(".replace-duty").css("border-color","#9c9c9c").css('color', '#000').css('cursor', 'pointer').removeClass('disabled');
        $(this).closest(".duty-replace").find(".set-authority").css("border-color","#9c9c9c").css('color', '#000').css('cursor', 'pointer').removeClass('disabled');
        $(this).closest(".person-search-jobed").find(".base-info,.more-info").css('color', '#000');
        $(this).closest(".person-search-jobed").find(".base-info").find("span").css('color', '#9c9c9c');
        $(this).closest(".person-search-jobed").find(".base-info").find("span").css('color', '#9c9c9c');
        $(this).closest(".person-search-jobed").find(".more-info").find("span").css('color', '#9c9c9c');
    });
    //大组
            //组名更改保存
            $(document).on("focusout","#editing",function(e){
                    var value = $("#editing").val();
                    if (value=="" || value==null) {
                        alert("请输入组名！");
                        $("#editing").focus();
                    }else{
                        $("#editing").closest("div").empty().append(value);
                    }
            });
        //编辑
            $(document).on("click",".action a.btn-edit",function(e){
                if($("#editing").length!=0){
                    return;alert("请先完成当前组名编辑！");
                }else{
                    var txt = $(this).closest(".action").prev(".group-name").find('.editable').text();
                    $(this).closest(".action").prev(".group-name").find(".editable").empty().append("<input type='text' id='editing' />");
                    $("#editing").focus().attr("value",txt);
                    }
                e.stopPropagation();
                e.stopImmediatePropagation();
            });
        //添加
            $(document).on("click",".action a.btn-add",function(e){
                var secondGroup = "" +
                "<li>" +
                    "<div class='sec-action-group clearfix' style='display: block;'>"+
                       "<div class='sec-top-group clearfix'>"+
                            "<div class='in-group-name'><div class='editable'><input type='text' id='editing'/></div>(<span>3</span>)人</div>"+
                            "<div class='in-action'>"+
                               "<a href='javascript:' class='toggle'><img src='../../../../pakage/img/creator/img-dropdown.png' alt='下拉'></a>"+
                                "<a href='javascript:' class='btn-delete'><img src='../../../../pakage/img/creator/img-delete.png' alt='删除'></a>"+
                                "<a href='javascript:' class='btn-edit'><img src='../../../../pakage/img/creator/img-edit.png' alt='编辑'></a>"+
                            "</div>"+
                        "</div>"+
                    "</div>" +
                    "<div class='third-group third-open' style='display: block; '>"+
                        "<div class='person-list'>"+
                            "<ul><ul>"+
                        "</div>"+
                    "</div>"+
                "</li>";
                var next = $(this).closest(".top-group").next(".second-group").children("ul");
                //$(this).closest(".top-group").next(".second-group").children("ul").children("li").eq($(this).closest(".top-group").next(".second-group").children("ul").children("li").length-1).find(".sec-top-group").css("border-bottom","1px solid #cfcfcf");
                next.find("li:first").before(secondGroup);$("#editing").focus();
                e.stopPropagation();
                e.stopImmediatePropagation();
            });
        //删除
            $(document).on("click",".action a.btn-delete",function(e){
                if(confirm("确定要删除该组？")){
                    $(this).closest("li").remove();
                }
                e.stopPropagation();
                e.stopImmediatePropagation();
            });
        //小组
            //编辑
                $(document).on("click",".sec-top-group a.btn-edit",function(e){
                    var txt = $(this).closest(".sec-top-group").find(".in-group-name").find('.editable').text();
                    $(this).closest(".sec-top-group").find(".in-group-name").find('.editable').empty().append("<input type='text' id='editing' />");
                    $("#editing").focus().attr("value",txt);
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                });
            //删除
            $(document).on("click",".in-action a.btn-delete",function(e){
                if(confirm("确定要删除该组？")){
                    alert("正在删除");
                    $(this).closest("li").remove();
                }
                e.stopPropagation();
            });
                $(document).on("click",".sec-top-group a.btn-delete",function(e){
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                });

            });
//回到顶部按
window.onload =  function backTop(){
        var topBtn = document.getElementById('backTop'),
            timerTop = null,
            isTop = false,
            //获取页面可视区域高度
            topClientHeight = document.documentElement.clientHeight;
    window.onscroll = function(){
        var top = document.documentElement.scrollTop || document.body.scrollTop;

            if(topClientHeight-200 <= top){
                //console.log("可视区高度小于页面滚动高度");
                topBtn.style.display = 'block';
            }else{
                    topBtn.style.display = 'none';
                }

        if(isTop){
            //console.log("滚动停止");
            clearInterval(timerTop);
        }
            isTop = true;
    };

    topBtn.onclick = function (){
        timerTop = setInterval(function(){
                var top = document.documentElement.scrollTop || document.body.scrollTop,
                    topSpeed = Math.floor(-top/5);
                        //console.log("点击了back按钮"+top);
                document.documentElement.scrollTop = document.body.scrollTop = top+topSpeed;
                isTop = false;
                if(top==0){
                    clearInterval(timerTop);
                }
                },50);

    }

    };


