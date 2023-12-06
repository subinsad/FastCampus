// 동기(Synckronous)와 비동기
// 동기 : 순차적으로 코드실행
// 비동기 : 순차적으로 코드실행 x

//콜백 패턴{
const a = (callback) => {
    setTimeout(() => {
        console.log(1);
        callback();
    }, 1000);
};
const b = () => console.log(2);

a(() => {
    b();
});

// Promise
// resolve 매개변수, then()으로 실행
const c = () => {
    return new Promise((resolve) => {
        // promise를 반환하고있음
        setTimeout(() => {
            console.log(1);
            resolve();
        }, 1000);
    });
};
const d = () => console.log(2);

c().then(() => {
    d();
}); // then 메소드의 콜백함수가 resolve로 들어가서 실행됨

c()
    .then(() => b())
    .then(() => c());
// 메소드체이닝형식으로 사용가능

//위 방식을 줄여서
c().then(b).then(c); // 함수를 호출하지 않고 함수자체를 넣어서 사용
