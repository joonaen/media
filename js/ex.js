
    var screenSize;
    var current = false;
    function screen_size() {
     var screenSize = $(window).width(); //스크린의 너비
     
    
  
      if (screenSize > 640 && current == false) {
        //스크린 사이즈 변경 처리 원할 시,
        $(".trailInner").removeClass("swiper-container swiper2")
        $(".trailWrap").removeClass("swiper-wrapper").attr('style', null)
        $(".thumb1").removeClass("swiper-slide").attr('style', null)
        $(".thumbInner").removeClass("swiperInner")
        current = true;
      }
      if (screenSize <= 640) {
        $(".trailInner").addClass("swiper-container swiper2")
        $(".trailWrap").addClass("swiper-wrapper")
        $(".thumb1").addClass("swiper-slide")
        $(".thumbInner").addClass("swiperInner")
        var swiper2 = new Swiper('.swiper2', {
          spaceBetween: 15,
          slidesPerView: 1,
          
            
           
            
          
        });
    
      }
    }
    screen_size();
    
    $(window).resize(function(){
        var screenSize = $(window).width();
        
        if (screenSize > 640 && current == false) {
        //스크린 사이즈 변경 처리 원할 시,
        $(".trailInner").removeClass("swiper-container swiper2 susWrap swiper-container-initialized swiper-container-horizontal")
        $(".trailWrap").removeClass("swiper-wrapper").attr('style', null)
        $(".thumb1").removeClass("swiper-slide swiper-slide-active swiper-slide-prev swiper-slide-next").attr('style', null)
        $(".thumbInner").removeClass("swiperInner")
        
        current = true;
      }
      if (screenSize <= 640) {
        $(".trailInner").addClass("swiper-container swiper2").attr('style','padding: 0 20px');
        $(".trailWrap").addClass("swiper-wrapper")
        $(".thumb1").addClass("swiper-slide")
        $(".thumbInner").addClass("swiperInner")
        var swiper2 = new Swiper('.swiper2', {
          spaceBetween: 15,
          slidesPerView: 1.2,
            
            
           
            
          
        });
        current = false;
      }
    })
