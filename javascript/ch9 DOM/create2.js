// E.dataset

// 요소의 각 `data-` 속성을 얻거나 지정

const el = document.querySelector('.child');
const str = 'Hello world!';
const obj = { a: 1, b: 2 };

el.dataset.helloWorld = str;
el.dataset.object = JSON.stringify(obj); // 객체데이터를 문자화

console.log(el.dataset.helloWorld);
console.log(el.dataset.object);
console.log(JSON.parse(el.dataset.object)); //json을 parse로 분석(자바스크립트 데이터로 변환),

// E.tagName

// 요소의 태그 이름을 반환

const parentEl = document.querySelector('.parent');
const childEl = document.querySelector('.child');
const el = document.createElement('span');

console.log(parentEl.tagName); // div
console.log(childEl.tagName); //div
console.log(el.tagName); //span
console.log(document.body.tagName); //body

// E.id

// 요소의 'id'속성 값을 얻거나 지정

const el2 = document.querySelector('.child');
console.log(el2.id);

el.id = 'child1';
console.log(el.id);
console.log(el);

// E.className

// 요소의 'class' 속성 값을 얻거나 지정
console.log(el2.className);

el.className += ' child1 active';
console.log(el2.className); // class이름인 child child1 active 문자로 출력
console.log(el2); // <div class = child child1 active> 1 </div> 출력

// E.classList

// 요소의 'class' 속성 값을 제어
// - '.add()' : 새로운 값을 추가
// - '.remove()' : 가존 값을 제거
// - '.toggle()': 값을 토글
// - '.contanins()' : 값을 확인

el2.classList.add('active');
console.log(el2.classList.contains('active')); // true

el2.classList.remove('active');
console.log(el.classList.contains('active')); // false

el2.addEventListener('click', () => {
    el2.classList.toggle('active'); //toggle로 클래스를 추가하거나 삭제
    console.log(el2.classList.contains('active'));
});

// E.style

// 요소의 'style' 속성(인라인 스타일)의 css 속성 값을 얻거나 지정합니다.

//개별지정
// el.style.width = '100px'
// el.style.fontSize = '20px'
// el.style.backgroundColor = 'green'
// el.style.position = 'absolute'

// 한번에 지정
/* assign요소는 첫번째 인수에 해당하는 대상 객체에 두번째, 세번째 ,, 각각의 속성을 복사해서 붙임
빈문자로 있던 style에 밑에 속성들이 들어감
Object.assign(el.style,{
    width:'100px',
    fontSize:'20px',
    backgroundColor:'green',
    position:'absolute'
})
*/

// window.getComputedStyle()

//요소의 적용된 스타일 객체를 반환

const el = document.querySelector('.child');
const style = window.getComputedStyle(el);

console.log(style.width); //100px

// E.getAttribute() / E.setAttribute()

// 요소에서 특정 속성 값을 얻거나 지정

el.setAttribute('title', 'Hello World');
console.log(el.getAttribute('title')); // Hello World

// E.hasAttribute() / E.removeAttribute

// 요소에서 특정 속성을 확인하거나 제거

console.log(el.hasAttribute('class')); //true

el.removeAttribute('class');
console.log(el.hasAttribute('class')); //false

console.log(el);
