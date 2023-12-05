const date = new Date();
console.log(date);

// .getFullYear()와  .setFullYear()
// 날짜 인스턴스의 '연도'를 반환하거나 지정

console.log(date.getFullYear());

date.getFullYear(2023);

// .getMonth()와 .setMonth()
// 날짜 인스턴스의 '월'을 반환하거나 지정
// 0부터 시작

date.getMonth(0);
console.log(date.getMonth()); // 0
console.log(date); // 1월

// .getDate()와 /setDate()
// 날짜 인스턴스의 '일'을 반환하거나 지정

console.log(date.getDate);

date.setDate(11);
console.log(date); // 11일로 변경

// .getHours()와 .setHours()
// 날짜 인스턴스의 '시간'을 반환하거나 지정

date.setHours(7);

console.log(date.getHours); //7시

// .getMinutes()와 .setMinutes()
// 날짜 인스턴스의 '분'을 반환하거나 지정

// .getSeconds() .setSeconds
// 날짜 인스턴스의 '초'를 반환하거나 지정

// .getDay()
// 날짜 인스턴스의 '요일'을 반환

const date1 = new Date();
const day = date.getDay();

console.log(day);
console.log(getDayKo(day));

function getDayKo(day) {
    switch (day) {
        case 0:
            return '일요일';
        case 1:
            return '월요일';
        case 2:
            return '화요일';
        case 3:
            return '수요일';
        case 4:
            return '목요일';
        case 5:
            return '금요일';
        case 6:
            return '토요일';
    }
}

// .getTime() .setTime
//1970-01-01 부터 경과한
// 날짜 인스턴스의 밀리초로 반환하거나 지정

console.log(date.getTime());

date.setTime(170000000);
console.log(date.getTime());

Date.prototype.isAfter = function (date) {
    const a = this.getTime();
    const b = date.getTime();
    return a > b;
};

const d1 = new Date('Set jan 01 2022 00:00:00 GMT+0900(한국표준시');
const d2 = new Date('Set jan 01 2023 00:00:00 GMT+0900(한국표준시');

console.log(d1.isAfter(d2)); // false
console.log(d2, isAfter(d1)); // true

//Date.now()
// 유닉스타임부터 경과한
// 메소드가 호출될 대 밀리초로 반환

const time = new Date().getTime();
console.log(Date.now());
