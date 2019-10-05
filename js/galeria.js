(function(){
    'use strict';


    //Home Galeria
    const mainImage = $('#galeria-main-img');
    $('.galeria__list-item').click( function(){
        const newImgSrc = $(this).attr('data-open');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        $("html, body").animate({
            scrollTop: mainImage.offset().top - 30
        }, 700);

        mainImage.fadeOut(300, function(){
            mainImage.attr('src', newImgSrc);
            mainImage.fadeIn(300);
        });
    });


    //Acompanhamento galeria
    $('.acompanhamento__galeria-control').click( function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        const target = $(this).attr('data-toggle');
        $('.acompanhamento__galeria-imagens').removeClass('active');
        $(target).addClass('active');

    })
})();