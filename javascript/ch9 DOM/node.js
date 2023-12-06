// DOM
//DOM이란 html 문서를 객체로 표현한 것
// JS에서 HTML을 제어할 수 있게 해줌

// Node vs Element
// - 노드 : html요소, 텍스트, 주석 등 모든 것을 의미
// 요소 : HTML 요소를 의미

const parent = document.querySelector('.parent');

//부모 요소의 모든 자식 노드 확인
console.log(parent.childNodes);

// 부모 요소의 모든 자식 요소 확인
console.log(parent.children);

//객체데이터를 조회
console.dir(parent);
