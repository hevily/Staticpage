<!-- header hover show more nav -->
    $(function () { 
          $(".more_con").hide()
          $("a[name='more']").mouseover(function (event) {    
             event.stopPropagation();    
             $(".more_con").show();
             $(this).addClass("moreon");    
              });   
          $(".more_con").mouseover(function(event){
                event.stopPropagation(); 
                $(".more_con").show();  
                $("a[name='more']").addClass("moreon");      
             })
         $(document).mouseover(function (event) { $(".more_con").slideUp();$("a[name='more']").removeClass("moreon");  });       
                 
    })