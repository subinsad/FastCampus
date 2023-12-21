// 리액트에서 불변성이란?
// 사전적의미로는 값이나 상태를 변경할 수 없는 것

// 불변성을 지키는 방법
// 참조타입에서는 값을 바꿨을 때 call stack 주소 값은 같은데 heap메모리 값만 바꿔주기에 불변성을
// 유지할 수 없었으므로 아예 새로운 배열을 반환하는 메소드를 사용하면 됨
// spread operator, map, fliter, slice, reduce

// 원본 데이터를 변경하는 메소드 > splice, push

const array = [1, 2, 3, 4];
const sameArray = array;
sameArray.push(5);

console.log(array === sameArray); // true

const array1 = [1, 2, 3, 4];
const defferntArray = [...array1, 5];
console.log(array1 === defferntArray); //false
