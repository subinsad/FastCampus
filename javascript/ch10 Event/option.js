// 핸들러 한번만 실행

const parentEl = document.querySelector('.parent');

parentEl.addEventListener(
    'click',
    (event) => {
        console.log('parent');
    },
    {
        once: true,
    }
);

// 기본 동작과 핸들러 실행 분리. 사용자의 사용성이 좋아짐

parentEl.addEventListener(
    'wheel',
    () => {
        for (let i = 0; i < 10000; i += 1) {
            console.log(i);
        }
    },
    {
        passive: true,
        // 분리시켜 스크롤을 부드럽게 동작
    }
);
