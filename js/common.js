$(function() {
    // 현재 URL 경로를 확인
    const currentPath = window.location.pathname;
    
    // index.html 또는 루트 경로인 경우와 다른 페이지인 경우를 구분
    const isIndexPage = currentPath === '/' || 
                       currentPath.endsWith('index.html') || 
                       currentPath.endsWith('/');
                       
    // index.html이면 'component/', 다른 페이지면 '../component/'
    const componentPath = isIndexPage ? './component/' : '../component/';

    // 헤더 로드
    $.get(componentPath + 'header.html', function(data) {
        $('#header-wrap').html(data);

        $('.menu-btn').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).parent().find('.menu-list').toggleClass('active');
        });

        $('.menu-category').on('click', function(e) {
            e.preventDefault();
            $('.menu-category').not(this).siblings('.menu-list-2depth').removeClass('active')
                .parent().find('.accordion-arrow').removeClass('active');
            $(this).find('.accordion-arrow').toggleClass('active');
            $(this).parent().find('.menu-list-2depth').toggleClass('active');
        });
    });

    // 푸터 로드
    $.get(componentPath + 'footer.html', function(data) {
        $('#footer-wrap').html(data);
    });
});




