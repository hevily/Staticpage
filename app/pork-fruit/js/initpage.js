
//主动停止ios和andride的loading动画
function stopLoading(){
    try {
        if(window.stopProgressDialog){
            window.stopProgressDialog.gotoStopProgressDialog();
        } else {
            //ios的
            gotoStopProgressDialog();
        }
    } catch (e) {
    }
};stopLoading();

$(function(){
    var loading = "<div class='loading'>加载中</div>";
    resizeFrame(".am-slider");
    resizeFrame(".entrance");
    resizeFrame(".bans");
    resizeFrame(".banner-tp");
    resizeFrame('.sort-banner')

    $(window).resize(function () {
        console.log("window-resize!!!");
        resizeFrame(".am-slider");
        resizeFrame(".entrance");
        resizeFrame(".bans");
        resizeFrame(".banner-tp");
        resizeFrame('.sort-banner');

    });

    function resizeFrame (goal) {
        var goal = goal;
        //获取比例
        var goalW = $(goal).attr("imgW"),
            goalH = $(goal).attr("imgH"),
            scale = goalW/goalH;
       if (goal == ".entrance") {
            // console.log("此处是icon图标");
            $(goal).css("height",$(goal).width()/scale+22);
        }else{
            // console.log(scale);
            $(goal).css("height",$(goal).width()/scale);
        };
        $(goal).addClass("resized");
    };

    function setSlider (goal,sliders) {
        var style = '<style>.clearfix:after,.clearfix:before{content:".";display:block;height:0;visibility:hidden}.clearfix:after{clear:both}.clearfix{zoom:1}.container{width:100%;max-width:640px;margin:0 auto}.am-slider{margin:0}.am-slider-a1 .am-control-nav{bottom:13px}.am-slider-a1 .am-control-nav li a{height:10px;width:10px}.am-slider-a1 .am-slider-desc{padding:2px 80px 0 10px;font-size:1em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis}body,html{height:100%;background-color:#fff}.container{background-color:#fff}.am-slider,.am-slides,.am-slides li,.am-slides li img,.am-viewport{height:auto}.am-slider-desc{background-color:rgba(0,0,0,.2)!important}.am-slider-a1 .am-control-nav li a{-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background-color:rgba(255,255,255,.3)}.am-slider-a1 .am-control-nav li a.am-active{background-color:#fff}.container{border-top:0}</style>'
        $('head').append(style)
            var title,link,imgSrc,imgAlt;
            $.each(sliders,function  (key,value) {
                    title  = this.title;
                    link   = this.link;
                    imgSrc = this.img.src;
                    imgAlt = this.img.title;
            var slider = "<li><a href='"+link+"'><img src ='"+imgSrc+"' alt='"+imgAlt+"' datalink=''/></a></li>";
                $(goal).append(slider);
            });
            $.ajax({
                url:"https://staticcdn.yshjie.com/cdn/librarypath/amazeui/AmazeUI-2.4.2/js/amazeui.min.js",
                type:"get",
                cache:true,
                success: function () {
                // console.log("轮播组件加载完毕")
                if ($.flexslider) {
                    $(".am-slider").find(".spinner").remove();
                    $('.am-slider').flexslider({
                        // 设置用户操作后延时自动播放
                      playAfterPaused: 3000,
                      before: function(slider) {
                        if (slider._pausedTimer) {
                          window.clearTimeout(slider._pausedTimer);
                          slider._pausedTimer = null;
                        }
                      },
                      after: function(slider) {
                        var pauseTime = slider.vars.playAfterPaused;
                        if (pauseTime && !isNaN(pauseTime) && !slider.playing) {
                          if (!slider.manualPause && !slider.manualPlay && !slider.stopped) {
                            slider._pausedTimer = window.setTimeout(function() {
                              slider.play();
                            }, pauseTime);
                          }
                        }
                      }
                          // 设置其他参数
                    });
                }else{
                        console.log("aborted");
                    };
                }
            });
    }

    function setIcon (goal,iconentrance) {
        var icon = iconentrance,
        link,img,title;
        var ens = $(goal);
        $.each(icon,function  (i,item) {
            link = icon[i].link,
            imgSrc  = icon[i].img.src,
            imgAlt  = icon[i].img.alt,
            title = icon[i].title;
            ens.eq(i).append("<a></a>").find("a").attr("href",link).append("<img>").find("img").attr("src",imgSrc).attr("alt",imgAlt);
            ens.eq(i).find("span").text(title);
        })
    };
    function setsorts(goal,data) {
        $.each(data,function (i,item) {
            var sortData = data[i]
            setSort(goal,sortData,i+1)
        })
        function setSort(goal,data,datai) {
            // console.log(data)
            var sort_icons = data.sort_icons
                sort_banners = data.sort_banners
                name = ''
                source= ''
                url= ''
                icon = ''
                sort_banner =''
                more_data = []

                $.each(sort_icons,function (i,item) {
                    // console.log(sort_icons)
                    name = sort_icons[i].icon_name
                    source = sort_icons[i].icon_source
                    url = sort_icons[i].icon_url
                    icon += '<div class="entrance  " imgw="280" imgh="280" style="height: 80px;">'+
                    '<span style="position: absolute;bottom:0;">'+name+'</span>'+
                    '<a href="'+url+'"><img src="img/index/sort/'+datai+'/'+source+'"></a></div>\n'
                })

            if (sort_banners != null) {
                $.each(sort_banners,function (i,item) {
                     banner = sort_banners[i].banner_source
                     banner_url = sort_banners[i].banner_url
                    sort_banner += '<div class="sort-banner " imgw="750" imgh="82" style="height: 34.9867px;"><a href="'+banner_url+

                     '"><img src="img/index/banner/'+banner+'"></a></div>\n'
                })
            }
            if (sort_banner == "") {
                    console.log('null')
                   sort_banner = '';
            }else{
                console.log('true')
                sort_banner = '<div class="sort-banners">'+sort_banner+'</div>\n';
            }
            sort_box = '<div class="sort clearfix">\n'+
                             '<div class="entrance-name">'+data.sort_name+'</div>\n'+
                             '<div class="sort-entrance clearfix">'+icon+'</div>\n'+
                             sort_banner+
                         '</div>';
                         console.log(sort_banner)
                $(goal).append(sort_box)
                resizeFrame('.entrance')
        }
     }
    function setBanner (goal,bannersJson) {
        var list = $(goal).append('ul'),li=""
         $.each(bannersJson,function  (i,item) {
            li += '<li class="bans " imgW="750" imgH="280"><a href="'+this.link+'"><img src="'+this.img.src+'" alt="'+this.img.alt+'"/></a></li>';
         })
         list.append(li);
    };
   



    function addloading (selector) {
        var style = "<style>.spinner{width:40px;height:40px;position:relative;margin:0;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.Allnews .spinner{left:50px;top:50px}.double-bounce1,.double-bounce2{width:100%;height:100%;border-radius:50%;background-color:#d7d7d7;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:bounce 2s infinite ease-in-out;animation:bounce 2s infinite ease-in-out}.double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes bounce{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}.onscroll{display:block;-webkit-animation:h100 2s infinite ease-in-out;animation:h100 2s infinite ease-in-out}@-webkit-keyframes h100{0%{top:0}100%{top:-100%}}@keyframes h100{0%{top:0}100%{top:-100%}}</style>";
        $('head').append(style);
        var spinner = "<div class='spinner'><div class='double-bounce1'></div><div class='double-bounce2'></div></div>";
        var address = $(selector);
        address.append(spinner);
        var img = $(selector).find("img"),sp = [],imgA = img.parent(),sp = $(".spinner");
        img.remove();
            $.each(img,function  (i,item) {
                // console.log(i,item);
                loadImage(img.eq(i).attr("src"),function  () {
                    imgA.eq(i).append("<img src='"+img.eq(i).attr('src')+"'/>");
                    // console.log("当前第"+i+"个现在完毕");
                    sp.push(i);
                    sp.eq(i+1).remove();
                })
            });
    }

    function initPage(sliders,banners,sorts){
        setSlider(".am-slides",sliders);
        // setBanner(".banner",banners);
        // setsorts('.sorts',sorts)
    };


    $.get("js/data.json?"+Math.random(),function  (data) {
        var sliders = data.sliders,
            iconentrance = data.iconentrance,
            news = data.news,
            banners = data.banners,
            sorts = data.sorts
            // console.log(scrollnews);
        initPage(sliders,banners,sorts);

        resizeFrame(".am-slider");
        resizeFrame(".entrance");
        resizeFrame(".bans");
        resizeFrame(".banner-tp");
        resizeFrame('.sort-banner');

        addloading(".banner li,.sort-banner,.entrance")
    });


    //附近的店同步存储 xloc，yloc
                $("body").on("click",".nearby_stores",function(){
                    var url=$(this).data("url");
                    var xylocation = getloc();
                    var xloc=0,yloc=0,address="";
					if(xylocation.isSuccess == '1'){
						xloc = xylocation.locX;
						yloc = xylocation.locY;
						address=xylocation.address;
					}
                    //var timestamp = new Date().getTime();
                  //  $.post("/statichtml/bjmovie01/estores/Mall/Public/setCookieZb?time=" + timestamp + "&" + Math.random(), {xloc: xloc, yloc: yloc},function(){
                   // });
				  	// layer.load();
					 location.href=url+"&xloc="+xloc+"&yloc="+yloc+"&address="+address+"&beginappi&action=newView&endappi";
                })
});

document.body.addEventListener('touchstart', function () { })

//返回值是json对象 isSuccess,locX,locY
function getloc() {
    try {
        var xylocation;
        if (window.showLocation) {
            //安卓的
            xylocation = window.showLocation.getLocation();
        } else {
            //ios的
            xylocation = getLocationIos();
        }
        return JSON.parse(xylocation);
    } catch (e) {
        return JSON.parse('{ "isSuccess": 0 }');
    }
}



function loadImage(url, callback) {
 var img = new Image(); //创建一个Image对象，实现图片的预下载
 img.src = url;
 
 if(img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
     callback.call(img);
     // console.log("complete")
     return; // 直接返回，不用再处理onload事件
    }
 img.onload = function () { //图片下载完毕时异步调用callback函数。
        callback.call(img);//将回调函数的this替换为Image对象
        // console.log("onload");
    };
};
