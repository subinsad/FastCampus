// keyboard events

// keydown / 키를 누를 때
// keyup / 키를 땔 때

const inputEl = document.querySelector('input');

inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.isComposing) {
        console.log(event.isComposing);
        console.log(event.target.value);
    }
});

// 입력을 완료하는 내용과 한글을 같이 사용한다면 두번실행되지않게 iscomposing속성사용
