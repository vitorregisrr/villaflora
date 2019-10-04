(function () {
    'use strict';
   
    $('.diferenciais__slide-actions .right').click( function(){
        const nextImg = $(this).parent().parent()
                        .find('img.active')
                        .next();

                        console.log(nextImg)

        nextImg.siblings().removeClass('active');
        nextImg.addClass('active');
    });

    $('.diferenciais__slide-actions .left').click( function(){
        const prevImg = $(this).parent().parent()
                        .find('img.active')
                        .prev();

                        console.log(prevImg)

        prevImg.siblings().removeClass('active');
        prevImg.addClass('active');
    });

    $('.diferenciais-toggler').click(function(){

        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        $( $(this).attr("data-toggle") ).toggleClass('active');
    })
})();