'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제56) 1과 10 사이의 정수를 임의로 선택한다.
// 사용자에게 숫자를 입력하라고 요청하고 임의로 선택한 숫자를 입력할 때까지 계속 숫자를 입력하게 하라.

const randomNum = Math.floor(Math.random() * 10 + 1);
console.log(`랜덤값 : ${randomNum}`);

let user = 0;

while (randomNum !== user) {
  user = questionInt('아무 숫자 입력: ');
}
if (user === randomNum) {
  console.log('Good!');
}
