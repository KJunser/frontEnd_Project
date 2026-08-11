$(function(){
    //트리거버튼 눌렀을 때
    $('#trigger').click(function(e){
        e.preventDefault();
        $('#main-menu li, #main-menu').toggleClass('active');
        $(this).toggleClass('active');
        
    });
    
    // 네온효과
    $('.ma-cd-wrap').hover(function() {
        $(this).find('h4').addClass('neon-glow');
        }, function() {
            $(this).find('h4').removeClass('neon-glow');
        });

        $('.ma-sub2-cir a, .ma-cd-wrap a').hover(function() {
            $(this).toggleClass('neon-glow');
    });

    //돌아가는버튼
    $('.ma-cd-btn a').hover(function() {
        $(this).toggleClass('fa-spin');
    });


    

});