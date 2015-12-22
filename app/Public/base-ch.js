$ = function (val) {
        switch(val.charAt(0)) {
            case '#' :
                return document.getElementById(val.substring(1));
                break;
            case '.' :
                val = val.replace('.','');
                if(document.getElementsByClassName)
                    return document.getElementsByClassName(val);
                else {
                    var obj = document.getElementsByTagName('*'),len = obj.length,arr=[];
                    for(var i=0;i<len;i++) {
                        if(obj[i].className == val) {
                            arr[arr.length] = obj[i];
                        }
                    }
                    return arr;
                }
                break;
            default :
                if(document.getElementsByName(val).length > 0)
                    return document.getElementsByName(val);
                else
                    return document.getElementsByTagName(val);
        }
    }
function getDomid(id){
    return document.getElementById(id);
}
function getDomcN (className) {
    return document.getElementsByClassName(className);
}