//데이터 통신

//method
// 요청의 종류
// GET: 데이터 조회
// POST: 데이터 생성
// PUT / PATCH: 데이터 수정 (전체/일부)
// DELETE: 데이터 삭제

//headers
// headers는 요청과 응답에 대한 메타 정보(Metadata)를 포함합니다.

//body
// 요청과 응답으로 전송하고자 하는 본문
// 주로 문자(json)이나 formdata를 전송

// Status
// status는 요청에 대한 응답 상태 코드를 나타냅니다.
// HTTP 상태 코드는 다음과 같이 5가지 범주로 나뉩니다.

// 1xx: 처리 중(Processing)
// 2xx: 성공
// 3xx: 리다이렉션(Redirection)
// 4xx: 클라이언트 오류
// 5xx: 서버 오류
// 자주 볼 수 있는 상태 코드는 다음과 같습니다.

// 200: 정상적으로 처리됨
// 400: 잘못된 요청
// 401: 인증 정보가 부족함
// 403: 권한이 없음
// 404: 찾을 수 없음
// 500: 서버 오류

// fetch vs axios
// Promise 기반으로 비동기 통신을 지원하며, 별도의 설치 없이 바로 사용할 수 있습니다.

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((data) => console.log(data)); // User[]

// axios는 2015년 경에 첫 릴리즈된 HTTP 클라이언트 라이브러리입니다.
// fetch와 마찬가지로 Promise 기반으로 비동기 통신을 지원합니다.
// 각 웹 브라우저의 하위호환성(Cross-Browser Compatibility)뿐만 아니라, 자동 JSON 데이터 변환이나 서버 측 지원 등의 추가 기능을 제공합니다.

// 데이터 조회
// 읽어올 데이터를 가져올 때는 주로 get메소드를 사용
// fetch 함수는 get 메소드를 기본값으로 사용, 별도의 옵션을 지정하지 않아도 됨
// 가져온 데이터는 .json()을 통해 분석해야함

axious({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    data: {
        name: 'subin',
    },
});

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    body: JSON.stringify({
        name: 'subin',
    }),
}); // get일경우 body에 속성넣으면 오류뜸

const inputEl = document.querySelector('input[type="file"]');

inputEl.addEventListener('change', (event) => {
    const file = inputEl.file[0];

    const formData = new FormData();
    formData.append('image', file);

    fetch('http://', {
        method: 'POST',
        body: formData,
    });
});
