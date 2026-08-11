$(function(){

    $('.bn').mousemove(function(e) {
        var w = $(this).width();
        var h = $(this).height();
        
        var offset = $(this).offset();
        var relativeX = e.pageX - offset.left;
        var relativeY = e.pageY - offset.top;
        
        var moveX = (relativeX / w) - 0.5;
        var moveY = (relativeY / h) - 0.5;
        
        $('.ex-bn-bg').css({
            'transform': `translate(${moveX * -40}px, ${moveY * -40}px) scale(1.1)`,
            'transition': 'transform 0.1s ease-out'
        });
    });
    $('.bn').mouseleave(function() {
        $('.ex-bn-bg').css({
            'transform': 'translate(0, 0) scale(1.0)',
            'transition': 'transform 0.3s ease-out'
        });
    });


    $(window).on('scroll', function() {
        var wch = $(window).scrollTop();
        
        var subtitle1 = $('.sub-title').eq(0);
        if (wch > subtitle1.offset().top - 550) {
            $('.ex-la-cd').addClass('ani-show');
        }
        

        var subtitle2 = $('.sub-title').eq(1);
        if (wch > subtitle2.offset().top -550) {
            $('.ex-ps-bg').addClass('event-show');
        }
        

        var subtitle3 = $('.sub-title').eq(2);
        if (wch > subtitle3.offset().top -550) {
            // 3번째 섹션의 카드들에게도 동일한 애니메이션 효과 부여
            $('.ex-rs-wrap').addClass('ani-show');
        }
    });
});

