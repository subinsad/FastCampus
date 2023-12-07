// 데이터와 호출

// 함수는 자바스크립트 데이터이면서 동시에 () 기호로 호출 가능한 객체
// 호출을 하기 전에는 함수 데이터이고 호출 후에는 return 키워드로 반환한 데이터

function hello() {
    return 'Hello';
}

console.log(hello); //f hello()
console.log(typeof hello); // function

console.log(hello()); // hello
console.log(typeof hello()); // string

//선언과 표현

// 함수를 생성하는 방법은 크게 두가지, 선언문과 표현식
// 호이스팅이 다르다
// 함수 선언문은 function 키워드로 시작해 기명(Named,이름이있는) 함수

function hello() {
    console.log('hello');
}

// 함수 표현식은 변수 등에 할당해 생성한 함수

const hello = function () {
    console.log('hello');
};

// 호이스팅
// 함수 호이스팅은 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 호이스팅을 활용하면, 코드에서 복잡한 함수 로직이 먼저 등장하지 않게

// var 키워드로 호이스팅 가능, 하지만 대부분 단점으로 작용

const fruits = getFruits(); // ok, 호출먼저
const movies = getMovies(); // error : 함수가 상단에 정의되기 전까지 실행안됨

function getFruits() {
    // 함수내용
}

const getMovies = function () {
    //함수내용
};

//선언문과 함수표현식의 호이스팅 차이

// 반환과 종료
// return 키워드를 통해 함수를 호출할때 함수 안에서 밖으로 데이터를 내보낼 수 있다.

function hello() {
    return 'Hello'; //여기서 함수 종료
    console.log('wow'); //동작하지않음
}

console.log(hello()); //hello

// return은 함수를 종료

// 매개변수, 매개 = 서로 떨어진 두 사이를 이어주다
function sum(a, b) {
    return a + b;
}

//매개변수 유효범위는 한 블럭단위

//기본값
// 기본값이 지정된 매개변수는 undefined가 전달되면, 그 대신 기본값을 사용

function sum(a, b = 1) {
    // b 매개변수로 undefined가 들어오면 기본값인 1을 사용한다
    return a + b;
}

// 구조분해할당
// 매개변수로 객체나 배열을 전달하는경우 구조분해할당을 사용해 특정배열을 꺼냄

const use = {
    name: 'heropy',
    age: 85,
};

function getName({ name }) {
    //중괄호로 구조분해해서 name만 사용
    return name; //객체 데이터의 name key값
}
// 객체데이터는 순서가 없음, key값이 부여된거임

const fruits1 = ['apple', 'banana', 'cherry', 'orange', 'strawberry'];
const numbers = [1, 2, 3, 4, 5, 6, 7];

function getSecond([, b]) {
    // a 변수는 사용하지 않기 때문에 생략가능
    return b;
}

function getFifte(items) {
    return items[4]; // 5번째 조회
}

// 나머지 매개변수
// 전개 연산자를 사용해 일치하는 순서부터 이후 모든 인수를 매개변수가 배열로 전달받음
// 이렇게 만들어진 매개변수를 나머지 매개변수라고 부름

//나머지를 모두 가져온다

function sum(a, b, ...rest) {
    console.log(a, b, rest); // 1 2 [3,4,5,6,7,8]
}

const res = sum(1, 2, 3, 4, 5, 6, 7, 8); // a=1, b=2, 나머지는 rest에 배열데이터로
console.log(res); //33

// arguments
// 모든 함수 안에서 사용 가능한 내장 객체로, 매개변수 없이도 함부로 들어오는 모든 인수를 참조
// 배열이 아닌 유사배열이므로 배열 메소드는 사용할 수 없지만 반복 가능한 객체이므로 for문으로 순회할수있음
// 나머지 매개변수를 사용하면, arguments 객체를 사용할 필요가 없다

// 화살표함수
// 화살표함수를 사용하면 일반함수보다 더 단순하고 간결한 문법으로 함수작성
// 기본적으로 익명함수이며 표현식

// 일반함수와 화살표함수는 문법의 차이가 있는것이 아니라, 함수 내부에서 사용하는 this 키워드 동작방식이 다름

const hello = () => 'hello';

// 객체 리터럴은 중괄호를 사용하기 때문에 객체를 소괄호로 감싸야함
const g = () => {
    return { a: 1 };
};

const h = () => ({ a: 1 });
// const h = () => {a:1} error

const obj = {
    fnA() {}, // b의 축약형
    fnB: function () {}, //일반함수
    fnC: () => {}, //화살표함수
};

//즉시실행함수
// 즉시 실행되는 함수표현을 줄인말, 함수정의와 동시에 바로 실행
// 전역범위의 변수 오염을 방지하거나 함수 외부에서 내부 변수에 접근하는 것을 차단

const double = () => {
    //
};
// 함수 실행(호출)
double();

// vs

// 함수 정의 및 실행
// 소괄호로 시작함
() => {
    //
};

// 콜백
// 대상 함수의 인수로 사용되는 함수
function sum(a, b, callback) {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
}

sum(3, 7, function (value) {
    console.log(value);
});

//호출 스케줄링
// web(node) api를 통해 제공되는 타이머함수를 사용
// setTimeout() clearTimeout() setInterval() clearInterval()

//재귀
// 함수가 자기 내부에서 자신을 다시 호출하는것

const userA = { name: 'A', parent: null };
const userY = { name: 'Y', parent: userA };

const getRootUser = (user) => {
    if (user.parent) {
        // parent속성의 값이 참일경우 재귀호출
        return getRootUser(user.parent);
    }
    return user;
};

console.log(getRootUser(userY)); //userA

// 렉시컬 스코프
// 정적 스코프(Static Scope)라고도 하며, 함수를 선언한 위치에서 유효하게 접근 가능한 범위(유효범위)를 말합니다.

const a = {
    name: 'A',
    fnA() {
        const b = {
            name: 'B',
            fnB() {
                const c = {
                    name: 'C',
                    fnC() {
                        console.log(window); // window 객체
                        console.log(a); // a 객체
                        console.log(b); // b 객체
                        console.log(c); // c 객체
                        console.log(d); // Error: d is not defined
                    },
                };
                return c;
            },
        };
        return b;
    },
    fnX() {
        const d = {
            name: 'D',
        };
    },
};
a.fnA().fnB().fnC();

//this
// 함수 내부에서 동적으로 결정되는 특수한 식별자
// function 키워드를 사용하는 일반 함수는 자신을 호출하는 위치에서 동적으로 정의
// 화살표함수는 자신이 선언된 렉시컬범위(부모함수) 에서 정적으로 정의됨

const utils = {
    first: 'Neo',
    last: 'Anderson',
    user() {
        console.log(this); // utils 객체
        return {
            first: 'Heropy',
            last: 'Park',
            age: 85,
            getFullA() {
                return `${this.first} ${this.last}`;
            },
            getFullB: () => `${this.first} ${this.last}`, // 화살표 함수의 this가 정의되는 위치(선언할 때)
        };
    },
};

const u = utils.user();
console.log(u.getFullA()); // 'Heropy Park' / 일반 함수의 this가 정의되는 위치(호출할 때)
console.log(u.getFullB()); // 'Neo Anderson'

// call, apply, bind
// 객체가 함수를 빌려서 사용(호출)
const j = {
    name: 'Jone',
    getName(greet) {
        return `${greet}.I'm ${this.name}`;
    },
};

const n = {
    name: 'Neo',
};

console.log(j.getName('Hello')); // Hello.I'm John
console.log(j.getName.call(n, 'hi')); //Hi.I'm Neo

//클로저
// 클로저 함수가 선언될때의 렉시컬 스코프를 기억하고있다가 함수가 호출될때 그 스코프에 접근할수있는 개념

const h1El = document.querySelector('h1');
const h2El = document.querySelector('h2');

//외부에서 별도의 상태 관리가 필요!
let h1IsRed = false;
let h2IsRed = false;

h1El.addEventListener('click', (event) => {
    h1IsRed = !h1IsRed;
    h1El.style.color = h1IsRed ? 'red' : 'black';
});
h2El.addEventListener('click', (event) => {
    h1IsRed = !h1IsRed;
    h2El.style.color = h2IsRed ? 'red' : 'black';
});
//하나 만들때마다 함수를 만들어야하는 불편함

// 하나의 함수로 정리!
const createToggleHandler = () => {
    //
    let isRed = false;
    return (event) => {
        isRed = !isRed;
        event.target.style.color = isRed ? 'red' : 'black';
        //이벤트가 발생한 그 대상에 스타일 컬러를 빨강이나 검정색 넣는다
    };
}; //함수가 반환이 되고 반환되는 함수마다 호출됨

h1El.addEventListener('click', createToggleHandler());
h2El.addEventListener('click', createToggleHandler());
//여러개여도 문제안생김

//함수커링
// 커링은 여러개의 인수를 받는 함수에서, 인수를 한번에 하나씩 받는 함수로 나누어서 순차적으로 호출
// 함수의 재사용성, 가독성, 유연성

console['log'](123); // 메소드이름을 동적으로 관리할수있음 - 대괄호표기법
console.log(123);

function useConsole(level) {
    return function (message) {
        console[level](message); //
    };
}

useConsole('log')('Hello world~'); // log호출 된 후 message 함수가 반환됨,
useConsole('warn')('Danger ahead!');
useConsole('error')('Error: system failure..');

//이렇게 쓸때 유용함
function useConsole(level) {
    return function (message) {
        console[level](message);
    };
}

const log = useConsole('log'); // log를 사용할때 이걸 재사용한다?!
const warn = useConsole('warn');
const error = useConsole('error'); // log로 가져와 커링으로 합쳐서 error에 사용

//코드 재사용성
log('Hello world~');
warn('Danger ahead!');
error('Error: system failure..');
