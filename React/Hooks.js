// react hooks

// hoc
// 화면에서 재사용 가능한 로직만 분리해서 컴포넌트로 만들고
// 재사용 불가능한 ui와 같은 다른 부분들은 parameter로 받아서 처리

//usestate ??

// 1. HOC란?
// Higher Order Component 의 약자로
// 컴포넌트를 인자로 받아서 새로운 리액트 컴포넌트를 리턴하는 함수

// 2. 너무나 많은 HOC를 사용하게 되면 Wrapper가 너무 많아지게 되면
// Hooks에서는 어떻게 처리?
// HOC대신에 Custom Hooks를 이용해서 컴포넌트를 만들어서 처리

//3. 생명주기를 위해서 Hooks에서는 어떠한 api를 사용?
// componentDidMount, componentDidUpadte, componentWillUnmount 모두를
// Hooks에서는 useEffect를 이용해서 처리

//4. Hooks에서 state를 업데이트 해주려면?
// state를 정의해줄때 const[name, setName] = useState("") 이런식으로 해준다.
// 여기서 setName을 이용해서 state를 업데이트 시켜줄 수 있다.

//5. class 컴포넌트와 비교했을 때 함수형 컴포넌트 장점?
// 더 짧고 간결한 코드 / 더 빠른 성능/ 더 나은 가독성