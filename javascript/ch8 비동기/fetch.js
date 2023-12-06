// fetch(주소, 옵션)
// 네트워크를 통해 리소스의 요청 및 응답을 처리할 수 있음
// promise 인스턴스를 반환

fetch(`https://www.omdbapi.com/?apikey=7035c30c&s=avengers`).then((res) =>
    res.json()
);

then((json) => console.log(json));

const wrap = async () => {
    const res = await fetch(
        'https://www.omdbapi.com/?apikey=7035c30c&s=avengers'
    );
    const jsone = await res.json();
    console.log(json);
};

fetch(`https://www.omdbapi.com/?apikey=7035c30c&s=avengers`),
    {
        method: 'GET', // get은 기본값, get이 있어야 정상적으로 동작함
        Headers: {
            'content-Type': 'application/json', // 서버로 전성되는 내용의 type이 무엇인지 지정
            // json 이라는 데이터의 포맷으로 통신
        },
        body: JSON.stringify({
            // stringify는 인수로 들어온 자바스크립트 데이터를 전부 다 문자화
            name: 'Heropy',
            age: 85,
        }),
        //서버로 전송하고 싶은 데이터를 명시
        // body에는 명시하는 데이터가 항상 문자화를 시켜줘야함
    };
