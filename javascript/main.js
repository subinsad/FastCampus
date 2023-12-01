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
