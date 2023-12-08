// cookie

// 도메인 단위로 저장
// 표준안 기준, 사이트당 최대 20개 및 4KB로 제한
// 영구 저장 불가능

// domain : 유효 도메인 설정
// path : 유효 경로 설정
// expires : 만료 날짜(UTC Date) 설정
// max-age : 만료 타이머 설정

document.cookie = 'a=1; domain=localhost; path=/';

document.cookie = `a=1; max-age=${60 * 60 * 24 * 3}`; // 3일 뒤 쿠키만료
document.cookie = `b=2; expires=${new Date(2022, 11, 16).toUTCString()}`;

console.log(document.cookie);

function getCookie(name) {
    const cookie = document.cookie
        .split(';')
        .find((cookie) => cookie.split('=')[0] === name);
    return cookie ? cookie.split('=')[1] : null;
    // cookie의 = 로 나눈 후 1번째 있는 값을 출력 / 그게 아니면 null
}

console.log(getCookie('a'));
// a매개변수를 name에 넣고 ';'로 나눈 값 중 cookie의 첫번째 값과 일치하면 출력 (a로 시작하는 값)
// a = 3

// storage (스토리지)

// 도메인 단위로 저장
// 5MB 제한
// 세션 혹은 영구 저장 가능
// 항상 문자데이터로 저장됨

// sessionStorage : 브라우저 세션이 유지되는 동안에만 데이터 저장
// localStorage : 따로 제거하지 않으면 영구적으로 데이터 저장

// .getItem() : 데이터 조회
// .setItem() : 데이터 추가
// .removeItem() : 데이터 제거
// .clear() : 스토리지 초기화

localStorage.setItem('a', 'Hello world');
localStorage.setItem('b', JSON.stringify({ x: 1, y: 2 }));
localStorage.setItem('c', 123);

console.log(localStorage.getItem('a')); //Hello world
console.log(JSON.parse(localStorage.getItem('b'))); // { x: 1, y: 2 } 숫자데이터
console.log(localStorage.getItem('c')); //123 문자데이터

localStorage.removeItem('a');
localStorage.clear();
