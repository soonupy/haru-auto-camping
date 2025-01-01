// 헤더, 푸터 로드
    // document.addEventListener('DOMContentLoaded', function () {
    //     loadComponent('#header-wrap', './component/header.html');
    //     loadComponent('#footer-wrap', './component/footer.html');
    // });


    document.addEventListener('DOMContentLoaded', function() {
        const popup = document.getElementById('popup');
        const closeBtn = document.querySelector('.close-btn');
        const noShowCheckbox = document.getElementById('no-show-today');
        
        // 24시간 동안 보지 않기
        // const checkPopupStatus = () => {
        //     const popupExpireTime = localStorage.getItem('popupExpireTime');
        //     if (popupExpireTime && new Date().getTime() < parseInt(popupExpireTime)) {
        //         popup.style.display = 'none';
        //     }
        // };
    
        // // 페이지 로드 시 팝업 상태 확인
        // checkPopupStatus();
    
        
        // 닫기 버튼 클릭 이벤트
        closeBtn.addEventListener('click', function() {
            if (noShowCheckbox.checked) {
                // 24시간 후의 시간을 밀리초로 계산
                const expireTime = new Date().getTime() + (24 * 60 * 60 * 1000);
                localStorage.setItem('popupExpireTime', expireTime.toString());
            }
            popup.style.display = 'none';
        });
    });

    

    