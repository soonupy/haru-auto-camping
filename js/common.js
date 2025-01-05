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
    // 현재 페이지의 경로를 확인하여 컴포넌트 경로 설정
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/');
    const isSubPage = pathSegments.length > 2 && pathSegments[pathSegments.length - 1] !== '';
    
    // 기본 경로를 ./ 로 설정하고, 서브페이지인 경우에만 ../로 변경
    let componentPath = './component/';
    if (isSubPage) {
        componentPath = '../component/';
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
