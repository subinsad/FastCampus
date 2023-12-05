// 데이터타입확인
function checkType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}

//전개 연산자
function fn(x, y, z) {
    console.log(x, y, z);
}

fn(1, 2, 3);

const a = [1, 2, 3];
fn(...a);

//함수

//함수선언문
function hello() {}

//호이스팅
function hello() {
    console.log('hello');
}

hello();

//화살표함수
const c = () => {};

//this
//일반 함수의 this는 호출 위치에서 정의
//화살표 함수의 this는 자신이 선언된 함수 범위에서 정의

//es6 classes
/* function User(first,last){
    this.firstName = first
    this.lastName = last
}

const heropy = new User('Heropy','Park')

console.log(heropy)

*/

//getter : 값을 조회 ,setter : 값을 할당

class User {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        console.log(value);
    }
}

console.log(heropy.firstName);
