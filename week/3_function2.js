'use strict';

// 함수 정의
// 코드 블럭안에 있는 기능을 add라고 이름을 지어줌
// 함수 이름을 지을 때 의미있는 이름을 짓는다

function add(num1, num2) {
  // 함수에 add라는 이름을 만들어서 숫자 a와 b의 인자를 받아서
  return num1 + num2; // 숫자  a와 b를 더한 값을 리턴한다
}

function print(name, age) {
  console.log(`${name} ${age}`);
}

print(8, 33);

const doSomething = add;
const result = doSomething(2, 3);
console.log(result);
const result2 = add(2, 3);
console.log(result2);

function divide(num1, num2) {
  return num1 / num2;
}
function suprise(operator) {
  const result = operator(2, 3);
  console.log(result);
}

suprise(divide);
