// 📍Props

export class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }; // state생성
    }
    render() {
        return (
            <button
                classname="square"
                onclick={() => {
                    this.setState({ value: 'X' }); // state 변경
                }}
            >
                {this.state.value} // state 이용
            </button>
        );
    }
}

// - 상속하는 부모 컴포넌트로부터 자녀 컴포넌트에 데이터 등을 전달하는 방법
// - 읽기 전용으로 자녀 컴포넌트 입장에서는 변하지 않는다. (변하게 하고자 하면 부모 컴포넌트에서 state를 변경)

// A 부모 컴포넌트
state = { a: 'a' };

// <b컴포넌트 aProps=(this.state.a) />

// b자식 컴포넌트
// A state 필요
// This.props.aProps

// 리액트에서 데이터가 변할 때 화면을 다시 렌더링 해주기 위해서는 react state를 사용

// react state란?
// 컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고있는 객체.(state가 변경되면 컴포넌트는 리랜더링된다. 도한 state는 컴포넌트 안에서 관리)

// ⭐️ Super 이후에 this 키워드
// - 생성자에서는 super 키워드 하나만 사용되거나 this키워드가 사용되기 전에 호출 되어야 함
// Class Square extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {a:true}
//     }
// }

// Super 이후에 this가 나와야하는이유
// -아래 소스 코드에서처럼 부모 클래스의 생성자를 호출 하기 전에 this.name을 사용하려고 하면 문제가 된다
// - react에서 this.state를 생성자에서 정의할때 super가 먼저와야 하는 이유도 이와 같다.
class person {
    constructor(name) {
        this.name = name;
    }
}
class PolitePerson extends person {
    constructor(name) {
        this.greetColleagues();
        super(name);
    }
    greetColleagues() {
        alert('My name is' + this.name + ', nice to meet you');
    }
}

// react에서 super에 props를 인자로 전달하는 이유
// - react.component객체가 생성될 때 props 속성을 초기화하기 위해 부모 컴포넌트에게 props를 전달
// - 생성자 내부에서도 this.props를 정상적으로 사용할 수 있도록 보장하기 위해
class Component {
    constructor(props) {
        this.props = props;
    }
}
