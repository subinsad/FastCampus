let list = [
    "01, 들어가며",
    "02,",
    "03,",
    "04,",
    "05,",
]

let newList = []

for (let i = 0; i < list.length; i++) {
    newList.push(
        list[i].slice(4)
    );
}

console.log(newList)

// 금칙어 : 콜라
// includes
// if(str.includes){ 로 변경

function hasCola(str){
    if(str.indexOf('콜라') > -1){
        console.log('금칙어')
    }else{
        console.log('통과')
    }
}

hasCola("콜라") // 0 금칙어