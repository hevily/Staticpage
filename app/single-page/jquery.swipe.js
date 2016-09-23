(function($) {

        var old = $.fn.swipe;



        $.fn.swipe = function(option) {

                var opt = {

                        'left': $.noop,

                        'right': $.noop,

                        'up': $.noop,

                        'down': $.noop

                };



                if ($.type(option) == 'string') {

                        switch (option.toLowerCase()) {

                                case 'left':

                                        if (this.data('opt').left && $.isFunction(this.data('opt').left)) {

                                                this.data('opt').left.call(this);

                                        }

                                        break;

                                case 'right':

                                        if (this.data('opt').right && $.isFunction(this.data('opt').right)) {

                                                this.data('opt').right.call(this);

                                        }

                                        break;

                                case 'up':

                                        if (this.data('opt').up && $.isFunction(this.data('opt').up)) {

                                                this.data('opt').up.call(this);

                                        }

                                        break;

                                case 'down':

                                        if (this.data('opt').down && $.isFunction(this.data('opt').down)) {

                                                this.data('opt').down.call(this);

                                        }

                                        break;

                                default:

                                        break;

                        }



                        return this;

                } else if ($.isPlainObject(option)) {

                        var clone = {};



                        //大小写不敏感处理

                        $.each(option, function(k, v) {

                                clone[k.toLowerCase()] = v;

                        });



                        $.extend(opt, clone);



                        return this.each(function(index, ele) {

                                //敏感距离

                                var dis = 120;

                                //各元素赋值，备直接触发时用

                                $(ele).data('opt', $.extend({}, opt));



                                var bFlag = 'ontouchstart' in window;



                                if (bFlag) {

                                        touchEvent();

                                } else {

                                        mouseEvent();

                                }



                                //移动端

                                function touchEvent() {

                                        ele.ontouchstart = function(e) {

                                                var ev = e || event,

                                                        startX = ev.pageX,

                                                        startY = ev.pageY,

                                                        startLeft = $(ele).position().left,

                                                        startTop = $(ele).position().top,

                                                        start = {

                                                                left: startLeft,

                                                                top: startTop

                                                        },

                                                        disX = startX - startLeft,

                                                        disY = startY - startTop;



                                                if (ev.targetTouches.length == 1) {



                                                        document.ontouchmove = function(e) {

                                                                fnMove(e, disX, disY);

                                                        };



                                                        document.ontouchend = function(e) {

                                                                fnEnd(e, startX, startY, start);

                                                        };



                                                }

                                        };

                                }



                                //pc端

                                function mouseEvent() {

                                        $(ele).on('mousedown.swipe.founder', function(e) {

                                                var startX = e.pageX,

                                                        startY = e.pageY,

                                                        start = $(this).position(),

                                                        disX = startX - $(this).offset().left,

                                                        disY = startY - $(this).offset().top;



                                                $(document).on('mousemove.swipe.founder', function(e) {

                                                        fnMove(e, disX, disY);

                                                });



                                                $(document).on('mouseup.swipe.founder', function(e) {

                                                        fnEnd(e, startX, startY, start);

                                                });



                                                e.preventDefault();

                                        });

                                }



                                //物体移动

                                function fnMove(e, disX, disY) {

                                        if (opt.left != $.noop || opt.right != $.noop) {

                                                $(ele).css('left', e.pageX - disX - $(ele).parent().offset().left + 'px');

                                        }



                                        if (opt.up != $.noop || opt.down != $.noop) {

                                                $(ele).css('top', e.pageY - disY - $(ele).parent().offset().top + 'px');

                                        }

                                        

                                        e.preventDefault();

                                }



                                //结束移动

                                function fnEnd(ev, startX, startY, start) {

                                        var endX = ev.pageX,

                                                endY = ev.pageY,

                                                x = Math.abs(endX - startX),

                                                y = Math.abs(endY - startY),

                                                direction = null;



                                        setDirection();



                                        function setDirection() {

                                                //必须在指定dis大小外，消除敏感距离

                                                direction = x >= y ? (endX < startX ? (Math.abs(endX - startX) > dis ? 'left' : null) : (Math.abs(endX - startX) > dis ? 'right' : null)) : (endY < startY ? (Math.abs(endY - startY) > dis ? 'up' : null) : (Math.abs(endY - startY) > dis ? 'down' : null));



                                                switch (direction) {

                                                        case 'left':

                                                                if (opt.left && $.isFunction(opt.left)) {

                                                                        opt.left.call(ele);