// JavaScript Document
function saveUserInfo()
{
    //获取接受返回信息层
    //var msg = document.getElementById("msg"); 

    //获取表单对象和用户信息值
    var f = document.mail_info;     
    var username = f.username.value;
    var userphone = f.tellphone.value;
    var userbody = f.textbody.value;
	
	//判断电话号码是否正确
	RegCellPhone = /^(1)([0-9]{10})?$/;
	falg=userphone.search(RegCellPhone);
    if (falg==-1){
    	alert("手机号不合法！");
		f.tellphone.focus();
		return false;
    	//this.focus();
    }
	else if(userphone.length!=11){
		alert("手机号不合法！");
		f.tellphone.focus();
		return false;
		}
	else if(username==""){
		alert("请填写姓名！");
		f.username.focus();
		return false;
		}
	else{
    //接收表单的URL地址
    var url = "/mail.php";     
    //需要POST的值，把每个变量都通过&来联接 
    var postStr = "uname="+ username +"&uphone="+ userphone +"&ubody="+ userbody;

    //实例化Ajax
    var ajax = null;
    if(window.XMLHttpRequest){
        ajax = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }

    //通过Post方式打开连接
    ajax.open("POST", url, true);  
    //定义传输的文件HTTP头信息 
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); 
    //发送POST数据
    ajax.send(postStr);

    //返回数据的处理函数
    ajax.onreadystatechange = function(){
        if (ajax.readyState == 4 && ajax.status == 200){
               var info = ajax.responseText;
			   alert(info);
            }
      }
	}
}
