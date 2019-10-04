(function () {
    'use strict';

    const video = document.getElementById('home-teaser');

    $('#teaser-btn').click(function () {
        $('#home').addClass('hide');
        video.play();
        $('#sticky-menu').removeClass('active');
    });

    video.onended = function () {
        $('#home').removeClass('hide');
    };

})();