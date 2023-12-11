// 불변성 & 가변성

// 불변성(Immutability)은 생성된 데이터가 메모리에서 변경되지 않고,
// 가변성(Mutability)은 생성된 데이터가 메모리에서 변경될 수 있음을 의미

// 자바스크립트 원시형은 불변성을 참조형은 가변성을 갖고있다.

let a = 1;
let b = a;

b = 2;

console.log(b); //2
console.log(a); //1
