// .toFixed()
// 숫자를 지정된 고정 소수점 표기(자릿수)까지 표현하는 문자로 반환

const num = 3.14865486;
console.log(num.toFixed(2)); //3.14 문자로 반환
console.log(parseFloat(num.toFixed(2))); // 숫자로 바꿈

// .toLocaleString()
// 숫자를 현지 언어 형식의 문자로 반환

const num1 = 100000;

console.log(num.toLocaleString()); // 1,000,000
console.log(`${num.toLocaleString()}원`); // 1,000,000원

// Number.isInteger()
// 숫자가 정수인지 확인

const num2 = 123;
const pi = 3.14;

console.log(Number.isInteger(num)); // true
console.log(Number.isInteger(pi)); // false

// Number.isNaN()
// 주어진 값이 NaN 인지 확인
const str = 'Hello world';

console.log(Number.isNaN(str)); // false

// Number.parseInt() 또는 parseInt()
// 주어진 값(숫자, 문자)을 피싱해 특정 진수의 정수로 반환

console.log(Number.parseInt(pi, 10)); //3

//Number.parseFloat() 또는 parseFloat()
// 주어진 값(숫자, 문자)를 파싱해 부동소수점 실수로 반환

console.log(Number.parseFloat(pi)); //3.14 숫자로

// Math.abs()
// 주어진 숫자의 절댓값을 반환

console.log(Math.abs(2)); //2

//Math.ceil()
// 주어진 숫자를 올림해 정수를 반환

console.log(Math.ceil(3.14152835312)); // 4
