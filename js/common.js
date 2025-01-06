
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


document.addEventListener('DOMContentLoaded', function() {
    const categories = [
        { id: 1, name: '매점', enName: 'Mart', link: '../facility/mart.html', isComingSoon: false },
        { id: 2, name: '편의시설', enName: 'Amenities', link: '../facility/amenities.html', isComingSoon: false },
        { id: 3, name: '산책로/포토존', enName: 'Rest Area', link: '../facility/rest.html', isComingSoon: false },
        { id: 6, name: '전기차 충전소', enName: 'EV Charging', link: '../facility/charging.html', isComingSoon: false },
        { id: 5, name: '수영장', enName: 'Pool', link: '../facility/pool.html', isComingSoon: true },
        { id: 4, name: '카페', enName: 'Cafe', link: '../facility/cafe.html', isComingSoon: true }
    ];

    const container = document.getElementById('categoryContainer');
    const currentPath = window.location.pathname;

    categories.forEach(category => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'category';
        input.id = `category-${category.id}`;
        
        // 현재 페이지 URL에 카테고리의 링크가 포함되어 있으면 체크
        if (currentPath.includes(category.link.split('/').pop())) {
            input.checked = true;
        }

        const label = document.createElement('label');
        label.htmlFor = `category-${category.id}`;
        if (category.isComingSoon) {
            label.className = 'comming-soon';
        }
        
        label.innerHTML = `
            ${category.name}
            <p>${category.enName}</p>
        `;

        // 클릭 이벤트 추가
        label.addEventListener('click', () => {
            if (!category.isComingSoon) {
                location.href = category.link;
            }
        });

        container.appendChild(input);
        container.appendChild(label);
    });
});