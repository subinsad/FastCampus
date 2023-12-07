// window.innerWidth / window.innerHeight

// 현재화면(viewport)의 크기를 얻습니다.

console.log(window.innerWidth); //500
console.log(window.innerHeight); //385

// window.scrollX / window.scrollY

// 페이지의 좌상단 기준, 현재 화면의
// 수평 혹은 수직 스크롤 위치를 얻음

console.log(window.screenX, window.screenY);

//window.srollTo() / E.scrollTo()

//지정된 좌표로 대상(화면,스크롤 요소)을 스크롤합니다.
// 대상.scrollTo(x좌표, y좌표)
// 대상.scrollTo({top:y, left:x, behavavior:'smooth'})

const parentEl = document.querySelector('.parent');

setTimeout(() => {
    window.scrollTo({ left: 0, top: 500, behavior: 'smooth' });
}, 1000);

// E.clientWidth / E.clientHeight

// 테두리 선을 제외한 요소의 크기를 얻습니다.

// const parentEl = document.querySelector('.parent') 재사용
const childEl = document.querySelector('.child');

console.log(parentEl.clientWidth, parentEl.clientHeight);
console.log(childEl.clientWidth, childEl.clientHeight);

// E.offsetWidth / E.offsetHeight

// 테두리선을 포함한 요소의 크기를 얻음

// E.scrollLeft/ E.scrollTop

// 스크롤 요소의 최상단 기준,
// 현재 스크롤 요소의 수평 혹은 수직 스크롤 위치를 얻습니다.

window.parentEl = document.querySelector('.parent');

console.log(parentEl.scrollLeft, parentEl.scrollTop);

// E.offsetLeft / E.offsetTop

// 페이지의 좌상단 기준, 요소의 위치를 얻음

console.log(parentEl.offsetLeft, parentEl.offsetTop);
console.log(childEl.offsetLeft, childEl.offsetTop);

// E.getBoundingClientRect()

//테두리선을 포함한 요소의 크기와
// 화면에서의 상대 위치 정보를 얻습니다.

console.log(parentEl.getBoundingClientRect());
console.log(childEl.getBoundingClientRect());
