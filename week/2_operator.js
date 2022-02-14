'use strict';

// 1. string concatenation (문자열 연결)
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("young's \n\t book"); // /n 줄바꿈 \t 탭키

// 2. Numberic operators (숫자 연산자)
console.log(1 + 1); // 더하기
console.log(1 - 1); // 빼기
console.log(1 / 1); // 나누기
console.log(1 * 1); // 곱하기
console.log(5 % 2); // 나누고 나머지 값
console.log(2 ** 3); //2에 3승

// 3. Increment and decrement operator (증가 및 감소 연산자)
let counter = 2;
const preIncrement = ++counter; //++ 기호가 앞에 붙은 경우, 먼저 더한 후 변수를 할당
/// counter = counter+1;
/// preIncrement = counter;

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
/// 출력값 : preIncrement: 3, counter: 3
/// counter(변수)에 먼저 1을 더한값이 3,  preIncrement에 할당하여 3

const postIncrement = counter++; // ++기호가 뒤에 붙은 경우, 변수를 먼저 할당한 후 1을 더함
/// postIncrement = counter
/// counter = counter+1;

console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
/// 출력값 : postIncrement: 3, counter: 4
/// 앞 코드에서 counter: 3으로 출력되었으니 3을 먼저 postIncrement에 할당하여 3, 이후 1을 더한 값이 counter로 업데이트되어 4

const crement = --counter; // --기호가 앞에 붙은 경우, 먼저 빼기 후 변수를 할당
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
/// 출력값 : postIncrement: 3, counter: 3
/// 앞 코드에서 counter: 4로 출력되었으니 4에서 1을 먼저 빼고 3, 이후 값이 counter로 업데이트되어 3

const ecrement = counter--; //--기호가 뒤에 붙은 경우, 변수를 먼저 할당한 후 1을 뺀다
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
/// 출력값 : postIncrement: 3, counter: 2
/// 앞 코드에서 counter: 3으로 출력되었으니 postIncrement에 할당하여 3, 이후 1을 뺀 값이 counter로 업데이트 되어 2

// 4. Assigment operators (할당 연산자)
let x = 3;
let y = 6;

x += y; // x = x + y; 9
x -= y; // x = x - y; 9-6
x *= y; // x = x * y; 3*6
x /= y; // x = x / y; 18/6

console.log(`${(x += y)}`); // 9
console.log(`${(x -= y)}`); // 3
console.log(`${(x *= y)}`); // 18
console.log(`${(x /= y)}`); // 3

// 5. Comparison operator (비교 연산자)
console.log(10 < 6); // 10은 6보다 작다
console.log(10 <= 6); // 10은 6보다 작거나 같다
console.log(10 > 6); // 10은 6보다 크다
console.log(10 >= 6); // 10은 6보다 크거나 같다

// 6. Logical operator (논리 연산자) : || (or), && (and). ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or) : 처음으로 true가 나오면 멈춘다, or중에 하나라도 true면 true이다
console.log(`or: ${value1 || value2 || check()}`); // value1이 true 인지 확인 -> value2가 true 인지 확인 ->  check 함수에서 true가 아니면 '▣'를 출력

// && (and) : 모두가 true가 되어야 true 로 리턴함
console.log(`and: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('▣');
  }
  return true;
}

// ! (not) : 값을 반대로 바꿔줌
console.log(!value1);

// equality 예시
console.log(0 == false); // 0은 거짓과 같은가? true
console.log(0 === false); // 0은 거짓과 타입이 같은가? 0은 boolean 타입이 아니기 때문에 false
console.log('' == false); // '문자열'은 거짓과 같은가? true
console.log('' === false); // '문자열'은 거짓과 타입이 같은가? 문자열은 boolean 타입이 아니기 때문에 false
console.log(null == undefined); // null은 undefinded 와 같은가? true
console.log(null === undefined); // null은 undefinded 과 타입이 같은가? 다른 타입이므로 false

// 8. if : if, else if, else
const name = 'young'; // 이름은 young 인데
if (name === 'young') {
  // 만약 young과 타입이 같으면, 다음 블럭을 실행해.
  console.log('welcome. young!'); // welcome. young! 을 출력하고,
} else if (name === 'eun') {
  // 그렇지 않으면 eun 과 타입이 같으면, 다음 블럭을 실행해.
  console.log('you are amazing eun!'); // you are amazing eun! 을 출력해라
} else {
  console.log('unkwnon'); // 또 다르면 unkwnon 을 출력해라
}

// 9. Ternary operator : ?
console.log(name === 'young' ? 'yes' : 'no'); // young가 true 입니까? 맞으면 yes를 출력하고, 아니면 : 기호 다음인 no를 출력해라

// 10. Switch statement : 정해진 타입을 검사하거나, 인원 등을 검사할 때 사용
const browser = 'IE';

switch (browser) {
  case 'IE':
    console.log('go away!'); // 브라우저가 IE이면 go away! 을 출력하고,
    break; // 멈춘다
  case 'Chrome': // 브라우저가 Chrome 이면
  case 'Firefox': // 브라우저가 Firefox 이면
    console.log('love you!'); // love you! 을 출력하고,
    break; // 멈춘다
  default:
    // 브라우저가 여기에 없다면 기본 값으로
    console.log('same all!'); // same all!을 출력해라
    break;
}

// 11. Loops(반복문) : While
// While : 조건문이 맞을 때만 블럭을 실행한다
let i = 3;

while (i > 0) {
  console.log(`while: ${i}`);
  i--; // i를 1 감소시킴
}
// 출력값 : i = 3 인데, 0보다 크니? 네 -1 감소해서 3, 2, 1 되고, 0일 때 i는 0보다 크지 않으니 멈춘다
// while: 3
// while: 2
// while: 1

// 11. Loops(반복문) : do whlie
// do whlie : 먼저 블럭을 실행한 후 조건이 맞는지 아닌지 검사한다
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);
// 출력값 : 앞 코드에서 i는 0이 나왔으므로 0이 먼저 출력되고, i가 0보다 큰지 검사한 후 멈춘다
// do while: 0

// 11. Loops(반복문) : for
// for : for(시작하는 문장; 컨디션; 어떤 스텝을 밟을지 명시), 시작하는 문장은 딱 한번만 실행되며, 컨디션과 스탭은 안맞을 때까지 실행된다
for (i = 3; i > 0; i--) {
  console.log(`for : ${i}`);
}
// 출력값 : i는 3인데 0보다 크니? 네, 3출력 후 -1 감소시킴, 0이될 때까지 반복
// for : 3
// for : 2
// for : 1

for (let i = 3; i > 0; i = i - 2) {
  console.log(`inline variable for : ${i}`);
}
// 출력값 : i는 3인데 i는 0보다 크니? 네, 3출력 후 -2 감소시킴, 0이 될 때가지 반복
// inline variable for : 3
// inline variable for : 1

// i가 0일 때 j를 0부터 9까지 돌리고, i가 1일 때 j를 0부터 9까지 돌리고..i가 9일 때까지 반복
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// for 문안에 break(완전히 끝냄), continue(지금 것만 스킵하고 다음 스탭으로 넘어감) 사용하여 반복을 끝낼 수 있다

// 숫자를 0~10까지 짝수인 숫자만 출력하라 (continue 사용)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// 문제1: 아래 코드로 작성하는게 더 좋음
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`q1. ${i}`);
  }
}

// 문제2 : 숫자 0~10까지 반복문을 작성하고 숫자 8을 만나면 멈추게 하라 (break 사용)
for (let i = 0; i < 10; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
