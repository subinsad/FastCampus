// 에러핸들링
/*
const delayAdd = (index, cb, erroCb) => {
    setTimeout(() => {
        if (index > 10) {
            erroCb(`${index}는 10보다 클 수 없습니다.`);
            return;
        }
        console.log(index);
        cb(index + 1); // 콜백함수를 실행 할 때 특정한 데이터를 인수로 넣을 수 있음(4를 넣음)
    }, 1000);
};


delayAdd(
    4,
    (res) => console.log(res), // 4를 매개변수로 받아서 내부에서 사용가능
    (err) => console.log(err)
);
*/

const delayAdd = (index) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (index > 10) {
                reject(`${index}는 10보다 클 수 없습니다.`);
                return;
            }
            console.log(index);
            resolve(index + 1); //
        }, 1000);
    });
};

delayAdd(13) //13을 index에 매개변수로 사용
    .then((res) => console.log(res)) // resolve에 들어감
    .catch((err) => console.log(err)) // reject에 들어감
    .finally(() => console.log('Done!'));
// catch에 들어있는 콜백함수는 reject이라는 이름의 매개변수로 들어가서 호출

//async await패턴으로 적용해보기

const wrap = async () => {
    try {
        const res = await delayAdd(2);
        console.log(res);
    } catch (err) {
        console.log(err);
    } finally {
        console.log('Done!');
    }
};
wrap();
