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