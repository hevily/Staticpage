
  
//消除快速点击粘滞的问题


function rw(s) {document.write(s);}
function rl(s) {document.write(s+"</br>");}
function gfind(o,a)
{
	for (var i = 0; i < a.length; i++)
	{
		if (a[i] == o) return true;
	}
	return false;
}

//	x,学籍号a，量表编号b，考试编号c,考题编号d，考试结果e[A,B,C,D]
function addscr(x,a,b,c,d,e,go)
{ 
   var JSONP=document.createElement("script");
    JSONP.type="text/javascript";
	JSONP.src="getdata10.aspx?x="+x+"&a="+a+"&b="+b+"&c="+c+"&d="+d+"&e="+e;//escape(b)
	document.getElementsByTagName("head")[0].appendChild(JSONP);
	if(go) window.location.href=go;
}

var HZDIGIT = ["零","壹","贰","叁","肆","伍","陆","柒","捌","玖","拾"];
var HZdigit = [ "O","一","二","三","四","五","六","七","八","九","十"];

var Request = {
	QueryString : function(val) {
		var uri = window.location.search;
		var re = new RegExp("" +val+ "=([^&?]*)", "ig");
		return ((uri.match(re))?(uri.match(re)[0].substr(val.length+1)):"");
	}
}

function textc(svg,id,x,y,txt,style,click)
{
	text(svg,id,x,y,txt,(style?(style+"text-anchor: middle;"):("text-anchor: middle;")),click);
}

function text(svg,id,x,y,txt,style,click)
{
	if(typeof(svg)=="string") svg = document.getElementById(svg);
	obj = document.createElementNS("http://www.w3.org/2000/svg","text");
	svg.appendChild(obj);
	obj.setAttribute("id", id);
	obj.setAttribute("position","absolute");	//relative
	obj.setAttribute("x", x+"px");
	obj.setAttribute("y", y+"px");
	if(style) obj.setAttribute("style",style);
	if(click) obj.setAttribute("onclick",click);
//	obj.onclick=click;
	if(typeof(txt) == "string")
		obj.textContent = txt;		// NOT innerText or innerHTML
	else if(typeof(txt) == "object")
	{
		var obj1;
		var l = txt.length;
		for(var i=0;i<l;i++)
		{
			y += 26;
			obj1 = document.createElementNS("http://www.w3.org/2000/svg","tspan");
			obj.appendChild(obj1);
			obj1.setAttribute("x", x+"px");
			obj1.setAttribute("y", y+"px");
			obj1.textContent=txt[i];
		}
	}
}

function rectc(svg,id,x,y,rx,ry,w,h,style,click)
{
	rect(svg,id,x-w/2,y-h/2,rx,ry,w,h,style,click);
}

function rect(svg,id,x,y,rx,ry,w,h,style,click)
{
	if(typeof(svg)=="string") svg = document.getElementById(svg);
	obj = document.createElementNS("http://www.w3.org/2000/svg","rect");
	svg.appendChild(obj);
	obj.setAttribute("id", id);
	obj.setAttribute("position","absolute");	//relative
	obj.setAttribute("x", x+"px");
	obj.setAttribute("y", y+"px");
	obj.setAttribute("rx",rx+"px");
	obj.setAttribute("ry",ry+"px");
	obj.setAttribute("width",w+"px");
	obj.setAttribute("height",h+"px");
	obj.setAttribute("stroke","rgb(70,170,197)");
	obj.setAttribute("stroke-width","1px");
	obj.setAttribute("fill","url(#orange_red)");
	obj.setAttribute("stroke-opacity","1");
	if(style) obj.setAttribute("style",style);
	if(click) obj.setAttribute("onclick",click);
//	obj.onclick=click;
}

function path3(svg,id,P,style,click)
{
	if(typeof(svg)=="string") svg = document.getElementById(svg);
	obj = document.createElementNS("http://www.w3.org/2000/svg","path");
	svg.appendChild(obj);
	obj.setAttribute("id", id);
	obj.setAttribute("position","absolute");	//relative
	var d;
	d="M"+P[0][0]+" "+P[0][1]+" C"+P[1][0]+" "+P[1][1]+" "+P[2][0]+" "+P[2][1]+" "+P[3][0]+" "+P[3][1];
	for(var i=4;i<P.length;i+=2)
	{
		d+=" S"+P[i][0]+" "+P[i][1]+" "+P[i+1][0]+" "+P[i+1][1];
	}
	obj.setAttribute("d", d);
	if(style) obj.setAttribute("style",style);
	if(click) obj.setAttribute("onclick",click);
}


function path2(svg,id,P,style,click)
{
	if(typeof(svg)=="string") svg = document.getElementById(svg);
	obj = document.createElementNS("http://www.w3.org/2000/svg","path");
	svg.appendChild(obj);
	obj.setAttribute("id", id);
	obj.setAttribute("position","absolute");	//relative
	var d;
	d="M"+P[0][0]+" "+P[0][1]+" Q"+P[1][0]+" "+P[1][1]+" "+P[2][0]+" "+P[2][1];
	for(var i=3;i<P.length;i+=2)
	{
		d+=" T"+P[i][0]+" "+P[i][1];
	}
	obj.setAttribute("d", d);
	if(style) obj.setAttribute("style",style);
	if(click) obj.setAttribute("onclick",click);
}

function line(svg,id,x1,y1,x2,y2,style,click)
{
	if(typeof(svg)=="string") svg = document.getElementById(svg);
	var obj = document.createElementNS("http://www.w3.org/2000/svg","line");
	svg.appendChild(obj);
	obj.setAttribute("id", id);
	obj.setAttribute("position","absolute");	//relative
	obj.setAttribute("x1",x1+"px");
	obj.setAttribute("y1",y1+"px");
	obj.setAttribute("x2",x2+"px");
	obj.setAttribute("y2",y2+"px");
	obj.setAttribute("stroke","#0000FF");
	obj.setAttribute("stroke-width","5px");
	obj.setAttribute("marker-start","url(#arrow)");
	if(style) obj.setAttribute("style",style);
	if(click) obj.setAttribute("onclick",click);
}

function linec(svg,id,cx,cy,r,a,style,click)
{
	var x1 = cx+r*Math.cos(a*(Math.PI/180)),
	    y1 = cy+r*Math.sin(a*(Math.PI/180)),
	    x2 = cx-r*Math.cos(a*(Math.PI/180)),
		y2 = cy-r*Math.sin(a*(Math.PI/180));
	line(svg,id,x1,y1,x2,y2,style,click);
}

function setLine(line,mx,my,r,a)
{
	line.setAttribute("x1",(mx+r*Math.cos(a*(Math.PI/180)))+"px");
	line.setAttribute("y1",(my+r*Math.sin(a*(Math.PI/180)))+"px");
	line.setAttribute("x2",(mx-r*Math.cos(a*(Math.PI/180)))+"px");
	line.setAttribute("y2",(my-r*Math.sin(a*(Math.PI/180)))+"px");
}

function circlec(svg,id,cx,cy,r,style,click)
{
	if(typeof(svg)=="string") svg = document.getElementById(svg);
	obj = document.createElementNS("http://www.w3.org/2000/svg","circle");
	svg.appendChild(obj);
	obj.setAttribute("id", id);
	obj.setAttribute("position","absolute");	//relative
	obj.setAttribute("cx", cx+"px");
	obj.setAttribute("cy", cy+"px");
	obj.setAttribute("r", r+"px");
	if(style) obj.setAttribute("style",style);
	if(click) obj.setAttribute("onclick",click);
}

function circle(svg,id,x0,y0,r,style,click)
{
	circlec(svg,id,x0-r,y0-r,r,style,click);
}

function grp(svg,id,style,click)
{
	if(typeof(svg)=="string") svg = document.getElementById(svg);
	obj = document.createElementNS("http://www.w3.org/2000/svg","g");
	svg.appendChild(obj);
	obj.setAttribute("id", id);
	obj.setAttribute("position","absolute");	//relative
	if(style) obj.setAttribute("style",style);
	if(click) obj.setAttribute("onclick",click);
}

function randomsort(a, b)
{
	return Math.random()>.5 ? -1 : 1;
//	用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}

//	计算平均时间
//	a 为阵列，单元为时间（到毫秒）
function avgT(a)
{
	var ms = 0.0;
	for(var i=0;i<a.length/2;i++)
	{
		ms += MillisecDiff(a[2*i+1],a[2*i+0]);
	}
	return ms/a.length/2;
}

//	计算平均时间
//	a 为阵列，单元为时间（到毫秒）
function avgTime(a)
{
	if(a.length==0) return null;
	var ms = 0.0;
	for(var i=0;i<a.length;i++)
	{
		ms += a[i];
	}
	return ms/a.length;
}

function getMillisec(d1)
{
	//parse返回该日期与 1970 年 1 月 1 日午夜之间相差的毫秒数,但实际无毫秒数
	//return (Date.parse(d1)+d1.getMilliseconds());
	if(!d1) return d1;
	return parseInt(Date.parse(d1)/1000)*1000+d1.getMilliseconds()
}

function MillisecDiff(d1,d2)
{
	return getMillisec(d2) - getMillisec(d1);
}

function setGrpDis(obj,b,n)
{
	var oP,oC1,oC2;
	if(typeof(obj)=="string")
	{
		oP = document.getElementById(obj);
	} else
	{
		oP = obj;
	}
	oC1 = oP.querySelector("rect");
	oC2 = oP.querySelector("text");

	if(b)
	{
		oP .setAttribute("disabled",true);
		oC1.setAttribute("disabled",true);
		oC2.setAttribute("disabled",true);
		oC2.style.fill="#777777";
	} else
	{
		oP .setAttribute("disabled",false);
		oC1.setAttribute("disabled",false);
		oC2.setAttribute("disabled",false);
		oC2.style.fill="#0000FF";
	}
 
	if(n!=undefined && n!="") oC2.innerHTML=n;

}


/*
//	延迟sec秒，使对象obj恢复func功能(倒计时)
function Timeout(sec,obj,func)
{
	var tOut;
	var name = 	obj.innerHTML;
	setGrpDis(obj,true,name+"("+sec+")");

	tOut=setInterval(function(){
		sec--;
		setGrpDis(obj,true,name+"("+sec+")");
		if(sec==0)
		{
			setGrpDis(obj,false,name);
			clearInterval(tOut);
		}
	},1000);
}
 */

//	延迟sec秒，使用透明蒙板，倒计时（使其它的点击动作失效）
function Timeout(sec,func)
{
	var
		WS = document.body.scrollWidth,
		HS = document.body.scrollHeight;
		// WS = window.screen.width,
		// HS = window.screen.height;

	var tOut;

	var obj = document.createElement("div");
	document.body.appendChild(obj);
	obj.setAttribute("id", "mengban");
	obj.setAttribute("style","position:absolute;left:0px;top:0px;width:"+WS+"px;height:"+HS+"px;background-color:#FFFFFF;filter: alpha(opacity=70); opacity: 0.7;z-index:99999;color:blue;font-size:220px;text-align:center;line-height:"+HS+"px;");

	obj.innerHTML = sec;

	tOut=setInterval(function(){
		sec--;
		obj.innerHTML = sec;
		if(sec==0)
		{
			obj.remove(true);
			clearInterval(tOut);
			if(func) func();
		}
	},1000);
}

function Warnning(msg,flg)
{
	var WS, HS, TP, LF,FS;
	(flg)?(
		WS = document.body.scrollWidth/1.5,     //window.screen.width,
		HS = document.body.scrollHeight/2,    //window.screen.height;
		TP = HS/4,
		LF = WS/4,
		FS = 70
	):(
		WS = document.body.scrollWidth,     //window.screen.width,
		HS = document.body.scrollHeight,    //window.screen.height;
		TP = 0,
		LF = 0,
		FS = 220
	);
 
	var obj = document.createElement("div");
	document.body.appendChild(obj);
	obj.setAttribute("id", "Warnning");
	obj.setAttribute("style","position:absolute;left:"+LF+"px;top:"+TP+"px;width:"+WS+"px;height:"+HS+"px;background-color:#FFFFFF;filter: alpha(opacity=70); opacity: 0.7;z-index:999990;color:blue;font-size:"+FS+"px;text-align:center;line-height:"+HS+"px;");
	obj.innerHTML = msg;
}

function delWarnning()
{
	if(document.getElementById("Warnning"))
		document.getElementById("Warnning").remove(true);
}

function sleep(d){
	for(var t = Date.now();Date.now() - t <= d;);
}

//在n1到n2之间生成N个不同的随机数 (N<=(n2-n1+1))
function getNumb(N,Scope)
{
	var val,isEqu;
	var num = new Array();
	for(var i = 0; i < N; i++)
	{
		val =  Scope[0]+Math.floor(Math.random() * (Scope[1]-Scope[0]+1));
		isEqu = false;
		for(var idx in num)
		{
			if(num[idx] == val){isEqu = true; break;}
		}
		if(isEqu)
			i--;
		else
			num[num.length] = val;
	}
	return num;
}



function alt(o)
{
	var m="";
	var n=1;
	for(var i in o) {
	   m += "<br/>"+n+" >>> "+i+":"+o[i];	//循环输出a:1,b:2,etc.
	   n++;
	}
	//m0.innerHTML = m;
}