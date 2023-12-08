// 커스텀 이벤트와 디스패치

const child1 = document.querySelector('.child:nth-child(1)');
const child2 = document.querySelector('.child:nth-child(2)');

child1.addEventListener('click', (event) => {
    //강제로 이벤트 발생
    child2.dispatchEvent(new Event('click'));
    //dispatchEvent의 인수로는 new 키워드로 시작하는 이벤트 생성자 함수로 해당 이벤트 이름을 적어서 인수로 넣어줌
    child2.dispatchEvent(new Event('wheel'));
    child2.dispatchEvent(new Event('keydown'));
});

child2.addEventListener('click', (event) => {
    console.log('child2 click');
});

child2.addEventListener('wheel', (event) => {
    console.log('child2 wheel');
});

child2.addEventListener('keydown', (event) => {
    console.log('child2 keydown');
});

// 커스텀 이벤트와 디스패치

// const child1 = document.querySelector('.child:nth-child(1)');
// const child2 = document.querySelector('.child:nth-child(2)');

child1.addEventListener('hello-world', (event) => {
    console.log('커스텀 이벤트 발생');
    console.log(event.detail);
});

child2.addEventListener('click', () => {
    child1.dispatchEvent(new Event('hello-world'));
});
// child2번을 누르면 child1번의 hello-world 이벤트가 강제로 발생,
// child1번에 적용된 콜백함수가 동작

child2.addEventListener('click', () => {
    child1.dispatchEvent(
        new CustomEvent('hello-world', {
            detail: 123,
        })
    );
});
// 123출력
// 자바스크립트에 존재하지 않는 커스텀한 이벤트를 만들어서 이벤트의 생성자함수로 실행
// 데이터를 추가하고싶으면 두번재인수로 detail속성에 자바스크립트에 데이터를 넣을 수 있음
// 그 이벤트는 기본 이벤트일때 동작하지 않고 커스텀이벤트라는 클래스를 생성자함수로 호출했을때만 실행
// ** detail속성을 이용해서만 데이터를 넣을 수 있음
