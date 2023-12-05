// .length
// 배열의 길이를 반환

const arr = ['A', 'B', 'C'];

console.log(arr.length); //3

// .at()
// 대상 배열을 인덱싱
// 음수 값을 사용하면 뒤에서부터 인덱싱

console.log(arr.at(0)); // A
console.log(arr[0]); // A

console.log(arr[arr.length - 1]); //C
console.log(arr.at(-1)); //C

// .concat()
// 대상 배열과 주어진 배열을 병합해 새로운 배열을 반환

// .every()
// 대상 배열의 모든 요소가 콜백 테스트에서 참을 반환하는지 확인

const arr2 = [1, 2, 3, 4];
const isValid = arr2.every((item) => {
    return item < 5;
});

console.log(isValid); //true

// .flat()
// 대상 배열의 모든 하위 배열을 지정한 깊이까지 이어붙인 새로운 배열을 생성
// 깊이의 기본값은 1
// 하위계열 깊이 상관없이 이어붙일려면 Infinity 무한을 객체로 집어넣으면 됨

const arr3 = [1, 2, [3, 4]];

console.log(arr.flat()); // [1,2,3,4]

// .pop()
// 대상 배열에서 마지막 요소를 제거하고 그 요소를 반환
// 대상 배열 원본이 변경됨

// .push()
// 대상 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
// 대상 배열 원본이 변경됨

// .reduce()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환값을 반환
// 각 콜백으 반환 값은 다음 콜백으로 전달

const numbers = [1, 2, 3];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); //6

// .reduce()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 반환
// 각 콜백의 반환 값은 다음 콜백으로 전달

const users = [
    { name: 'Neo', age: 85 },
    { name: 'Amy', age: 22 },
    { name: 'Lewis', age: 11 },
];

//총 나이 계산
const totalAge = users.reduce((acc, cur) => acc + cur.age, 0);
console.log(totalAge); // 118
console.log(`평균나이 ${(totalAge / users.length).toFixed(1)}세`); //평균나이 : 39.3세

// 모든 이름 추출
const names = users
    .reduce((acc, cur) => {
        // acc에는 빈 배열 cur는 name과 age값
        acc.push(cur.name); // 빈 배열 acc에 user.name값을 넣어줌
        return acc; // acc 배열을 반환
    }, [])
    .join(','); // 쉼표로 합치기

console.log(names);

// .shift()
// 대상 배열에서 첫번째 요소를 제거하고, 제거된 요소를 반환
// 대상 배열 원본이 변경

// .slice()
// 대상 배열의 일부를 추출해 새로운 배열을 반환
// 두번째 인수 직전까지 추출하고 두번째 인수를 생략하면 대상 배열의 끝까지 추출

// .some()
// 대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인

// .sort()
// 대상 배열을 콜백의 반환 값(음수, 양수, 0) 에 따라 정렬
// 콜백을 제공하지 않으면, 요소를 문자열로 변환하고 유니코드 코드 포인트 순서로 정렬
// 대상 배열 원본이 변경

const numbers1 = [2, 17, 2, 103, 3, 1, 0];

numbers1.sort((a, b) => a - b);
console.log(numbers1); // 작은숫자부터 정렬됨

// .splice()
// 대상 배열에 요소를 추가하거나 삭제하거나 교체
// 대상 배열 원본이 변경됨

// .unshift()
// 새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환
// 대상 배열의 원본이 변경

// .Array.from()
// 유사 배열을 실제 배열로 반환

const arraylike = {
    0: 'A',
    1: 'B',
    2: 'C',
    length: 3,
};

console.log(arraylike.constructor === Array); // false
console.log(arraylike.constructor === Object); // true

// arraylike.forEach((item) => console.log(item));
Array.from(arraylike).forEach((item) => console.log(item));

// Array.isArray()
// 배열 데이터인지 확인
