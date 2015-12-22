/**
 * Created by pc on 2015/5/15.
 */

//<!--//表格 滑过 选择 样式-->
//<SCRIPT language="JavaScript">
    //[javascript] view plaincopy
$(document).ready(function () {
    ///////datagrid选中行变色与鼠标经过行变色///////////////
    var dtSelector = ".list";
    var tbList = $(dtSelector);
    tbList.each(function () {
        var self = this;
        // 鼠标经过的行变色
        $("tr:not(:first)", $(self)).hover(
            function () {
                $(this).addClass('hoverTD');
            },
            function () {
                $(this).removeClass('hoverTD');
            }
        );
        // 选择行变色
        $(".list").delegate("tr", 'click', function () {
            var trThis = this;
            var trS = $(self).find(".trSelected");
            $(trS).find(".operate").removeClass("operate");

            $(self).find(".trSelected").removeClass('trSelected');
            if ($(trThis).get(0) == $("tr:first", $(self)).get(0)) {
                return;
            }
            $(trThis).addClass('trSelected');
            $(trThis).find("td:last div").addClass("operate");
        });
    });
//            $("tr", $(self)).click(function () {
//                var trThis = this;
//                var trS = $(self).find(".trSelected");
//                $(trS).find(".operate").removeClass("operate");
//
//                $(self).find(".trSelected").removeClass('trSelected');
//                if ($(trThis).get(0) == $("tr:first", $(self)).get(0)) {
//                    return;
//                }
//                $(trThis).addClass('trSelected');
//                $(trThis).find("td:last div").addClass("operate");
//            });
//        });
    //添加表格新行
    $("#add_td").click(function () {
        $(".list").append(" <tr><td class='td_middle'>时间</td><td><input type='text' class='cash-input' style='width: 100%' placeholder='资金来源'/></td><td><input type='text' class='cash-input' style='width: 100%;'placeholder='输入金额'/></td>" +
        "<td class='td_middle'>" +
        " <div class='edit' style='display:none'>" +
        "<a type='button' class='a-edit'>编辑</a>" +
        " <a type='button' class='a-submit'>提交</a>" +
        " <a type='button' class='a-delete'>删除</a></div>" +
        "<div class='save' style='display:block '>" +
        "<a type='button' class='a-cancle'>取消</a>" +
        " <a type='button' class='a-save'>保存</a></div></td></tr>");
    });
    //保存 编辑切换
    $("body").delegate(".edit a.a-edit", "click", function () {
        $(this).parent("div").toggle();
        $(this).parent("div").next(".save").toggle();
        var wTr = $(this).parentsUntil("tr").prevAll(),
            wTrD0 = wTr.eq(0).text(),
            wTrD1 = wTr.eq(1).text();
        wTr[0].innerHTML = "<td" + " class=''input-cash'''+ '' show-apply''>" + "<input" + " class=cash-input" + " type=text" + " value=" + wTrD0 + " >" + "</td>";
        wTr[1].innerHTML = "<td" + " class=''input-cash'''+ '' show-apply''>" + "<input" + " class=cash-input" + " type=text" + " value=" + wTrD1 + " >" + "</td>";
    });
    $("body").delegate(".save a.a-save", "click", function () {
        $(this).parent("div").toggle();
        $(this).parent("div").prev(".edit").toggle();
        var wTr = $(this).parentsUntil("tr").prevAll();
        var nTr = $(this).parentsUntil("tr").prevAll().children(".cash-input");
        var nTrD0 = nTr[0].value;
        var nTrD1 = nTr[1].value;
        wTr[1].innerHTML = "<td>" + nTrD0 + "</td>";
        wTr[2].innerHTML = "<td>" + nTrD1 + "</td>";
    });
    //提交响应
    $("body").delegate(".edit .a-submit", 'click', function () {
        $(this).parent("div").parent("td").replaceWith("<td class='td_middle'><span class='submitted'>已提交</span></td>");
        $(this).hide();
        $(this).prev(".a-edit").hide();
        $(this).next(".a-delete").hide();
        $(this).next(".submitted").show();
    });
    //删除响应
    $("body").delegate(".edit .a-delete", 'click', function () {
        alert("小心-要删除了");
        var wRm = $(this).parentsUntil("tr").parent("tr");
        wRm.remove();
    });
    //取消响应
    $("body").delegate(".save .a-cancle", 'click', function () {
        $(this).parent("div").toggle();
        $(this).parent("div").prev(".edit").toggle();
        alert("取消编辑/添加");
        var wTr = $(this).parentsUntil("tr").prevAll();
        var nTr = $(this).parentsUntil("tr").prevAll().children(".cash-input");
        var nTrD0 = nTr[0].value;
        var nTrD1 = nTr[1].value;
        if (nTrD0 != "") {
            wTr[1].innerHTML = "<td>" + nTrD0 + "</td>";
            wTr[2].innerHTML = "<td>" + nTrD1 + "</td>";
        } else
            $(this).parentsUntil("tr").parent("tr").remove();
    });
});


//编辑、保存
//    function edit() {
//        //alert("edit0");
//        document.getElementById("save2").style.display = "none";
//        document.getElementById("edit2").style.display = "block";
//    }
//    function save() {
//        //alert("save");
//        document.getElementById("edit2").style.display = "none";
//        document.getElementById("save2").style.display = "block";
//    }
//</SCRIPT>


//<script>
function check() {
    var borrowed = $("#borrowed").text(),
        apply = $("#apply").text(),
//                iBorrowed = Number(borrowed.replace(/,/g, "")),
        iApply = Number(apply.replace(/,/g, "")),
//                checked = document.getElementsByName("check-pay").value,
        str = document.getElementById("cash_input").value,
        td = document.getElementsByName("check-pay");
    if (td[1].checked) {
        console.log("现金");
        if (str != "") {
            console.log("金额" + str);
            if (str != iApply) {
                alert("输入的金额和报销金额不相等");
            } else if (str = iApply) {
                alert("正在进行现金报销");
            }
        }
    } else if (td[0].checked) {
        console.log("欠款冲抵");
    }
    }
function forbiddenSelect() {
    var borrowed = $("#borrowed").text(),
        apply = $("#apply").text(),
        iBorrowed = Number(borrowed.replace(/,/g, "")),
        iApply = Number(apply.replace(/,/g, "")),
        show = document.getElementsByClassName("show-apply"),
        td = document.getElementsByName("check-pay");
    show[0].innerHTML = apply;
    show[1].innerHTML = "<td" + " class=''input-cash'''+ '' show-apply''>" + "<input" + " id=cash_input" + " type=text" + " value=" + iApply + " />" + "</td>";
    if (iBorrowed < iApply) {
        console.log(iBorrowed - iApply + "借款金额不足以抵消报销金额");
        td[0].disabled = true;
        td[1].checked = "checked";
    } else if (iBorrowed > iApply) {
        console.log("借款金额足以抵消报销金额 抵销一部分后还欠" + (iBorrowed - iApply));
        td[0].checked = "checked";
    }
}
$(document).ready(function () {
    $(".pay-for-bill").click(function () {
        $(this).parent().next(".waitFor").toggle();
    });
    $(".cashier-abort").click(function () {
        $(this).parent().parent(".waitFor").hide();
    });
})
//</script>

//<SCRIPT language="JavaScript">
//document.getElementsByName("select")[1].checked = "checked";
$(document).ready(function () {
    $(".name").click(function () {
        //$(".open2").removeClass("open2");
        //$(this).addClass("open2");
        $(this).next(".serial-number-list").find("li").toggle();
    });
    $(".serial-number").click(function(){
        if($(this).next(".wait_borrow_content").hasClass("open")){
            $(this).next(".wait_borrow_content").removeClass("open");
        }else{
            $(this).next(".wait_borrow_content").addClass("open");
        }
        $(this).next(".wait_borrow_content").toggle();
    });
    $(".wait_filmmaking").click(function () {
        $(".wait_filmmaking_title").toggle();
    });

    $(".click_select").click(function () {
        $(this).children("a").children("img").toggle();
        $(this).next(".name_list").toggle();
    });
    $(".select_bills").bind("change", function () {
        $(".bills_proof").toggle();
    });
    $(".btn_borrow_bill").click(function () {
        $(".current").removeClass("current");
        $(this).addClass("current");
        $(".none").hide();
        $(".reimburse_bills").hide();
        $(".borrow_bills").show();
    });
    $(".btn_reimburse_bill").click(function () {
        $(".current").removeClass("current");
        $(this).addClass("current");
        $(".none").hide();
        $(".borrow_bills").hide();
        $(".reimburse_bills").show();
    });
    $(".btn_borrow .btn_cancel").click(function () {
        $(".borrow_bills").hide();
        $(".reimburse_bills").hide();
        $(".none").show()
    });
    $(".close-an-account").click(function () {
        $(this).parent("td").prev("td").replaceWith("<td>" + "无" + "</td>");
        $(this).hide();
        $(this).next(".closed-an-account").show();
    });
    $(".select-more input").click(function(e){
        e.stopPropagation();
    })
    $(".checked-agree").click(function(e){
        e.stopPropagation();
    })

});