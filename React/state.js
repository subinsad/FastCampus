// 📍state

import { Square } from './props';

// 1. 부모 컴포넌트에서 자녀 컴포넌트로 데이터를 보내는게 아닌
// 해당 컴포넌트 내부에서 데이터를 전달하려면 state로

// 예를 들어서 검색창에 글을 입력할 때 글이 변하는 것은 state를 바굼

// 2. state는 변경 가능(mutable)
// 3. state이 변하면 re-render가 된다. re-render가 된다

state = {
    message: '',
    attacFile: undefined,
    openMenu: false,
};

// 부모 컴포넌트에서 state 보관하기(예제)

// 현재 게임의 state를 각각의 Square 컴포넌트에서 유지,
// 승자를 확인하기 위해 9개 사각형의 값을 한 곳에 유지
export class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
}

// 여러개의 자식으로부터 데이터를 모으거나 두 개의 자식 컴포넌트들이 서로 통신하게 하려면
// 부모 컴포넌트에 공유 state를 정의해야함, 부모 컴포넌트는 props를 사용하여 자식 컴포넌트에
// state를 다시 전달할 수 있음. 이것은 자식 컴포넌트들이 서로 또는 부모 컴포넌트와 동기화
// 하도록 만든다.

// board에 생성자를 추가하고 9개의 사각형에 해당하는
// 9개 null 배열을 초기 state로 설정
export class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Squares: Array(9).fill(null),
        };
    }
}

// Array.prototype.fill()
// fill()메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채움
this.state = {
    Squares: Array(9).fill(null), // this.state = ,,,,,,,,,
};
