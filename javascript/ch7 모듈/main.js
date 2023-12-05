// 모듈이란 특정 데이터들의 집합
// 모듈 가져오기 import , 내보내기 export
// str을 ayz로 사용하겠다.(이름바꾸기)
//import number, { str as ayz } from './module';
import * as abc from './module';
//* 추가해서 여러개의 개념을 한번에

console.log(abc);

console.log(number);
console.log(ayz);

setTimeout(async () => {
    // import('./module').then((abc) => {
    //     console.log(abc);
    // });

    const abc = await import('./module');
    console.log(abc);
}, 1000);
