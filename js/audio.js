$(document).ready(function () {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', $('.active-song').attr('data-src'));

    var tl = new TimelineMax();
    tl.to('.player__albumImg', 3, {
        rotation: '360deg',
        repeat: -1,
        ease: Power0.easeNone
    }, '-=0.2');
    tl.pause();

    $('.player__play').click(function () {

        if ($('.player').hasClass('play')) {
            $('.player').removeClass('play');
            audioElement.pause();
            TweenMax.to('.player__albumImg', 0.2, {
                scale: 1,
                ease: Power0.easeNone
            })
            tl.pause();
        } else {
            $('.player').addClass('play');
            audioElement.play();
            TweenMax.to('.player__albumImg', 0.2, {
                scale: 1.1,
                ease: Power0.easeNone
            })
            tl.resume();
        }

    });


    var playhead = document.getElementById("playhead");
    audioElement.addEventListener("timeupdate", function () {
        var duration = this.duration;
        var currentTime = this.currentTime;
        var percentage = (currentTime / duration) * 100;
        playhead.style.width = percentage + '%';
    });

    function updateInfo() {
        $('.player__author').text($('.active-song').attr('data-author'));
        $('.player__song').text($('.active-song').attr('data-song'));
    }
    updateInfo();
    var active = 1
    $('.music .poster ul li').hide()
    $('.music .poster ul li:nth-child(1)').show()
    $('.player__next').click(function () {
        active++;
        if(active == 3){
            active = 1
        }
        console.log(active)
        $('.music .poster ul li').hide()
        $('.music .poster ul li:nth-child('+active+')').show()
        if ($('.player .player__albumImg.active-song').is(':last-child')) {
            $('.player__albumImg.active-song').removeClass('active-song');
            $('.player .player__albumImg:first-child').addClass('active-song');
            audioElement.addEventListener("timeupdate", function () {
                var duration = this.duration;
                var currentTime = this.currentTime;
                var percentage = (currentTime / duration) * 100;
                playhead.style.width = percentage + '%';
            });
        } else {
            $('.player__albumImg.active-song').removeClass('active-song').next().addClass('active-song');
            audioElement.addEventListener("timeupdate", function () {
                var duration = this.duration;
                var currentTime = this.currentTime;
                var percentage = (currentTime / duration) * 100;
                playhead.style.width = percentage + '%';
            });
        }
        updateInfo();
        audioElement.setAttribute('src', $('.active-song').attr('data-src'));
        audioElement.play();
    });

    $('.player__prev').click(function () {
        
        active--;
        if(active == 0){
            active = 2
        }
        console.log(active)
        $('.music .poster ul li').hide()
        $('.music .poster ul li:nth-child('+active+')').show()
        if ($('.player .player__albumImg.active-song').is(':first-child')) {
            $('.player__albumImg.active-song').removeClass('active-song');
            $('.player .player__albumImg:last-child').addClass('active-song');
            audioElement.addEventListener("timeupdate", function () {
                var duration = this.duration;
                var currentTime = this.currentTime;
                var percentage = (currentTime / duration) * 100;
                playhead.style.width = percentage + '%';
            });
        } else {
            $('.player__albumImg.active-song').removeClass('active-song').prev().addClass('active-song');
            audioElement.addEventListener("timeupdate", function () {
                var duration = this.duration;
                var currentTime = this.currentTime;
                var percentage = (currentTime / duration) * 100;
                playhead.style.width = percentage + '%';
            });
        }
        updateInfo();
        audioElement.setAttribute('src', $('.active-song').attr('data-src'));
        audioElement.play();
    });

});