/**
 * [slideOut description]
 * @param  {ojbect} options 需添加左滑操作的目标对象 items,需添加的按钮 btns 
 * @return {[type]}         [description]
 */
// var ticketSlide = new slideOut({
//      itemsBox:'.ticket-box' 滑动块外部容器
//      ,items:'.ticket' 滑动块
//      ,width:60 滑动块总大小
//      ,btns:['忽略'] 滑动出现按钮配置，可多个，宽度均分滑动块大小
//      ,skin:'style-classname' 自定义样式类名 可选项
//      ,btn1:function (btn) { 按钮点击事件 btn1 btn2 对应排列 返回为当前被点击按钮
//         removeTicket(btn)
//      }
//  })


function isPassive() {
    var supportsPassiveOption = false;
    try {
      addEventListener("test", null, { get passive() { supportsPassiveOption = true; } });
    } catch(e) {}
    return supportsPassiveOption;
}


window.slideOut = function (options) {
    var itemsBox = options.itemsBox ? options.itemsBox : ''
        ,items = options.items ? options.items : ''
        ,maxWidth = options.width ? options.width : 120
        ,btnArr = options.btns ? options.btns : ''
        ,skin = options.skin ? options.skin : 'default-skin'
        ,singleSlide = options.singleSlide ? options.singleSlide : true
        itemBox = $(itemsBox)
    $.each(itemBox,function (i,item) {
        var _this = $(item).find(items);
        _this.on('touchstart',touchStart);
        _this.on('touchmove',touchMove);
        _this.on('touchend',touchEnd);
    })
    var Sx = 0
        ,Mx = 0
        ,Ex = 0
        ,Sy = 0
        ,My = 0
        ,Ey = 0
        ,shu = 'shu'
        ,hen = 'hen'
        ,stay= 'stay'
        ,btnClass = 'item-action'
        ,firstLeft = 0
        ,firstLeftTag = 'firstLeftTag'
        ,durationTime = 0.5
        // slideSingle variable
        ,endSlide = 'endSlide'
        ,oldItem = ''
        ,curItem = ''
        ,slided = false
    function touchStart(e) {
        var _touch = e.originalEvent.targetTouches[0]
        var _x= _touch.pageX,_y= _touch.pageY
            Sx = _x,Sy = _y
            _this = $(this)
        // remove direction
        removeDirection(_this)
        setZindex(_this)
        var slideBtn = $('.'+btnClass)
        slided = false
        if(slideBtn.length != 0){
            slided = true
            var oldItemBox = slideBtn.closest('li')
                ,oldItem = oldItemBox.find(items)
            addtransiton(oldItem)
            oldItem.css('left',0)
            widerBtn(oldItemBox,0)
            removetransition(oldItem)
            removeBtn(oldItemBox)
        }
        _this.addClass(firstLeftTag)
        // resetItem(true)
    }
    function touchMove(e) {
        var _touch = e.originalEvent.targetTouches[0]
        var _x= _touch.pageX,_y= _touch.pageY
            Mx = _x,My = _y
            _this = $(this)
        // console.log(slided)

        if(slided){return false;}
        // diection check 
           dir =  checkDirection(_this)
           // console.log(dir)
           if (dir == 'hen') { // 横向滑动
                // e.preventDefault()
                // 移动目标
                moveItem(_this)

           }

    }
    function touchEnd(e) {
        var _touch = e.originalEvent.changedTouches[0]
        var _x= _touch.pageX,_y= _touch.pageY
            Ex = _x,Ey = _y
            _this = $(this)
        // console.log(Ex+'End-X')
        if(slided){return false;}
        // end check
        dir = checkDirection(_this)
        // console.log(dir)
        if(Sx == Ex){
            return ;
        }
        // console.log(Sx,Ex)
        endCheck(_this)
        removetransition(_this)
        slided = false
    }
    function setZindex(item) {
        var zindex = item.css('z-index')
        if(zindex == 'auto' || zindex == '' || zindex == undefined){
            item.css('z-index',1)
        }
    }
    function checkDirection(item){
        var cj = 10
        var cX = Mx  - Sx,cY = My  - Sy
        // 误差滑动距离
        cjX = getinteger(cX)
        cjY = getinteger(cY)
       
        function getdir() {
            dir = item.attr('direction-touch')
            if (dir == '' || dir == undefined){
                setdir()
                // console.log('seting-dir')
            }
        }
        function setdir() {
            if(cjX < cjY){
                item.attr('direction-touch',shu)
                // console.log('竖向滑动')
            } else {
                item.attr('direction-touch',hen)
                // console.log('横向滑动')
            }
        }
        getdir()
        return item.attr('direction-touch')
    }
    function getinteger(num){
        if(num > 0 ){
            return num
        }else{
            return num / -1
        }
    }
    function removeDirection(item) {
        item.attr('direction-touch','')
    }
    function firstleft(item) {
       var one = item.hasClass(firstLeftTag)
       if(one){
            var fleft = parseInt(item.css('left'))
            item.removeClass(firstLeftTag)
            // console.log(fleft)

           if(isNaN(fleft) ){
                return 0
           }
            return fleft
       }else{
            return firstLeft
       }

   }
    function moveItem(item) {
        firstLeft = firstleft(_this)
        dis = Mx -Sx

        if(dis >0 ){
            // right
            item.css('left',dis + firstLeft)
        }else if(dis < 0){
            item.css('left',dis + firstLeft)
        }
        addbtn(item)
        widerBtn(_this)

    }
    function addbtn(item) {
        // console.log(btnArr + '+++++++++')
        var _itemBox = item.closest(itemsBox)
        if(_itemBox.find('.'+btnClass).length == 0){
            var btn = '',btnbox = ''
            for (var i = 0; i < btnArr.length; i++) {
                btn += '<div class="item-action-btn item-action-btn'+i+'"><span>'+btnArr[i]+'</span></div>'
            }
            btnbox = '<div class="'+btnClass+' '+skin+'">'+btn+'</div>'
            _itemBox.append(btnbox)
            bindFun(_itemBox)
        }
        function bindFun(btnBox) {
            var _item = btnBox
                ,funBtn = _item.find('.'+btnClass).find('.item-action-btn')
            $.each(funBtn,function (i,item) {
                var _this = $(item)
                _this.on('click',function () {
                    var self = this
                    funX = 'btn'+(i+1)
                    funtpl = options[funX] ? options[funX] : ''
                    if(funtpl != ''){
                        fun = eval(funtpl)
                        fun(self)
                    }
                })
            })
        }
    }
    function widerBtn(item,leftTpl) {
        var _itemBox = item.closest(itemsBox)
        btns = _itemBox.find('.'+btnClass)
        // width = item.width()
        width = maxWidth
                btns.show()
        // console.log(leftTpl)
        if(leftTpl != undefined){
            leftTpl = leftTpl
            // console.log(leftTpl)
        }else {
            leftTpl = getinteger(parseInt(item.css('left')))
        }
        if(leftTpl > width){
            leftTpl = width
        }
            // console.log(leftTpl)
        // console.log(btns)
        // console.log(width,leftTpl)
        btns.css('width',leftTpl)
        // btns.css('right', -leftTpl)
        // btns.css('right',-leftTpl)
        eachBtn = btns.find('.item-action-btn')
        eachBtn.css('width',leftTpl/eachBtn.length)
        setTimeout(function () {
            if(parseInt(item.css('left')) == 0){
                btns.hide()
                // console.log(leftTpl)
                // console.log('hideed')
            }
        },durationTime*1000)
    }
    function endCheck(item) {
        left = parseInt(item.css('left'))
        // width = item.width()
        width = maxWidth
        dir = ''
        var percent = 0
            ,point = 0.6

        // console.log(Sx,Ex)
        if(Sx - Ex > 0){
            dir = 'left'
            leftAction()
        }else{
            dir = 'right'
           rightAction()
        }

        function leftAction() {
            // console.log(left)
            if(left < -width){
                // left boundary
                addtransiton(item)
                item.css('left',-width)
                widerBtn(item,width)
            }else if(left <= -width* point){
                // 30 percent boundary
                // console.log('30 percent boundary')
                addtransiton(item)
                item.css('left',-width * (1 - percent))
                widerBtn(item,width * (1 - percent))
                // console.log(width * 1)
            }else if(left > -width * point){

                addtransiton(item)
                item.css('left',0)
                widerBtn(item,0)
            }
        }
        function rightAction() {
            if(left > 0 ){
                // right boundary
                item.css('left',0)
                addtransiton(item)
                widerBtn(item,0)
                removeBtn(item)
            }else if( left > -width * point){
                item.css('left',0)
                addtransiton(item)
                widerBtn(item,0)
                removeBtn(item)
            }else{
                addtransiton(item)
                item.css('left',-width * (1 - percent))
                widerBtn(item,width * (1 - percent))

            }
        }
    }
    function addtransiton(item) {
        var _itemBox = item.closest(itemsBox)
        item.css('transition','all '+durationTime+'s')
        _itemBox.find('.'+btnClass).css('transition','all '+durationTime+'s')
    }
    function removetransition(item) {
        var _itemBox = item.closest(itemsBox)
        setTimeout(function () {
            item.css('transition','none')
            _itemBox.find('.'+btnClass).css('transition','none')
        },durationTime*1000)
    }
    function slideSingle(yes,item) {
        if(yes){
            oldItem = ''
            oldItem = $(item)
        }
    }

    function resetItem (yes) {
        if(yes){
            addtransiton(oldItem)
            oldItem.css('left',0)
            widerBtn(oldItem,0)
        }
    }
    function removeBtn(item) {
        setTimeout(function () {
            item.closest(itemsBox).find('.'+btnClass).remove()
        },durationTime * 1000)
    }
}