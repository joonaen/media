
    var screenSize, screenHeight;
      
    function screen_size() {
     var screenSize = $(window).width(); //스크린의 너비
     var screenHeight = $(window).height(); //스크린의 높이
  
      $("#content").css("margin-top", screenHeight);
  
      if (screenSize > 768) {
        
        $("#imgBG").attr("src", "./images/sub2_main.jpg"); //이미지 이름 변경
        
      }else{
        $("#imgBG").attr("src", "./images/sub2_main2.jpg");
      }
      
    }
  
    screen_size(); //최초 실행시 호출
  
    $(window).resize(function () {
      //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screen_size();
    });
  
    $(".down").click(function () {
      screenHeight = $(window).height();
      $("html,body").animate({
        scrollTop: screenHeight
      }, 1000);
    });

