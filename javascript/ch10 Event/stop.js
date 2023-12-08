// 이벤트 전파(버블) 정지
// 작은범위에서 큰범위로 점점커지는 현상

const parentEl = document.querySelector('.parent');
const childEl = document.querySelector('.child');
const anchorEl = document.querySelector('a');

window.addEventListener('click', (event) => {
    console.log('window');
});

document.body.addEventListener(
    'click',
    (event) => {
        console.log('Body');
    },
    { capture: true } // capture : 더 작은 단위의 요소로부터 이벤트가 버블링되어 올라오는 구조인데
    // 중간에 캡쳐를해서 해당하는 이벤트의 콜백함수를(핸들러) 먼저실행
);

parentEl.addEventListener(
    'click',
    (event) => {
        console.log('parent');
        // event.stopPropagation(); // 버블링 정지, 위쪽으로 올라가는걸 멈춤
    },
    { capture: true } // body부분 처리하고 그 밑에있는 parent 실행
);

childEl.addEventListener('click', (event) => {
    console.log('child');
});

anchorEl.addEventListener('click', (event) => {
    console.log('anchor');
});

////////////다른예제///////////////

// const parentEl = document.querySelector('.parent'); 재사용

const handler = () => {
    console.log('parent');
};

parentEl.addEventListener('click', handler, { capture: true });
parentEl.removeEventListener('click', handler);
// 이 경우는 제거가 되지 않음, 제거하려면 똑같은 구조로 캡쳐 추가해야함
//addEventListener 로 세번째인수로 handler 사용
