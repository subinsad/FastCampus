// 번들러와 빌드도구의 이해

//동기와 비동기
// 하나의 작업이 실행되고 완료될 때까지 다음 작업이 실행되지 않고 대기하는 것

console.log(1);
(() => console.log(2))();
console.log(3);
// 1
// 2
// 3

///////callback

console.log('시작!');
getMovies('avengers', () => {
    getMovies('frozen', () => {
        console.log('종료!');
    });
});
// 1. '시작!'
// 2. Avengers[]
// 3. Frozen[]
// 4. '종료!'

///////promise///////
const getMovies = (title) => {
    return new Promise((resolve) => {
        fetch(`https://omdbapi.com/?apikey=7035c60c&s=${title}`)
            .then((res) => res.json())
            .then(({ Search }) => {
                console.log(Search);
                resolve();
            });
    });
};

//////then///////////

console.log('시작!');
getMovies('avengers')
    .then(() => getMovies('frozen'))
    .then(() => console.log('종료!'));
// 1. '시작!'
// 2. Avengers[]
// 3. Frozen[]
// 4. '종료!'

/////// asyne, await////////
(async () => {
    console.log('시작!');
    await getMovies('avengers');
    await getMovies('frozen');
    console.log('종료!');
})();
// 1. '시작!'
// 2. Avengers[]
// 3. Frozen[]
// 4. '종료!'

// resolve => 매개변수
// 콜백함수 => 인수, 데이터

// Promise 클래스를 생성자 함수로 호출하면, 비동기 함수를 랩핑한 promise 인스턴스를 반환합니다.
// 이 promise 인스턴스는 .then() 메소드나 await 키워드로 사용하며, 이때 비동기 함수의 실행부터 완료까지의 각 상태를 가지게 됩니다.

// 대기(Pending): 이행이나 거부 직전까지의 상태.
// 이행(Fulfilled): 동작이 성공적으로 완료됨.
// 거부(Rejected): 동작이 실패함.

const delayAdd = (num) => {
    return new promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 10) {
                reject(`${num}은 10보다 클 수는 없다`);
            }
            resolve(num + 1);
        }, 1000);
    });
};

delayAdd(
    4,
    (res) => console.log(res),
    (err) => console.log(err),
    () => console.log('종료')
);
//에러핸들링, awaite패턴
delayAdd(127)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log('종료'));

const res = await delayAdd(127);
console.log(res);

//try catch구문
try {
    const res = await delayAdd(127);
    console.log(res);
} catch (err) {
    console.log(err);
} finally {
    console.log('종료');
}
