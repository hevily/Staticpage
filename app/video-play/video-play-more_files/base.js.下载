$(function() {
    //关闭APP.loadding
    if(window.stopProgressDialog){
        window.stopProgressDialog.gotoStopProgressDialog();
    }

    $.ajaxSetup({
        cache:false
    });
	//css
	window.Ec ={};
	window.Ec.Css = {}
	window.Ec.Css.hasClass = function ( elements,cName ){  
    	return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
	};  
	window.Ec.Css.addClass = function( elements,cName ){  
	    if( !hasClass( elements,cName ) ){  
	        elements.className += " " + cName;  
	    };  
	};  
	window.Ec.Css.removeClass = function( elements,cName ){  
	    if( hasClass( elements,cName ) ){  
	        elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" ), " " );
	    };  
	};
	
	if (!HTMLElement.prototype.hasClass){
		HTMLElement.prototype.hasClass = function (cName ){  
		    return !!this.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
		}
	}
	if (!HTMLElement.prototype.addClass){
		HTMLElement.prototype.addClass = function (cName ){  
		    if( !this.hasClass( cName ) ){  
		       this.className += " " + cName;  
		    };
		    return this;
		}
	}
	if(!HTMLElement.prototype.removeClass){
		HTMLElement.prototype.removeClass = function (cName ){  
		    if( this.hasClass( cName ) ){  
		        this.className = this.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" ), " " );
		    }; 
		    return this;
		}
	}
	
	
	//为body增加touchstart事件监听，实现激活效果
	document.body.addEventListener("touchstart",function(){});
	
	if(!String.prototype.trim){ //判断下浏览器是否自带有trim()方法
		String.method('trim', function() {
			return this.replace(/^s+|s+$/g, '');
		});
		String.method('ltrim', function() {
			return this.replace(/^s+/g, '');
		});
		String.method('rtrim', function() {
			return this.replace(/s+$/g, '');
		});
	}
	//IE支持indexOf
	if (!Array.prototype.indexOf)
	{
	  Array.prototype.indexOf = function(elt /*, from*/)
	  {
	    var len = this.length >>> 0;
	
	    var from = Number(arguments[1]) || 0;
	    from = (from < 0)
	         ? Math.ceil(from)
	         : Math.floor(from);
	    if (from < 0)
	      from += len;
	
	    for (; from < len; from++)
	    {
	      if (from in this &&
	          this[from] === elt)
	        return from;
	    }
	    return -1;
	  };
	}
	if (!Array.prototype.forEach) {  
	    Array.prototype.forEach = function(callback, thisArg) {  
	        var T, k;  
	        if (this == null) {  
	            throw new TypeError(" this is null or not defined");  
	        }  
	        var O = Object(this);  
	        var len = O.length >>> 0; // Hack to convert O.length to a UInt32  
	        if ({}.toString.call(callback) != "[object Function]") {  
	            throw new TypeError(callback + " is not a function");  
	        }  
	        if (thisArg) {  
	            T = thisArg;  
	        }  
	        k = 0;  
	        while (k < len) {  
	            var kValue;  
	            if (k in O) {  
	                kValue = O[k];  
	                callback.call(T, kValue, k, O);  
	            }  
	            k++;  
	        }  
	    };  
	}  
	//获取非行间样式 (domObj,css属性)
	if(!window.getStyle){
		window.getStyle = function(obj,attr){
			return window.getComputedStyle ? window.getComputedStyle(obj,null).attr : obj.currentStyle.attr;
		}
	}
	window._msg_confirm = function(msg, fun) {
		BUI.use('bui/overlay', function(overlay) {
			BUI.Message.Confirm(msg, fun, 'question');
		});
	}


	window.FormTool = function() {
		return {
			"insertOption": function(target, value, text) {
				var y = document.createElement('option');
				y.text = text;
				y.value = value;
				var x = target;
				try {
					x.add(y, null); // standards compliant
				} catch (ex) {
					x.add(y); // IE only
				}
			},
		}
	}();
	window.change_a = function(id) {
		pid = id.val();
		$.get("./getRegion?pid=" + pid, function(data) {
			switch (data.status) {

				case 1:
					data = data.data;
					obj = document.getElementById('creator_address_city');
					obj.options.length = 0
					FormTool.insertOption(obj, 0, '选择市');
					for (i in data) {
						FormTool.insertOption(obj, i, data[i]);
					}
					break;
			}
		});
	}
	window.change_b = function(id) {
		pid = id.val();
		$.get("./getRegion?pid=" + pid, function(data) {
			switch (data.status) {

				case 1:
					data = data.data;
					obj = document.getElementById('creator_address_district');
					obj.options.length = 0
					FormTool.insertOption(obj, 0, '选择区县');
					for (p in data) {
						FormTool.insertOption(obj, p, data[p]);
					}
					break;
			}
		});
	}
/*
     * Javascript base64_encode() base64加密函数
       用于生成字符串对应的base64加密字符串
     * 吴先成  www.51-n.com ohcc@163.com QQ:229256237
     * @param string str 原始字符串
     * @return string 加密后的base64字符串
    */
	window.base64_encode = function(str) {
	    var c1, c2, c3;
	    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	    var i = 0, len = str.length, string = "";
	    while (i < len) {
	        c1 = str.charCodeAt(i++) & 255;
	        if (i == len) {
	            string += base64EncodeChars.charAt(c1 >> 2);
	            string += base64EncodeChars.charAt((c1 & 3) << 4);
	            string += "==";
	            break;
	        }
	        c2 = str.charCodeAt(i++);
	        if (i == len) {
	            string += base64EncodeChars.charAt(c1 >> 2);
	            string += base64EncodeChars.charAt((c1 & 3) << 4 | (c2 & 240) >> 4);
	            string += base64EncodeChars.charAt((c2 & 15) << 2);
	            string += "=";
	            break;
	        }
	        c3 = str.charCodeAt(i++);
	        string += base64EncodeChars.charAt(c1 >> 2);
	        string += base64EncodeChars.charAt((c1 & 3) << 4 | (c2 & 240) >> 4);
	        string += base64EncodeChars.charAt((c2 & 15) << 2 | (c3 & 192) >> 6);
	        string += base64EncodeChars.charAt(c3 & 63);
	    }
	    return string;
	}
	
	/*
		 * Javascript base64_decode() base64解密函数
		   用于解密base64加密的字符串
		 * 吴先成  www.51-n.com ohcc@163.com QQ:229256237
		 * @param string str base64加密字符串
		 * @return string 解密后的字符串
		*/
	 window.base64_decode = function(str) {
	    var c1, c2, c3, c4;
	    var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
	    var i = 0, len = str.length, string = "";
	    while (i < len) {
	        do {
	            c1 = base64DecodeChars[str.charCodeAt(i++) & 255];
	        } while (i < len && c1 == -1);
	        if (c1 == -1) break;
	        do {
	            c2 = base64DecodeChars[str.charCodeAt(i++) & 255];
	        } while (i < len && c2 == -1);
	        if (c2 == -1) break;
	        string += String.fromCharCode(c1 << 2 | (c2 & 48) >> 4);
	        do {
	            c3 = str.charCodeAt(i++) & 255;
	            if (c3 == 61) return string;
	            c3 = base64DecodeChars[c3];
	        } while (i < len && c3 == -1);
	        if (c3 == -1) break;
	        string += String.fromCharCode((c2 & 15) << 4 | (c3 & 60) >> 2);
	        do {
	            c4 = str.charCodeAt(i++) & 255;
	            if (c4 == 61) return string;
	            c4 = base64DecodeChars[c4];
	        } while (i < len && c4 == -1);
	        if (c4 == -1) break;
	        string += String.fromCharCode((c3 & 3) << 6 | c4);
	    }
	    return string;
	}
	 

	/**
	 *
	 * @param {Object} type 消息类型
	 * @param {Object} html 消息内容，支持html
	 * @param {Object} timeout 自动消失时间
	 * @param {Object} callback 回调函数 {"onClose":fn,"onOpen":fn}
	 */
	window.amAlert = function(type, html, timeout, callback) {
			if (!($("#am-alert-queue").length)) {
				$("body").append("<div id='am-alert-queue'></div>").css({
					
				});
			}
			var $obj = $('<div class="am-alert" style="display: none;"><button type="button" class="am-close">×</button><div class="am-alert-content"></div></div>');
			switch (type) {
				case "success":
				case "warning":
				case "secondary":
				case "danger":
					break;
				default:
					type = "success";
			}
			//设置事件
			$obj.find(".am-close:first").on("click", function() {
				$obj.fadeOut("slow").remove();
				if (callback && callback.onClose) {
					callback.onClose();
				}
			});
			//设置类型
			$obj.addClass("am-alert-" + type);
			//设置内容
			$obj.find(".am-alert-content:first").html(html);
			//加入队列
			$("#am-alert-queue").prepend($obj);
			$obj.slideDown(500, function() {
				if (callback && callback.onOpen) {
					callback.onOpen();
				}
				if (timeout) {
					setTimeout(function() {
						$obj.slideUp("slow", function() {
							$obj.remove();
							if (callback && callback.onClose) {
								callback.onClose();
							}
						});
					}, timeout);
				}
			});

		}
	//原生JavaScript设置cookie值 ,记得设置domain
	window.cookieSet = function(name, value, Hours) {
		var d = new Date();
		var offset = 8;
		var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
		var nd = utc + (3600000 * offset);
		var exp = new Date(nd);
		exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
//		document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";domain=mydomain.com;"
		var str = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";"+(location.hostname?("domain="+location.hostname+";"):"");
		document.cookie = str;
	}

	//原生JavaScript获取cookie值
	window.cookieGet = function(name) {
		var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
		if (arr != null) return unescape(arr[2]);
		return null
	}
	window.cookieRemove = function(name){
//		var date=new Date();
//		//将date设置为过去的时间
//		date.setTime(date.getTime()-10000);
//		//将userId这个cookie删除
//		document.cookie= name+"=; expire="+date.toGMTString();
		cookieSet(name,'',-1);
	}

	Date.prototype.format = function(fmt){
	    var year    =   this.getFullYear();
	    var month   =   this.getMonth()+1;
	    var date    =   this.getDate();
	    var hour    =   this.getHours();
	    var minute  =   this.getMinutes();
	    var second  =   this.getSeconds();
	    
		fmt = fmt.replace("yyyy",year);
		fmt = fmt.replace("yy",year%100);
		fmt = fmt.replace("MM",fix(month));
		fmt = fmt.replace("dd",fix(this.getDate()));
		fmt = fmt.replace("hh",fix(this.getHours()));
		fmt = fmt.replace("mm",fix(this.getMinutes()));
		fmt = fmt.replace("ss",fix(this.getSeconds()));
		return fmt;
		    function fix(n){
		return n<10?"0"+n:n;
		}
	}
	
	
	//离线存储技术
	window.applicationCache.addEventListener('updateready',
		function(e){
		    if(window.applicationCache.status == window.applicationCache.UPDATEREADY){
		        window.applicationCache.swapCache();
		        if(confirm("缓存已更新，是否加载?")){
		            window.location.reload()
		        }
		    }
		}
		,false);
		
	//支持缓存的js加载
	//$.cachedScript('../Public/js/stores/base.js').done(function () {             console.log('base');        });
	window.scriptsArray = new Array();
	$.cachedScript = function (url, options) {
	    for (var s in scriptsArray) {
	        if (scriptsArray[s]==url) {
	            return {  //则返回一个对象字面量，其中的done之所以叫做done是为了与下面$.ajax中的done相对应
	                done: function (method) {
	                    if (typeof method == 'function'){  //如果传入参数为一个方法
	                        method();
	                    }
	                }
	            };
	        }
	    }
	    options = $.extend(options || {}, {
	        dataType: "script",
	        url: url,
	        cache:true
	    });
	    scriptsArray.push(url);
	    return $.ajax(options);
	};		
	/**
	 * 判断变量是否空值
	 * undefined, null, '', false, 0, [], {} 均返回true，否则返回false
	 */
	window.empty = function(v) {
		switch (typeof v) {
			case 'undefined':
				return true;
			case 'string':
				if (v.trim().length == 0) return true;
				break;
			case 'boolean':
				if (!v) return true;
				break;
			case 'number':
				if (0 === v) return true;
				break;
			case 'object':
				if (null === v) return true;
				if (undefined !== v.length && v.length == 0) return true;
				for (var k in v) {
					return false;
				}
				return true;
				break;
		}
		return false;
	}

	/**
	 * hash 的获取 
	 * location.hash 格式：cat=1/name=tom
	 * 如果name为空，则获取所有hash键值对对象，如果不为空则获取字符串值
	 * @param {String} name 键
	 */
	window.hashGet = function(name){
		var o = {};
		$.each(location.hash.slice(1).split("/"),function(i,e){
			var item = e.split("=");
			if(item[1]){
				o[item[0]]=item[1];
			}
		});
		if(!name){
			return o;
		}else{
			return o[name];
		}
	}
	/**
	 * hash 设置
	 * hash 格式：cat=1/name=tom
	 * 如果value为null，则表示删除，否则表示设置值
	 * @param {String} name 键
	 * @param {String} value 值
	 * @param {Boolean} return_ 如果为1，表示返回hash字符串（不带#），为2：返回全路径，其他值返回location对象；默认不返回直接设置url
	 */
	window.hashSet = function(name,value,return_){
		var o = hashGet();
		o[name] = value;
		var hash = '';
		for(var item in o){
			if(o[item] || o[item]==0){
				hash += item;
				hash += "="+o[item];
				hash +="/";
			}
		}
		if(hash.slice(-1) === '/'){
			hash = hash.slice(0,-1);
		}
		if(return_){
			if(return_ == 1){
				return hash;
			}
			if(return_ == 2){
				var url = '';
				if(location.hash.length){
					url = location.href.slice(0,-location.hash.length);
				}else{
					url = location.href;
				}
				return url+"#"+hash;
			}
			return location;
		}
		location.hash = hash;
	}
	
	window.appiStr = function(str){
		return 'beginappi&'+encodeURIComponent(str)+'&endappi';
	}
	/**
	 * 获取get，但不支持pathinfo
	 */
	window.urlGet = function(field) {
		querystr = window.location.href.split("?")
		if (querystr[1]) {
			GETs = querystr[1].split("&")
			GET = new Array()
			for (i = 0; i < GETs.length; i++) {
				tmp_arr = GETs[i].split("=")
				key = tmp_arr[0]
				GET[key] = tmp_arr[1]
			}
		}
		if(empty(field)){
			return querystr[1];
		}else{
			return GET[field]?GET[field]:"";
		}
		
	}
	

	window.URL = (function(){
		var obj = window.location;
		obj.get =function(name){
			var search = obj.search;
			if(!search){
				return false;
			}
			search = search.slice(1);
			var aSearch = search.split('&');
			var oSearch = {};
			$.each(aSearch, function(i,e) {    
				var temp = e.split("=");
				oSearch[temp[0]] = temp[1];
			});
			if(!name){
				return oSearch;
			}else{
				return oSearch[name];
			}
		}
		return obj;
	})();
		
	window.getUrl = function (url) {
	    var host = "null";
	    if(typeof url == "undefined"|| null == url) {
	        url = window.location.href;
	    }
	    var regex = /^(\w+)\:\/\/([^\/]*).*/;
	    var match = url.match(regex);
	    if(typeof match != "undefined" && null != match) {
	        host = match[2];
	        protocol = match[1];
	    }
	    match[3] = protocol+"://"+host;
	    return match;
	}
	
	
	var urlHost = getUrl()[3];
	window.urlHost = urlHost+"/";
	window.urlInstall = urlHost + "/"
	window.urlInstall = urlHost+"/statichtml/bjmovie01/"
	window.urlRoot = urlHost+"/";
	window.urlRoot = urlHost+"/statichtml/bjmovie01/estores/";
	window.urlRestapi = urlHost+"/statichtml/bjmovie01/site/public/rest_api/";
	window.urlRestapiImg = urlHost+"/statichtml/bjmovie01/site/public/image.php";
	window.imgSrcBase = urlRoot+"Store/Public/img?id=";
	window.videoSrcBase = urlInstall+"site/public/viewVideoThumb.php?id=";
	window.imgSrcNewBase = urlInstall+"site/public/image.php?sn=";    //新图片路径，传sn
	
});