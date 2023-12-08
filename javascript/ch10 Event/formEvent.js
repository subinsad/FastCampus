// Focus , Form Events

// focus : 요소가 포커스를 얻었을 때
// blur : 요소가 포커스를 잃었을 때
// input : 값이 변경되었을 때
// change : 상태가 변경되었을 때
// submit : 제출 버튼을 선택했을 때
// reset : 리셋 버튼을 선택했을 때

const formEl = document.querySelector('form');
const inputEls = document.querySelectorAll('input');

inputEls.forEach((el) => {
    el.addEventListener('focus', () => {
        formEl.classList.add('active');
    });
    el.addEventListener('blur', () => {
        formEl.classList.remove('active');
    });
    el.addEventListener('input', (event) => {
        console.log(event.target.value);
    });
});

formEl.addEventListener('submit', (event) => {
    // form요소에서 submit 이벤트가 발생하면 페이지를 새로고침하는것이 기본동작
    event.preventDefault(); // 해당요소의 기본 동작을 방지
    const data = {
        id: event.target[0].value,
        pw: event.target[1].value,
    };
    console.log('제출', data);
});

formEl.addEventListener('reset', (event) => {
    console.log('리셋');
});
