$(document).ready(function() {
    // GitHub Pages 여부 확인
    const isGitHubPages = window.location.hostname.includes('github.io');
    const repoName = '/haru-auto-camping'; // GitHub 레포지토리 이름
    
    // 현재 페이지 경로 확인
    const isIndexPage = window.location.pathname === repoName + '/' || 
                       window.location.pathname.includes('index.html');
    
    // GitHub Pages와 로컬 환경에 따른 경로 설정
    let componentPath;
    if (isGitHubPages) {
        componentPath = repoName + '/component/';
    } else {
        componentPath = isIndexPage ? 'component/' : '../component/';
    }

    // 헤더 로드
    $.get(componentPath + 'header.html', function(data) {
        $('#header-wrap').html(data);

        // 메뉴 이벤트 핸들러들
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






