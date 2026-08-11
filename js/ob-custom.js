$(function(){
    //move to sub-cts with click sub-menu
    $('.ob-navbar a').click(function(e){
        e.preventDefault();
        var targetLtn = $(this).attr('href');
        var moveTo = $(targetLtn);
        
        if (moveTo.length) {
            $('html, body').stop().animate({
                scrollTop: moveTo.offset().top - 50
            }, 1000);
        }
    });
    
    //show effect
    $(window).on('scroll', function() {
        var windowTop = $(window).scrollTop();
        // content1
        var target1 = $('.sub-title').eq(0);
        if (windowTop > target1.offset().top -350) {
            $('.ob-in-bg1, .ob-in-bg2, .ob-in-cts, .ob-in-cts h3, .ob-in-cts p, .ob-in-cts a, .ob-in-cts-cd1, .ob-in-cts-cd2').addClass('active');
        }
        
        // content2
        var target2 = $('.sub-title').eq(1);
        if (windowTop > target2.offset().top -350) {
            $('.ob-ov-wrap, .ob-ov-cts').addClass('active');
        }
        
        // content3
        var target3 = $('.sub-title').eq(2);
        if (windowTop > target3.offset().top -350) {
            $('.ob-pr-bg').addClass('active');
        }
    });
    
    //card-cts hover effect
    $('.ob-pr-bg').mouseenter(function(){
        if (window.innerWidth >= 1200) {
            $(this).addClass('on');
            $(this).find('p').addClass('on');
            $(this).find('a').addClass('on');
        }
    });
    
    $('.ob-pr-bg').mouseleave(function(){
        if (window.innerWidth >= 1200) {
            $(this).removeClass('on');
            $(this).find('p').removeClass('on');
            $(this).find('a').removeClass('on');
        }
    });
});