'use strict';

// function
// - 프로그램을 구성하는 기본적인 빌딩 블록
// - 서브 프로그램 이라고도 불리우며, 여러번 재사용이 가능함
// - 한 가지의 테스크나 어떤 값을 계산하기 위해 쓰여짐

// 1. function = obeject
// function 함수이름지정(파라미터1, 파라미터2 나열) {함수안에 기본적인 로직 작성..return;}
// 하나의 function 은 한가지의 일만 수행하도록 만들어야 함
// functoin 의 함수이름지정은 명사가 아닌 동사 형태로 지정함 (ex : dosomething, command, verb)
// function 의 함수이름지정시 여러개의 동작을 입력하지 않고 최대한 나눠서 지정하는 것을 권장함

function printHello() {
  console.log('Hello');
}
printHello(); // 위 코드는 Hello 밖에 출력하지 못함

function log(message) {
  console.log(message); // log안에 파라미터를 넣어 가변적으로 사용할 수 있음
}

log('hi');
log(1234);

// 2. parameters (파라메터)

function changeName(obj) {
  obj.name = 'cober'; // changeName 이라는 Function은 전달된 obj에 name을 coder로 무조건 변경하는 코드
}
const eun = { name: 'eun' };
changeName(eun);
console.log(eun); // obj는 레퍼런스로 전달되기 때문에 함수 안에서 obj의 값을 변경하면 변경된 사항이 그대로 메모리에 적용되기 때문에 변경됨

// 3. default parameters

function showMessge(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessge('Hi');
