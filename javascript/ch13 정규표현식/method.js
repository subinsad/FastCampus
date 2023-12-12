// 정규표현식

// 정규식.test(문자열) - 일치 여부 반환
// 문자열.match(정규식) - 일치하는 문자의 배열 반환
// 문자열.replace(정규식,대체문자) - 일치하는 문자를 대체

const regxp = /fox/gi;

console.log(regexp.test(str));
console.log(str.match(regxp));
console.log(str.replace(regxp, 'cat'));

// g - 모든 문자 일치(Global)
// i - 영어 대소문자를 구분 않고 일치(Ignore case)
// m - 여러 줄 일치(Multi line), 각각의 줄을 시작과 끝으로 인식!

console.log(str.match(/the/));
console.log(str.match(/the/g));
console.log(str.match(/the/gi));
console.log(str.match(/\.$/gi));
console.log(str.match(/\.$/gim));
