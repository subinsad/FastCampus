// Array

// Push() : 뒤에삽입
// pop(): 뒤에 삭제
// unshift():앞에삽입
// shift() : 앞에삭제

// arr.splice(n,m) : 특정 요소 지움
// n:시작 m : 개수

var arr = [1,2,3,4,5]
arr.splice(1,2)

console.log(arr) // [1,4,5]


// arr.splice(n,m,x) : 특정 요소 지우고 추가

var arr = [1,2,3,4,5]
arr.splice(1,3,100,200)
console.log(arr) // [1,100,200,5]

// arr.splice() : 삭제된 요소 반환

var arr = [1,2,3,4,5]
var result = arr.splice(1,2)

console.log(result) // [2,3]
console.log(arr) //[1,4,5]

// arr.slice(n,m) : n부터 m까지 반환
// ()빈값이면 배열복사

var arr = [1,2,3,4,5]
arr.slice(1,4) // [2,3,4]

// arr.concat(arr2,arr3...) : 합쳐서 새배열 반환

var arr = [1,2]

arr.concat([3,4]) //[1,2,3,4]

arr.concat([3,4],[5,6]) // [1,2,3,4,5,6]

// arr.forEach(fn) : 배열반복

let users = ['mike','tom','jane']

users.forEach((item,index) => {
    console.log(item)
})

//find / findIndex
var arr = [1,2,3,4,5]
const result = arr.find((item)=>{
    return item % 2 === 0
})

console.log(result) //

var userList = [
    {name: 'mike',age:30},
    {name: 'jane',age:27},
    {name: 'tom',age:10},
]

const result = userList.find((user)=>{
    if(user.age < 19){
        return true
    }

    return false
});

console.log(result) // true

console.log(result) // findIndex일경우 2 반환

// arr filter 배열로 만든 후 반환

// arr.map(fn) 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환

var userList = [
    {name: 'mike',age:30},
    {name: 'jane',age:27},
    {name: 'tom',age:10},
]

let newUserList = userList.map((user,index) => {
    return Object.assign({},user,{
        id : index + 1,
        isAdult : user.age > 19,
    });
});

