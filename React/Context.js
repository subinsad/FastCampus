// 컨텍스트는 모든 수준에서 수동으로 props를 전달하지 않고도 구성요소트리를 통해 데이터를
// 전달할 수 있는 방법을 제공, context는 전역 데이터를 관리하는데 사용

React.createContext;

// context 객체를 만듭니다. 리액트가 이 context 객체를 구독하는 구성요소를 렌더링할 때 트리에서 그 위에
// 가장 근접하게 일치하는 Provider에서 현재 컨텍스트 값을 읽습니다.

// defaultValue 인수는 트리에서 구성 요소 위에 일치하는 공급자가 없는 경우에만 사용

// 클래스의 contextType 속성에는 react.createContext()에 의해 생성된 context 객체가 할당될 수 있다.
// 이 속성을 사용하면 this.context를 사용하여 해당 컨텍스트 유형의 가장 가까운 현재 value를 사용할 수 있다.
// 렌더링 기능을 포함한 모든 수명 주기 메서드에서 이를 참조할 수 있다.
