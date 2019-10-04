(function () {
    'use strict';

    $('.imoveis-toggler').click( function(){
        const target = $($(this).attr("data-toggle"));
        $('.imoveis__slide ').removeClass('active');
        $(target).addClass('active');
        
        $("html, body").animate({
            scrollTop: target.offset().top - 30
        }, 700);
    });
    
    $('.imoveis__slide-option').click( function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        const target = $($(this).attr("data-toggle"));
        $(this).parent().parent().parent().find('.imoveis__slide-item').removeClass('active');
        $(target).addClass('active');

        $("html, body").animate({
            scrollTop: target.offset().top - 20
        }, 700);
    
    });

})();