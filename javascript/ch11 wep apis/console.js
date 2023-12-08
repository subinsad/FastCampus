// console
// .log() .warn() .error() .dir()

// 콘솔에 메시지나 객체를 출력

// -log : 일반메시지
// -warn : 경고메시지
// -error : 에러메시지
// -dir : 속성을 볼 수 있는 객체를 출력

// .count(), .countReset()

// 콘솔에 메소드 호출의 누적 횟수를 출력하거나 초기화

//console.count('이름');
//console.countReset('이름');

console.count('a'); //1
console.count('a'); //2

// .time(), .timeEnd()

// 콘솔에 타이머가 시작해서 종료되기까지의 시간을 출력

console.time('이름');
console.timeEnd('이름');

console.time('반복문');

for (let i = 0; i < 1000; i += 1) {
    console.log(i);
}

console.timeEnd('반복문'); // 9999실행하고 걸린 시간

// .trace()

// 메소드 호출 스택을 추적해 출력

function a() {
    function b() {
        function c() {
            console.log('log');
            console.trace('trace');
        }
        c();
    }
    b();
}
a();
// log!
// trace! 호출 스택 추적

// .clear()

// 콘솔에 기록된 메시지를 모두 삭제
//

// 서식 문자 치환

// %s - 문자로 적용
// $o - 객체로 적용
// %c - css를 적용

const a = 'the brown fox';
const b = 3;
const c = {
    f: 'fox',
    d: 'dog',
};
console.log('%s jumps over the lazy dog %s times', a, b);
// the brown fox jumps over the lazy dog 3 times 데이터가 문자로 적용
console.log('%o is Object', c);
console.log(
    '%cThe brown fox %cjumped over %cthe lazy dog.',
    'color:brown; font-family:serif; font-size:20px',
    '', // css 스타일 없으므로 기본문자형식
    'font-size:18px; color:#FFF; background-color:green;border-radius:4px'
);
