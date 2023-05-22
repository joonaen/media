
    var screenSize, screenHeight;
    var current = false;
  
    function screen_size() {
     var screenSize = $(window).width(); //스크린의 너비
     var screenHeight = $(window).height(); //스크린의 높이
  
      $("#content").css("margin-top", screenHeight);
  
      if (screenSize > 768 && current == false) {
        //스크린 사이즈 변경 처리 원할 시,
        $("#videoBG").show();
        $("#videoBG").attr("src", "./images/main.mp4"); //이미지 이름 변경
        $("#imgBG").hide();
        current = true;
      }
      if (screenSize <= 768) {
        $("#videoBG").hide();
        $("#videoBG").attr("src", "");
        $("#imgBG").show();
        current = false;
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





   




  var s1 = $("#content .story").offset().top+800;
  
  

  //console.log(s5);

  $(window).on("scroll", function () {
              var scroll = $(window).scrollTop(); //스크롤 top의 높이

              //$(".topText").text(scroll); //스크롤 좌표의 값

              //스크롤의 거리의 범위를 처리

              // wave
              if (scroll >= s1) {
                  $(".jetBox").addClass("on");
              } else if (scroll < s1) {
                  $(".jetBox").removeClass("on");
              } 

              //main 캐릭터
  });