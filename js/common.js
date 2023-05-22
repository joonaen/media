$(document).ready(function() {
    $(".menuTrigger").toggle(function() {
      $("#headerArea").addClass('menuCurrent')
      $("#gnb").slideDown('slow');
    }, function() {
      $("#gnb").slideUp('fast');
      $("#headerArea").removeClass('menuCurrent')
    });
    
    
     var curr=0;
    $(window).resize(function(){ 
       var scrSize = $(window).width(); 
       if( scrSize > 768){
        $(".menuTrigger").hide();
         $("#gnb").show();
          curr=1;
       }
       if(curr==1 && scrSize < 768){
        $(".menuTrigger").show();
         $("#gnb").hide();
          curr=0;
       }
     }); 
     
   });


   var scrnSize;
    
    function scrn_size() {
     var scrnSize = $(window).width(); //스크린의 너비
     
    
  
      if (scrnSize > 768) {
        //스크린 사이즈 변경 처리 원할 시,
        $(".menuTrigger").hide();
        
      }
      if (scrnSize <= 768) {
        $(".menuTrigger").show();
        $("#gnb").hide();
      }
    }
    scrn_size();


    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
      var scroll = $(window).scrollTop(); //스크롤의 거리
      var winh = $(window).height()/3;

     
   

      if(scroll>winh){ //500이상의 거리가 발생되면
          $('.topMove').fadeIn('slow');
          
      }else{
          $('.topMove').fadeOut('fast');
          
      }
 });

  $('.topMove').click(function(e){
     e.preventDefault();
      //상단으로 스르륵 이동합니다.
     $("html,body").stop().animate({"scrollTop":0},500); 
  });