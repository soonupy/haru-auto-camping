document.addEventListener('DOMContentLoaded', function() {
    fetch('component/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-wrap').innerHTML = data;
        })
        .catch(error => console.error('헤더를 로드하는 중 오류가 발생했습니다:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('component/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-wrap').innerHTML = data;
        })
        .catch(error => console.error('푸터를 로드하는 중 오류가 발생했습니다:', error));
});
