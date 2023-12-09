// History

// 브라우저 히스토리(세션기록) 정보를 반환하거나 제어합니다.

// .length : 등록된 히스토리 개수
// .scrollRestoration : 히스토리 탐색시 스크롤 위치 복원 여부 확인 및 지정
// .state : 현재 히스토리에 등록된 데이터(상태)

//.back() : 뒤로 가기
// .forward() : 앞으로 가기
// .go(위치) : 현재 페이지 기준 특정 히스토리 '위치'로 이동

// .pushState(상태,제목,주소) : 히스토리에 상태 및 주소를 추가
// .replaceState(상태, 제목, 주소) : 현재 히스토리의 상태 및 주소를 교체
// > 모든 브라우저(safari 제외)는 '제목' 옵션을 무시

////////////예제///////////////
const page1 = /*html */ `
<section class="page1">
    <h1>page1</h1>
</section>`;
const page2 = /*html */ `
<section class="page2">
    <h1>page2</h1>
</section>`;
const page3 = /*html */ `
<section class="page3">
    <h1>page3</h1>
</section>`;
const pageNotFound = /*html */ `
<section>
    <h1>404 Page Not Found!</h1>
</section>`;

const pages = [
    { path: '#/page1', template: page1 },
    { path: '#/page2', template: page2 },
    { path: '#/page3', template: page3 },
];
const appEl = document.querySelector('#app');

const render = () => {
    // console.log(history)
    const page = pages.find((page) => page.path === location.hash);
    //page의 find메소드의 콜백으로 각각의 들어오는 아이템을 page이름의 매개변수로 받아서 사용
    appEl.innerHTML = page ? page.template : pageNotFound;
};

window.addEventListener('popstate', render);
render();

const pagePush = (num) => {
    history.pushState(`전달할 데이터 - ${num}`, null, `#/page${num}`);
    render();
};

const inputEl = document.querySelector('nav input');
inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        pagePush(event.target.value);
    }
});
