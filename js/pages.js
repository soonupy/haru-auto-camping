// 전역 변수로 basePath 선언
const basePath = window.location.origin === 'http://127.0.0.1:5500' 
    ? 'http://127.0.0.1:5500/' 
    : '';

$(document).ready(function() {
    $('.category-list').load('./facility/facility-category.html', function() {
        $('input[type="radio"]').each(function() {
            const originalPath = $(this).attr('onclick').match(/location\.href='([^']+)'/)[1];
            const cleanPath = originalPath.replace('haru-auto-camping/', '');
            
            // onclick 속성은 유지하면서 추가 이벤트 바인딩
            $(this).attr('onclick', `this.checked=true`)
                  .on('click touch', function(e) {
                      e.preventDefault(); // 기본 이벤트 방지
                      $(this).prop('checked', true);
                      window.location.href = basePath + cleanPath;
                  });
        });
    });
});

window.onload = function() {
    const currentPath = window.location.pathname;
    const categoryId = getCategoryIdFromPath(currentPath);
    if (categoryId) {
        document.getElementById(categoryId).checked = true;
    }
}

// 경로에 따른 카테고리 ID 반환
function getCategoryIdFromPath(path) {
    // 경로 체크 시 전체 URL이 아닌 파일명만 확인하도록 수정
    const fileName = path.split('/').pop();
    
    if (fileName.includes('mart')) return 'category-1';
    if (fileName.includes('amenitie')) return 'category-2';
    if (fileName.includes('rest-area')) return 'category-3';
    if (fileName.includes('ev-charging')) return 'category-6';
    if (fileName.includes('pool')) return 'category-5';
    if (fileName.includes('cafe')) return 'category-4';
    return null;
}