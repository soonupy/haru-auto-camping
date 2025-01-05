// $.get('component/header.html', function(data) {
//     $('#header-wrap').html(data);

//     $('.menu-btn').on('click', function(e) {
//                     e.preventDefault();
//                     $(this).toggleClass('active');
//                     $(this).parent().find('.menu-list').toggleClass('active');
//                 });
        
//                 $('.menu-category').on('click', function(e) {
//                     e.preventDefault();
        
//                     $('.menu-category').not(this).siblings('.menu-list-2depth').removeClass('active').parent().find('.accordion-arrow').removeClass('active');
//                     $(this).find('.accordion-arrow').toggleClass('active');
//                     $(this).parent().find('.menu-list-2depth').toggleClass('active');
//                 });
// });

// $.get('component/footer.html', function(data) {
//     $('#footer-wrap').html(data);
// });

$(function() {
    // GitHub Pages 여부 확인
    const isGitHubPages = window.location.hostname.includes('github.io');
    const repoName = '/haru-auto-camping';
    
    // 현재 페이지의 경로를 확인하여 컴포넌트 경로 설정
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/');
    const isSubPage = pathSegments.length > 2 && pathSegments[pathSegments.length - 1] !== '';
    
    // GitHub Pages일 때와 로컬 환경일 때의 경로 설정
    let componentPath;
    if (isGitHubPages) {
        componentPath = isSubPage ? 
            `${repoName}/component/` : 
            `${repoName}/component/`;
    } else {
        componentPath = isSubPage ? '../component/' : './component/';
    }

    // 헤더 로드
    $.get(componentPath + 'header.html', function(data) {
        $('#header-wrap').html(data);

        // 메뉴 버튼 클릭 이벤트
        $('.menu-btn').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).parent().find('.menu-list').toggleClass('active');
        });
        
        // 메뉴 카테고리 클릭 이벤트
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
