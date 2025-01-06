// // document.addEventListener('DOMContentLoaded', function() {
// //     const categories = [
// //         { id: 1, name: '매점', enName: 'Mart', link: './mart.html', isComingSoon: false },
// //         { id: 2, name: '편의시설', enName: 'Amenities', link: './amenities.html', isComingSoon: false },
// //         { id: 3, name: '산책로/포토존', enName: 'Rest Area', link: './rest.html', isComingSoon: false },
// //         { id: 6, name: '전기차 충전소', enName: 'EV Charging', link: './charging.html', isComingSoon: false },
// //         { id: 5, name: '수영장', enName: 'Pool', link: './pool.html', isComingSoon: true },
// //         { id: 4, name: '카페', enName: 'Cafe', link: './cafe.html', isComingSoon: true }
// //     ];

// //     const container = document.getElementById('categoryContainer');
// //     const currentPath = window.location.pathname;

// //     categories.forEach(category => {
// //         const input = document.createElement('input');
// //         input.type = 'radio';
// //         input.name = 'category';
// //         input.id = `category-${category.id}`;
        
// //         // 현재 페이지 URL에 카테고리의 링크가 포함되어 있으면 체크
// //         if (currentPath.includes(category.link.split('/').pop())) {
// //             input.checked = true;
// //         }

// //         const label = document.createElement('label');
// //         label.htmlFor = `category-${category.id}`;
// //         if (category.isComingSoon) {
// //             label.className = 'comming-soon';
// //         }
        
// //         label.innerHTML = `
// //             ${category.name}
// //             <p>${category.enName}</p>
// //         `;

// //         // 클릭 이벤트 추가
// //         label.addEventListener('click', () => {
// //             if (!category.isComingSoon) {
// //                 location.href = category.link;
// //             }
// //         });

// //         container.appendChild(input);
// //         container.appendChild(label);
// //     });
// // });

// $(document).ready(function() {
//     // 카테고리 컴포넌트 로드
//     $("#facility-category").load("./facility-category.html", function() {
//         // 현재 페이지 URL에 따라 active 클래스 추가
//         const currentPage = window.location.pathname.split('/').pop();
//         $(`.category-item[href='${currentPage}']`).addClass('active')
//             .find('input[type="radio"]').prop('checked', true);
//     });
// });
$(document).ready(function() {
    $('.category-list').load('../facility/facility-category.html');
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
    if (path.includes('mart')) return 'category-1';
    if (path.includes('amenitie')) return 'category-2';
    if (path.includes('rest-area')) return 'category-3';
    if (path.includes('ev-charging')) return 'category-6';
    if (path.includes('pool')) return 'category-5';
    if (path.includes('cafe')) return 'category-4';
    return null;
}