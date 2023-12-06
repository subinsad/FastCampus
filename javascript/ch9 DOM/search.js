// document.getElementById()

//HTML 'id' 속성 값으로 검색한 요소를 반환
// 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환
// 검색 결과가 없으면 null 반환

const el = document.getElementById('child2');
console.log(el);

// document.querySelector()

//'CSS 선택자'로 검색한 요소를 하나 반환
// 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환
// 검색 결과가 없으면 null 반환

const el2 = document.querySelector('.child:first-child');
console.log(el2);

//document.querySelectorAll()

//'CSS 선택자'로 검색한 모든 요소를 'NodeList'로 반환
// 'NodeList' 객체는 '.forEach()'를 사용할수있음

const NodeList = document.querySelectorAll('.child');
console.log(NodeList);
NodeList.forEach((el) => console.log(el.textContent));
//nodelist객체에서 foreach 메소드 사용가능
//검색한 요소의 개수만큼 내부의 콜백을 반복적으로 호출 가능
//내부에서 console.log로 해당 매개변수에서 textContent속성을 사용해 내용을 출력

console.log(Array.from(NodeList).reverse());

// N.parentElement

//노드의 부모 요소를 반환

const el3 = document.querySelector('.child');
console.log(el3.parentElement);

//E.closest()

// 자신을 포함한 조상 요소 중 'css선택자'와 일치하는
// 가장 가까운 요소를 반환
// 검색 결과가 없으면 null 반환

const el4 = document.querySelector('.child');

console.log(el4.closest('div')); // class = child div출력
console.log(el4.closest('body')); // body 출력
console.log(el4.closest('.hello')); //null

// N.previousSibling / N.nextSibling

// 노드의 이전 형제 또는 다음 형제 노드를 반환

const el5 = document.querySelector('.child');
console.log(el5.previousSibling); //줄바꿈이 되어 줄바꿈이 출력됨
console.log(el5.nextSibling); // "텍스트1" 문자출력

// E.previousElementSibling / E.nextElementSibling

//요소의 이전 형제 또는 다음 형제 요소를 반환

const el6 = document.querySelector('.child');
console.log(el.previousElementSibling); // div이전에 요소가 없어 null 출력
console.log(el.nextElementSibling); // div 2 요소 출력

// E.children

//요소의 모든 자식 요소를 반환

const el7 = document.querySelector('.parent');
console.log(el.children); // children 요소 반환
// (배열데이터로 보이지만 객체데이터로 만들어진것) - 유사배열
console.log(Array.from(el.children)); //유사배열을 배열데이터로 활용가능

// E.firstElementChild / E.lastElementChild

// 요소의 첫 번째 자식 또는 마지막 자식 요소를 반환

const el8 = document.querySelector('.parent');
console.log(el.firstElementChild); // 첫번째 div 출력
console.log(el.lastElementChild); // 마지막 자식요소인 div 출력
