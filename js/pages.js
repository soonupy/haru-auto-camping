// 컴포넌트 로드 함수
function loadComponent(selector, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        });
}

document.addEventListener('DOMContentLoaded', function () {
    loadComponent('#header-wrap', 'component/header.html');
    loadComponent('#footer-wrap', 'component/footer.html');
    loadComponent('#sidenav-wrap', 'component/sideNav.html');
});

