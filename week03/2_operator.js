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

x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

console.log(`${(x += y)}`); // 9
console.log(`${(x -= y)}`); // 3?? 마이너스 표기가 안됨..
console.log(`${(x *= y)}`); // 18
console.log(`${(x /= y)}`); // 3?? 값이 잘못 나옴..

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

// 11. Loops : While (~하는 동안)
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}
