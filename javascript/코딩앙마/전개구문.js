// arguments

// - 함수로 넘어 온 모든 인수에 접근
// - 함수 내에서 이용 가능한 지역 변수
// - length / index
// - Array 형태의 객체
// - 배열의 내장 메서드 없음 (forEach, map)

// 나머지 매개변수
function showName(...names) {
    console.log(names);
}

showName(); // []
showName('mike'); //['mike']
showName('mike', 'tom'); // ['mike','tom']

function add(...numbers) {
    let result = 0;
    numbers.forEach((num) => (result += num));
    console.log(result);
}

function add(...numbers) {
    let result = numbers.reduce((prev, cur) => prev + cur);
    console.log(result);
}

add(1, 2, 3);

// 나머지 매개변수
// user 객체를 만들어 주는 생성자 함수를 만들겁니다.

function User(name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('tom', 20, 'react');
const user3 = new User('jane', 10, 'english');

//전개구문 배열
