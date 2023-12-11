// 얕은 복사 & 깊은 복사

// 참조형은 가변성으로 인해, 데이터를 복사할 때 주의가 필요

// 얕은복사 (Shallow Copy) - 참조형의 1차원 데이터만 복사
// 깊은 복사 (Deep Copy) - 참조형의 모든 차원 데이터를 복사

let a = { x: 1 };
let b = Object.assign({}, a); // a의 속성만 복사

b.x = 2;

console.log(b); // x:2
console.log(a); // x:1

// 깊은복사
// npm lodash 설치해야함
import cloneDeep from 'lodash/cloneDeep';
// const a = {x:{y:1}}
const b = cloneDeep(a);

b.x.y = 2;

console.log(b);
console.log(a);

// 깊은복사를 하게되면 a변수는 변하지 않고 b변수만 변경(복사 후 변경가능)
