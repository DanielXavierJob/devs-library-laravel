(function($) {
    "use strict";
    $("#search-contact").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#chatsidebar ul li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    jQuery(window).on('load resize', function() {
        var right_sidebar = $('.right-sidebar').width();
        var left_sidebar = $('.left-sidebar').width();
        var chat_bar = $('.chat').width();
        var win_width = $(window).width();
        $(".user-list-item").on('click', function() {
            if ($(window).width() < 992) {
                $('.left-sidebar').addClass('hide-left-sidebar');
                $('.chat').addClass('show-chatbar');
            }
        });
        $(".dream_profile_menu").on('click', function() {
            $('.right-sidebar').addClass('show-right-sidebar');
            $('.right-sidebar').removeClass('hide-right-sidebar');
            if ($(window).width() > 991 && $(window).width() < 1201) {
                $(".chat").css('margin-left', -chat_bar);
            }
            if ($(window).width() < 992) {
                $('.chat').addClass('hide-chatbar');
            }
        });
        $(".close_profile").on('click', function() {
            $('.right-sidebar').addClass('hide-right-sidebar');
            $('.right-sidebar').removeClass('show-right-sidebar');
            if ($(window).width() > 991 && $(window).width() < 1201) {
                $(".chat").css('margin-left', 0);
            }
            if ($(window).width() < 992) {
                $('.chat').removeClass('hide-chatbar');
            }
        });
        $(".nav-tabs a").on('click', function() {
            $(this).tab('show');
        });
        $(".chat-header .left_side i").on('click', function() {
            $('.left-sidebar').removeClass('hide-left-sidebar');
            $('.chat').removeClass('show-chatbar');
        });
    });
    $('.accordion-col .accordion-title').on('click', function() {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
    $('*[data-target="#status-modal"]').on('click', function() {
        $('body').addClass('custom-model-open');
    });
    $('.custom-status-close').on('click', function() {
        $('body').removeClass('custom-model-open');
    });
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    if ($(window).width() > 992) {
        if ($('.chat-body, .left-sidebar .sidebar-body, .right-sidebar').length > 0) {
            $('.chat-body, .left-sidebar .sidebar-body, .right-sidebar').mCustomScrollbar();
        }
    }
    // $(window).on("load", function () {
    //     document.onkeydown = function (e) {
    //         if (e.keyCode == 123) { return false; }
    //         if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; }
    //         if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { return false; }
    //         if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { return false; }
    //         if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { return false; }
    //     };
    // }); document.oncontextmenu = function () { return false; }; $(document).mousedown(function (e) {
    //     if (e.button == 2) { return false; }
    //     return true;
    // });
})(jQuery);