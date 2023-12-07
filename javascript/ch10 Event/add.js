// .addEventLister()

// 대상에 이벤트 청취(Listen)를 등록
// 대상에 지정한 이벤트가 발생했을 때 지정한 함수(Handler)가 호출

const parentEl = document.querySelector('.parent');
const childEl = document.querySelector('.child');

parentEl.addEventListener('click', () => {
    console.log('parent');
});

childEl.addEventListener('click', () => {
    console.log('child');
});

//.removeEventListener()

// 대상에 등록했던 이벤트 청취를 제거
// 메모리 관리를 위해 등록한 이벤트를 제거하는 과정이 필요할수있음

const handler = () => {
    console.log(parent);
};

parentEl.addEventListener('click', handler);
childEl.addEventListener('click', () => {
    parentEl.removeEventListener('click', handler);
});

// removeEventListener를 통해서 이벤트를 제거할거라면,
// 특정한 이름 (handler)에 그 함수를 할당해서 사용해야함 / 위 방법처럼 함수실행하면 removeEventListener를 사용못함
