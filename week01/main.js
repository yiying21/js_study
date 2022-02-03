// use strict을 써야 하는 이유 : 선언한 변수만 통과
// javascript 에서 중요한 요소 : 입력, 연산, 출력
// variableI : let : 값이 변경될 수 있음 / const : 값이 변경되지 않도록 잠금해놓는 것, 보안성이 높음
// variable types : primitive 타입 (number(숫자), string(문자), boolean(false, true), null, undefind, symbol(고유한 식별자))
// function : 프로그램을 구성하는 서브 프로그램, 여러변 재사용 가능, 한 가자의 테스트나 계산할 때 사용, 하나의 함수는 한가지만 하도록 만듬, 이름은 동사 형태로 이름 지정, 펑션은 오브젝트로 간주함

'use strict';

function printHello() {
  console.log('hello~!');
}

printHello();

function log(message) {
  console.log(message);
}
log('hello');
