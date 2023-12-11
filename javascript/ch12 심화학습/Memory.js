// 메모리 누수

// 더이상 필요하지 않은 데이터가 해제되지 못하고 메모리를 계속 차지되는 현상

// - 불필요한 전역 변수 사용
// - 분리된 노드 참조
// - 해제하지 않은 타이머
// - 잘못된 클로저 사용

window.hello = 'Hello world';
window.heropy = { name: 'Heropy', age: 85 };

//////// 분리된 노드 참조
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const parent = document.querySelector('.parent');
    console.log(parent);
    parent && parent.remove();
});

// 해제하지 않은 타이머

let a = 0;
const intervalId = setInterval(() => {
    a += 1;
}, 1000);

setTimeout(() => {
    console.log(a);
    clearInterval(intervalId);
}, 1000);

// 잘못된 클로저 사용
const getFn = () => {
    let a = 0;
    return (name) => {
        //a += 1;
        //console.log(a); 메모리누수현상으로 삭제해야함
        return `Hello ${name}`;
    };
};

const fn = getFn();
console.log(fn('Heropy'));
console.log(fn('Neo'));
console.log(fn('lewis'));
