// 전역 변수로 basePath 선언
const basePath = window.location.origin === 'http://127.0.0.1:5500' 
    ? 'http://127.0.0.1:5500/' 
    : '';

    const routes = {
        // 캠핑장 시설 관련 경로
        'link-mart': 'explore/mart.html',
        'link-amenities': 'explore/amenities.html',
        'link-restarea': 'explore/rest-area.html',
        'link-cafe': 'explore/cafe.html',
        'link-pool': 'explore/pool.html',
        'link-evcharging': 'explore/ev-charging.html',
        
        // 예약 안내 관련 경로
        'link-booking': 'reservation/booking.html',
        'link-check': 'reservation/check.html',
        'link-refund': 'reservation/refund.html',
        
        // 주변 관광지 관련 경로
        'link-hahoe': 'tourism/hahoe-village.html',
        'link-bridge': 'tourism/wolmyeong-bridge.html',
        'link-mural': 'tourism/mural-village.html',
        'link-park': 'tourism/andong-park.html',
        
        // About 관련 경로
        'link-intro': 'about/introduction.html',
        'link-faq': 'about/faq.html',
        'link-location': 'about/location.html',
        'link-event': 'about/event.html',
        'link-terms': 'about/terms.html',
        'link-support': 'about/support.html'
    };
    
    window.addEventListener('load', () => {
        
        // 모든 링크에 대해 처리
        Object.entries(routes).forEach(([className, path]) => {
            const links = document.querySelectorAll(`.${className}`);
            
            links.forEach(link => {
                link.href = basePath + path;
            });
        });
    });

    

    // export function initializeRoutes() {
    //     window.addEventListener('load', () => {
    //         Object.entries(routes).forEach(([className, path]) => {
    //             const links = document.querySelectorAll(`.${className}`);
    //             links.forEach(link => {
    //                 link.href = basePath + path;
    //             });
    //         });
    //     });
    // }


// document.addEventListener('DOMContentLoaded', function() {
//     const categoryInputs = document.querySelectorAll('input[name="category"]');
    
//     categoryInputs.forEach(input => {
//         input.addEventListener('change', function() {
//             if (this.dataset.page) {
//                 window.location.assign(basePath + 'explore/' + this.dataset.page + '.html');
//             }
//         });
//     });
// });
