(function () {
    'use strict';

    $('.imoveis-toggler').click( function(){
        const target = $($(this).attr("data-toggle"));
        $('.imoveis__slide ').removeClass('active');
        $(target).addClass('active');
        
        $("html, body").animate({
            scrollTop: target.offset().top - 100
        }, 700);
    });
    
    $('.imoveis__slide-option').click( function(){
        const target = $($(this).attr("data-toggle"));
        $('.imoveis__slide-item').removeClass('active');
        $(target).addClass('active');

        $("html, body").animate({
            scrollTop: target.offset().top - 20
        }, 700);
    
    });

})();