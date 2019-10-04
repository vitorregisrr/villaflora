(function () {
    'use strict';

    $('#toggle-nav').click(function () {
        const isExpanded = $(this).attr('aria-expanded');
        $('#sticky-nav').attr('aria-expanded', !isExpanded);
        $('#sticky-menu').toggleClass('active');
    });

    $('#sticky-menu a').click(function () {
        $('#sticky-menu').removeClass('active');
    });
})();