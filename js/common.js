$(function(){
    //banner hover moving effect
    
    $('.bn').mousemove(function(e) {
        if (window.innerWidth >= 1200) {
            var w = $(this).width();
            var h = $(this).height();
            
            var offset = $(this).offset();
            var relativeX = e.pageX - offset.left;
            var relativeY = e.pageY - offset.top;
            
            var moveX = (relativeX / w) - 0.5;
            var moveY = (relativeY / h) - 0.5;
            
            $('.ob-bn-bg').css({
                'transform': `translate(${moveX * -40}px, ${moveY * -40}px) scale(1.1)`,
                'transition': 'transform 0.1s ease-out'
            });
        }
    });
    $('.bn').mouseleave(function() {
        if (window.innerWidth) {
            $('.ob-bn-bg').css({
                'transform': 'translate(0, 0) scale(1.0)',
                'transition': 'transform 0.3s ease-out'
            });
        }
    });
    
    
    
    //trigger menu(TB~SM)
    $('#trigger').click(function(e){
        if (window.innerWidth < 1200) {
            e.preventDefault();
            $(this).toggleClass('active');
            $('#main-menu').toggleClass('active');
        }
    });
    
    
    //sub-menu slide (~HD)
    $('#main-menu > li').mouseenter(function(){
        if (window.innerWidth >= 1200) {
            $(this).find('.sub-menu').stop().slideDown();
        }
    });
    $('#main-menu > li').mouseleave(function(){
        if (window.innerWidth >= 1200) {
            $(this).find('.sub-menu').stop().slideUp();
        }
    });
    
    
    //sub-menu slide (TB ~ SM)
    $('#main-menu > li > a').on('click', function(e){
        if (window.innerWidth < 1200) {
            var link = $(this).attr('href');
            var subMenu = $(this).next('.sub-menu');
            if (!link || link === '' || link === '#') {
                e.preventDefault();
                if (subMenu.length > 0) {
                    subMenu.stop().slideToggle();
                    $(this).parent().siblings().find('.sub-menu').stop().slideUp();
                }
            }
        }
    });
    
    
    //navigation bar background dropdown effect
    $(window).on('scroll', function() {
        var windowTop = $(window).scrollTop();
        
        //navigation bar
        if (windowTop > 250) {
            $('header, .sub-menu a').addClass('active');
        } else {
            $('header, .sub-menu a').removeClass('active');
        }
    });
});