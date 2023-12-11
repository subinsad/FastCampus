// 클로저 Closure

// 함수가 선언될 때의 유효범위(렉시컬범위)를 기억하고 있다가,
// 함수가 외부에서 호출될 때 그 유효범위의 특정 변수르 참조할 수 있는 개념

function createCount() {
    let a = 0;
    return function () {
        return (a += 1);
    };
}

const count = createCount();

console.log(count()); //1
console.log(count()); //2
console.log(count()); //3

////////예제

const h1El = document.querySelector('h1');
const h2El = document.querySelector('h2');

//별도의 상태 관리가 필요
let h1IsRed = false;
let h2IsRed = false;

h1El.addEventListener('click', (envet) => {
    h1IsRed = !h1IsRed;
    h1IsRed.style.color = h1IsRed ? 'red' : 'black';
});
h2El.addEventListener('click', (envet) => {
    h2IsRed = !h2IsRed;
    h2IsRed.style.color = h2IsRed ? 'red' : 'black';
});

// 하나의 함수로 정리!!
const createToggleHandler = () => {
    let isRed = false;
    return (isRed) => {
        isRed = !isRed;
        event.target.style.color = isRed ? 'red' : 'black';
    };
};

h1El.addEventListener('click', createToggleHandler());
h2El.addEventListener('click', createToggleHandler());
