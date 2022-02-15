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

// 2. parameters

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
showMessge('Hi'); // 사용자가 파라미터를 전달하지 않을 때 from의 대체값을 출력

// 4. rest parameters ... << 은 배열 형태로 전달

function printAll(...args) {
  // args : 아래 3개의 인자가 담겨진 배열을 의미
  for (let i = 0; i < args.length; i++) {
    // 0부터 arg의 개수만큼 루프하며 증가
    console.log(args[i]);
  }

  for (const arg of args) {
    // for ~ of : args에 있는 배열이 차례로 하나씩 지정하여 arg 출력
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg)); // forEach 함수를 사용해서도 가능
}

printAll('dream', 'coding', 'ellie');

// 5. Local scop : 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.

let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello'; // 블럭 안에서 변수를 선언하는 것을 '지역 변수'라 부름
  console.log(message); // 지역 변수는 안에서만 접근이 가능함
  console.log(globalMessage); // 하지만 globalMessage 변수는 안에서 선언했지만 출력이 가능함
  function printAnother() {
    // 함수 안에 또 다른 함수를 선언할 수 있음, 부모에게서 정의된 변수는 자식의 함수에서도 확인할 수 있음
    console.log(message);
    let childMessage = 'hello'; // 하지만 자식 안에서 정의된 childMessage는 부모의 함수에서 확인할 수 없으며 접근이 안됨
  }
}
printMessage();

// 6. return a value
function sum(a, b) {
  // 파라미터로 값(a,b)을 전달 받아서
  return a + b; // 계산된 값을 return 할 수 있음, 리턴값이 없는 경우 return undefinded; 가 들어가 있는 것과 같으나 이는 생략해도 무방함
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. early return, early exit
// bad 코드
function upgradeUser(user) {
  if (user.point > 10) {
    // ..업그레이드 로직 입력
  }
}

// good 코드
function upgradeUser(user) {
  if (user.point <= 10) {
    return; // 조건이 맞지 않는 경우 return 처리하여 함수 종료
  }
  // 조건이 맞을때만..업그레이드 로직 입력
}

// 8. function expression (함수 표현) : 할당된 다음부터 호출이 가능함

const print = function () {
  // 함수를 선언함과 동시에 print라는 변수에 할당, 함수에 이름이 없는 것을 anonymous function (익명 함수)
  console.log('print');
};
print(); // print의 변수에 함수를 호출하게되면 print가 출력됨
const printAgain = print; // print를 다른 변수에 또 할당하게되면 print는 function 을 가리키고 있기 때문에 print가 재출력됨
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 9. callback function : 상황에 맞는 함수를 부르는 것을 callback function 이라고 함

function randomQuiz(anwer, printYes, printNo) {
  // randomQuiz라는 기능은 정답, 정답이 맞을 때 호출하게될 함수(printYes), 정답이 틀릴 때 호출하게될 함수 (printNo)로 구성
  // printYes, printNo의 callback function가 파라미터로 전달됨
  if (anwer === 'love you') {
    // 만약 정답이 'love you'와 타입이 같다면 printYes 콜백 함수를 호출해라
    printYes();
  } else {
    printNo(); // 아니라면 printNo 콜백 함수를 호출해라
  }
}

const printYes = function () {
  // function 앞에 이름이 없는 경우 anonymous function (익명 함수)
  // printYes 변수에 yes!를 출력하는 함수(function)를 할당해놓고
  console.log('yes!');
};

const printNo = function print() {
  // function 앞에 이름이 있는 경우를 named functoin 라하며, 디버깅할 때  함수 이름이 나오게하기 위해 사용
  // printYes 변수에 no!를 출력하는 함수(function)를 할당해놓음
  console.log('no!');
};

randomQuiz('wang', printYes, printNo); // randomQuiz를 호출할 때 정답, yes!의 콜백 함수인 printYes, no!의 콜백 함수인 printNo를 전달한다
randomQuiz('love you', printYes, printNo);

// 10. Arrow functoin : 항상 anonymous function (익명 함수) 사용함

const simplePrint = function () {
  console.log('simplePrint');
};

const simplePrint = () => console.log('simplePrint'); // 위의 코드를 => 기호를 이용하여 간단하게 만들 수 있음

const add = function (a, b) {
  return a + b;
};

const add = (a, b) => a + b; // 위의 코드를 => 기호를 이용하여 간단하게 만들 수 있음

const simpleMultiplay = (a, b) => {
  // 블럭을 사용할 경우 return 값을 항상 입력해야 함
  return a * b;
};

// 11. IIFE : Immediately Invoked Function Exprssion (즉시 호출되는 함수 표현)

(function hello() {
  // 괄호를 넣어 함수를 바로 실행할 수 있음
  console.log('IIFE');
})();
