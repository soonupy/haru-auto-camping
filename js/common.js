document.addEventListener('DOMContentLoaded', function() {
    // 현재 페이지 URL 가져오기
    const currentPath = window.location.pathname;
    
    // index.html이 아닌 경우에만 경로 수정
    if (!currentPath.includes('index.html')) {
        // body 내부의 요소들만 선택하도록 수정
        const links = document.body.querySelectorAll('[href^="/"], [src^="/"]');
        
        links.forEach(element => {
            if (element.hasAttribute('href')) {
                element.href = '.' + element.getAttribute('href');
            }
            if (element.hasAttribute('src')) {
                element.src = '.' + element.getAttribute('src');
            }
        });
    }
});

$(function() {
    $.get('../component/header.html', function(data) {
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
    $.get('component/footer.html', function(data) {
        $('#footer-wrap').html(data);
    })
});




