// 전역 변수로 basePath 선언
// const basePath = window.location.origin === 'http://127.0.0.1:5500' 
//     ? 'http://127.0.0.1:5500/' 
//     : '';

const basePath = window.location.hostname === 'soonupy.github.io' 
    ? '/haru-auto-camping' 
    : '';

// $(document).ready(function() {
//     $('.category-list').load('./facility/facility-category.html', function() {
//         $('input[type="radio"]').each(function() {
//             const originalPath = $(this).attr('onclick').match(/location\.href='([^']+)'/)[1];
//             const cleanPath = originalPath.replace('haru-auto-camping/', '');
            
//             const $this = $(this);
            
//             // 중복 실행 방지를 위한 플래그
//             if ($this.data('processing')) return;
//             $this.data('processing', true);
            
//             // 라디오 버튼 상태 변경
//             $this.prop('checked', true);
            
//             // 즉시 페이지 이동
//             window.location.href = basePath + cleanPath;
//         });
        
//         // // 페이지 로드 후 스크롤 처리
//         // setTimeout(() => {
//         //     const $viewCategory = $('#view-category');
//         //     if ($viewCategory.length) {
//         //         $('html, body').animate({
//         //             scrollTop: $viewCategory.offset().top - 20
//         //         }, 300);
//         //     }
//         // }, 100); // 페이지 렌더링을 위한 약간의 지연
//     });
// });

// // 페이지 로드 완료 후 추가 체크
// $(window).on('load', function() {
//     const currentPath = window.location.pathname;
//     const categoryId = getCategoryIdFromPath(currentPath);
//     if (categoryId) {
//         $('#' + categoryId).prop('checked', true);
//     }
// });

// // 경로에 따른 카테고리 ID 반환
// function getCategoryIdFromPath(path) {
//     // 경로 체크 시 전체 URL이 아닌 파일명만 확인하도록 수정
//     const fileName = path.split('/').pop();
    
//     if (fileName.includes('mart')) return 'category-1';
//     if (fileName.includes('amenitie')) return 'category-2';
//     if (fileName.includes('rest-area')) return 'category-3';
//     if (fileName.includes('ev-charging')) return 'category-6';
//     if (fileName.includes('pool')) return 'category-5';
//     if (fileName.includes('cafe')) return 'category-4';
//     return null;
// }
