<!--添加标签-->
  //var arry=new Arry[];
  $(function(){
        var ass=[];
     $('.inuts').click(function(){
        var nums=$(this).attr("value");
        //alert(nums);
        var spans="<span>"+nums+"</span>";
        //$("#biaoqian").prepend("<span onclick=RemoSpan(this)>"+nums+"</span>");
        var hid=$("#hid").val();
        if(hid.indexOf(nums)>=0){
              
              //t(123);
        }else{ //ert(456);
               $("#biaoqian").prepend("<span onclick=RemoSpan(this)>"+nums+"</span>");
               var qb=hid+nums+",";
               $("#hid").val(qb);
        }
        
      
        

       });  
  });

      function RemoSpan(aa){
         aa.remove();
        // alert(aa.innerText);
         var his=$("#hid").val().substring(0,$("#hid").val().length-1);
         var hid=[];
         hid=his.split(",");
         var i="";
         for(var j=0; j<hid.length; j++)
         {

                 if(hid[j]==aa.innerText){}else{

                  i=i+hid[j]+",";
                 }

         }
        $("#hid").val(i);
         }
<!--添加标签-->

<!--联名客户-->

  function Lmkh(){
    
    var lm=document.getElementById("tt");
    var lms=document.getElementById("tt1");
    lm.style.display="block";
    lms.style.display="block";
      var bodys=doucumnet.body;
   bodys.style.overflow="hidden"
    }
  function zhiDao(){
     var lm=document.getElementById("tt");
    var lms=document.getElementById("tt1");
    lm.style.display="none";
    lms.style.display="none";
    
    } 
    function zhiDaobp(){
      
      var lmm=document.getElementById("tt");
    var bps=document.getElementById("bp");
    lmm.style.display="none";
  bps.style.display="none";
      }
      
  function biaoQ(){
    
     var lmm=document.getElementById("tt");
    var bps=document.getElementById("bp");
    lmm.style.display="block";
  bps.style.display="block";
    
    }



<!--第一个新增-->

              
           
             var main1=document.getElementById('phones');
             var zeng1=document.getElementById("ceng1");
            var divArray1= main1.getElementsByClassName("pp");
          //alert(divArray.length);
              var numm=0; 
                 
             zeng1.onclick=function(){
                 
                
               numm++;
            if(numm%4==1){
              //alert(123);
              showDivs(1,2);
            }else if(numm%4==2){
              //alert(456);
              showDivs(2,0); 
            }else if(numm%4==3){
              //alert(789);
              showDivs(3,1);
              z12=document.getElementById("zeng2");  
              z12.style.display="none";
            }
               
               }
           
           
           function showDivs(now){ 
              divArray1[now].style.display = "block";  
            }


<!--第二个新增-->
              
           
             var main=document.getElementById('phones_2');
             var zeng=document.getElementById("ceng");
            var divArray= main.getElementsByClassName("pp");
          //alert(divArray.length);
              var num=0; 
                 
             zeng.onclick=function(){
                 
                
               num++;
            if(num%4==1){
              //alert(123);
              showDiv(1,2);
            }else if(num%4==2){
              //alert(456);
              showDiv(2,0); 
            }else if(num%4==3){
              //alert(789);
              showDiv(3,1);
              z1=document.getElementById("zeng1");  
              z1.style.display="none";
            }
               
               }
           
           
           function showDiv(now){ 
              divArray[now].style.display = "block";  
            }


<!--显示添加联名客户-->

                  function kehuInfo(){
      var kehu=document.getElementById("info_total");
      var kehu_body=document.getElementById("lmkehu");
          kehu_body.style.display="block";
          kehu.style.display="none";
      }

<!--显示标签-->
        function TianjiabqS(){
      var kehu=document.getElementById("tianjiabq");
      var kehu_body=document.getElementById("info_total");
          kehu_body.style.display="none";
          kehu.style.display="block";
      }

  <!--联名用户-->

   
                  function kehuBianji(){
      var kehu=document.getElementById("info_total");
      var kehu_body=document.getElementById("lmkehu");
          kehu_body.style.display="block";
          kehu.style.display="none";
      }       