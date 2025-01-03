$(function() {
    // 현재 페이지의 경로에 따라 상대 경로 계산
    var headerPath = window.location.pathname.includes('/pages/') ? '../component/header.html' : 'component/header.html';
    
    $.get(headerPath, function(data) {
        $('#header-wrap').html(data);

        $('.menu-btn').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).parent().find('.menu-list').toggleClass('active');
        });

        $('.menu-category').on('click', function(e) {
            e.preventDefault();

            $('.menu-category').not(this).siblings('.menu-list-2depth').removeClass('active').parent().find('.accordion-arrow').removeClass('active');
            $(this).find('.accordion-arrow').toggleClass('active');
            $(this).parent().find('.menu-list-2depth').toggleClass('active');
        });
    });
});

$(document).ready(function() {
    // 현재 페이지의 경로에 따라 상대 경로 계산
    var footerPath = window.location.pathname.includes('/pages/') ? '../component/footer.html' : 'component/footer.html';
    
    $.get(footerPath, function(data) {
        $('#footer-wrap').html(data);
    });
});



