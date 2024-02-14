/**********************
arr.sort()
배열 재정렬
주의 ! 배열 자체가 변경됨
인수로 정렬 로직을 담은 함수를 받음
 */

var arr = [1, 5, 4, 2, 3];

function fn(a, b) {
    return a - b;
}

arr.sort();

console.log(arr);

Lodash;
_.sortBy(arr_);

/**********************
arr.reduce()
인수로 함수를 받음
(누적 계산값, 현재값) => {return 계산값}
 */

var arr = [1, 2, 3, 4, 5];

let result1 = 0;
arr.forEach((num) => {
    result += num;
});

const result2 = arr.reduce((prev, cur) => {
    return prev + cur;
}, 0);

var userList = [
    { name: 'mike', age: 30 },
    { name: 'jane', age: 27 },
    { name: 'tom', age: 10 },
];

let result = userList.reduce((prev, cur) => {
    if (cur.age > 19) {
        prev.push(cur.name);
    }
    return prev;
}, []);
