// 컴포넌트 경로 설정 함수
function getComponentPath() {
    const currentPath = window.location.pathname;
    // index.html 또는 루트 경로인 경우
    if (currentPath === '/index.html' || currentPath === '/') {
        return './component/';
    }
    // 그 외의 경우 (하위 디렉토리의 HTML 파일들)
    return '../component/';
}

// 컴포넌트 로드 함수
function loadComponent(elementId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document
                .querySelector(elementId)
                .innerHTML = data;
        })
        .catch(error => console.error('컴포넌트 로드 실패:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    const basePath = getComponentPath();
    loadComponent('#header-wrap', basePath + 'header.html');
    loadComponent('#footer-wrap', basePath + 'footer.html');
    loadComponent('#sidenav-wrap', basePath + 'sideNav.html');
});

// 카테고리 선택 함수
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-wrap');
    sections.forEach(section => section.style.display = 'none');
    
    document.querySelector('.category-1').style.display = 'block';
    document.querySelector('#category-1').checked = true;
    
    document.querySelectorAll('input[name="category"]').forEach(radio => {
        radio.addEventListener('change', e => {
            sections.forEach(section => section.style.display = 'none');
            document.querySelector(`.category-${e.target.id.split('-')[1]}`).style.display = 'block';
        });
    });
});