// documtent.createElement()

// 메모리에만 존재하는 새로운 HTML 요소를 생성해 반환

const divEl = document.createElement('div');
console.log(divEl);

const inputEl = document.createElement('input');
console.log(inputEl);

// E.prepend() / E.append()

// 노드를 요소의 첫 번째 혹은 마지막 자식으로 삽입

const parentEl = document.querySelector('.parent');

const el = document.createElement('div');
el.textContent = 'Hello!';

parentEl.append(new Comment('주석')); // parent 바로밑에 주석 추가
parentEl / append(el); // 마지막 자식요소에 el추가
parentEl.append('TEXT'); //마지막 자식요소에 문자삽입

// E.remove()

// 요소를 제거

const el2 = document.querySelector('.child');
el2.remove(); // div제거됨

// E.insertAdjacentElement()

// '대상요소' 의 지정한 위치에 '새로운요소'를 삽입
// 대상요소.insertAdjacentElement(위치,새로운_요소)

const childEl = document.querySelector('.child');
const newEl = document.createElement('span');
newEl.textContent = 'Hello';

childEl.insertAdjacentElement('beforebegin', newEl);

// N.insertBefore()

// '부모노드'의 자식인 '참조노드'의 이전 형제로 '노드'를 삽입
// 부모_노드.insertBefore(노드, 참조_노드)

// const parentEl = document.querySelector('.parent'); 위 코드 재사용
// const el2 = document.querySelector('.child');
const newEl = document.createElement('span');
newEl.textContent = 'Hello';

parentEl.insertBefore(newEl, childEl);

// N.contains()

// '주어진 노드'가 '노드'의 자신을 포함한 후손인지 확인
// 노드.contains(주어진_노드)

// const parentEl = document.querySelector('.parent'); 위 코드 재사용
// const el2 = document.querySelector('.child');

console.log(parentEl.contains(childEl)); //true parent요소에서 child요소가 자신을 포함해서 후손인지
console.log(document.body.contains(parentEl)); //true  body안에 parentEl 후손인지
console.log(document.body.contains(childEl)); //true body 안에 childEl 후손인지
console.log(document.body.contains(document.body)); //true body에서 document.body 후손인지(자기자신도포함됨)
console.log(parentEl.contains(parentEl)); //true 자기자신도 포함됨
console.log(parentEl.contains(document.body)); //false body요소가 상위요소이기 때문에 false
console.log(childEl.contains(document.body)); //false body요소가 상위요소이기 때문에 false

// N.textContent

// 노드의 모든 텍스트를 얻거나 변경

// const el2 = document.querySelector('.child');
console.log(el2.textContent); //1 출력

el.textContent = '7';
console.log(el2.textContent); //7출력

// E.innerHtml

// 요소의 모든 HTML 내용을 하나의 문자로 얻거나
// 새로운 HTML 을 지정

// const parentEl = document.querySelector('.parent'); 위 코드 재사용
console.log(el2.innerHTML); // child요소 두개 출력됨

el2.innerHTML = /* html */ `
<div style = "border: 4px solid">
<span style="color:red;"> Hello! </span>
<span style="color:red;"> Hello! </span>
</div>`;
