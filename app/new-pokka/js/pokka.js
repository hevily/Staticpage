window.onload = function() {
    
    function initPage(json) {
        initMainSwiper('.top-img',json.headerImgs);
        initSlider('.flexslider',json.sliders)
    }
    function initMainSwiper(goal,data) {
        // 店铺宣传图
        var goal_img = $(goal).find('.headerIMG'),goal_swiper = $(goal).find('.swiper-main')
            data = data
            console.log(data)
            var img = ""
            var logo = ""
            $.each(data,function (i,key) {
                img += "<img src='./img/headerimg/"+key.headerImg+"' title='"+key.headerImg+ "' alt='"+ key.headerImg +"'/>";
                logo += "<div class='swiper-slide' >"
                           +"<div class='title' data-stores_id='"+key.icon_stores_id+"'>"
                                +"<img src='img/store-logo/"+key.storeIcon+"'>"
                            +"</div>"
                        +"</div>";
            })
        goal_img.append(img);
        goal_swiper.find('.swiper-wrapper').append(logo);
        initSwiper('.swiper-main');
    }
    $.ajax({
        url:'./js/pokka.json'
        ,type:'get'
    }).done(function (data) {
        initPage(data);
    })
    // init Swiper
    function initSwiper(swiper) {
       var mySwiper = new Swiper(swiper,{
            centeredSlides: true
            ,slidesPerView: 4
            ,width:120
            ,watchActiveIndex: true
            ,onSlideChangeEnd: function(swiper){
                var index = mySwiper.activeIndex
                console.log(index);
                changeHeaderImg(index);
                changeStoreSwiper(index);
            }
        })
    }
    function changeHeaderImg(index) {
    	var headerImg = $('.headerIMG').find('img');
    	headerImg.fadeOut();
    	headerImg.eq(index).fadeIn();
    }
    function changeStoreSwiper(index) {
    	var storeSwiper = $('.store-img-swiper');
    	storeSwiper.fadeOut();
    	storeSwiper.eq(index).fadeIn();
    }
    function initSlider(goal,data) {
        var data = data,slider = "";
        var _goal = $(goal).find('ul');
        $.each(data,function (i,key) {
            slider +=   "<li ><img src='./img/sliders/"+key.slider+"' onclick='window.location=\""+key.link+"\"'/><p class='flex-caption'>"+key.desc+"</p></li>"
        })
        _goal.append(slider);
        $(goal).flexslider({
            animation: "slide"
            // ,direction:"vertical"
            ,controlNav: false
            ,directionNav:false
            ,slideshow: true
            ,slideshowSpeed: 2000
            ,touch:false
            ,animationLoop: true
          });
    }

    notMove('.stoptouch');




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



    
    //点击品店铺图标，跳转至 店铺及其分店列表，按距离近远排序
    $(".swiper-main").on("click",".title",function(){
        var stores_id=$(this).data("stores_id");
        if(stores_id!=''){
             var xylocation = getloc();
             var xloc=0,yloc=0,address="";
            if(xylocation.isSuccess == '1'){
                xloc = xylocation.locX;
                yloc = xylocation.locY;
                address=xylocation.address;
            }
         location.href="https://shop.yshjie.com/statichtml/bjmovie01/estores/Home/Store/stores_branch?xloc="+xloc+"&yloc="+yloc+"&address="+address+"&stores_id="+stores_id+"&location_id=0&beginappi&action=newView&endappi";
        }
    })
    // 阻止滑动
    function notMove(ele) {
        $(ele).on('touchmove',function(event) { event.preventDefault(); }, false);
    }

}
