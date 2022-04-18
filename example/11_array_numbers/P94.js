'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제94) 다섯 개의 숫자들을 가진 배열을 출력한다.
// 숫자들 중 하나를 고르라고 사용자에게 요청한다.
// 사용자가 숫자를 고르면 그 항목의 위치(인덱스)를 출력한다.
// 만약 사용자가 입력한 숫자가 배열 안에 없다면 올바른 숫자를 입력할 때까지 다시 요청하라.

const array = [];

for (let i = 0; i < 5; i++) {
  array.push(questionInt('숫자 입력: '));
}
console.log(array);

let num = questionInt('배열중 숫자 입력: ');
while (true) {
  if (array.includes(num)) {
    console.log(`인덱스 번호 : ${array.indexOf(num)}`);
    break;
  } else {
    console.log('not in array');
    num = questionInt('배열중 숫자 입력: ');
  }
}
