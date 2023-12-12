// 정규표현식

// - 문자검색(Search)
// - 문자대체(Replace)
// - 문자수출(Extract)

// 생성자
// new RegExp('표현','옵션')
// new RegExp('[a-z]','gi')

// 리터럴
// 표현/옵션
// /[a-z]/gi

const str = `
010-1234-5678
thesecon@gmail.com
Hello world
http://www.ddd
the quick brown...

`;

// const regexp = new RegExp('the', 'gi');
const regexp = /the/gi;
console.log(str.match(regexp));
