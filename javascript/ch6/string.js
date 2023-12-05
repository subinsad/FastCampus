// .length
// 문자의 길이를 반환

const str = 'Hello world!';
//12

console.log(str.length);

//.includes()
// 대상 문자에 주어진 문자가 포함되어있는지 확인(불린-참거짓)

console.log(str.includes('Hello')); //true

// .indexof()
// 대상 문자에서 주어진 문자와 일치하는 첫번째 인덱스를 반환
// 일치하는 문자가 없으면 -1반환

console.log(str.indexOf('world')); //6

//.padEnd()
// 대상 문자의 길이가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환

const str1 = '1234567';
console.log(str1.padEnd(10, '0')); //1234567000

// .padStart()
// 대상 문자의 길이가 지정된 길이보다 작으면
// 주어진 문자를 지정된 길이까지 앞에 붙여 새로운 문자를 반환

console.log(str1.padStart(10, '0')); ///0001234567

// .replace()
// 대상 문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체한 새로운 문자를 반환

const str2 = 'Hello, Hello?!';

console.log(str2.replace('Hello', 'Hi')); //Hi, Hello?!
console.log(str2.replace(/Hello/g, 'Hi')); //Hi, Hi?! 정규표현식으로 모든문자를 변경

// .split()
// 대상 문자를 주어진 구분자로 나눠 배열로 변환

const str3 = 'Apple, Banana, Cherry';

console.log(str.split(',')); // 쉼표로 구분

// .toLowerCase()
//대상 문자를 영어 소문자로 변환해 새로운 문자로 변환

console.log(str3.toLowerCase()); // apple, banana, cherry

// .toUpperCase()
// 대상 문자를 영어 대문자로 변환해 새로운 문자로 반환

console.log(str3.toUpperCase()); //APPLE, BANANA, CHERRY

// .trim()
// 대상 문자의 앞뒤 공백 문자 (space, tab 등) 를 제거한 새로운 문자를 반환
//(아이디나 비밀번호의 공백제거용도로 사용함)

const str4 = ' HEROPY ';

console.log(str.thim()); //'HEROPY'
