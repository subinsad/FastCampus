// 이벤트 객체

// 이벤트 객체는 대상에서 발생한 이벤트정보를 담고 있습니다.

const parentEl = document.querySelector('.parent');

parentEl.addEventListener('click', (event) => {
    console.log(event.target, event.currentTarget);
});
parentEl.addEventListener('wheel', (event) => {
    console.log(event);
});

const inputEl = document.querySelector('input');

inputEl.addEventListener('keydown', (event) => {
    console.log(event.key); // event속성을 이용해 key값을 출력
});
