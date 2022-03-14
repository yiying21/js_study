'use strict';

import { question, questionInt } from 'readline-sync';

// 문제57) 056번 프로그램을 업데이트하여 사용자가 입력한 숫자가 큰지 작은지를 알려주고 다시 숫자를 고르게 하라.

const randomNum = Math.floor(Math.random() * 10 + 1);
console.log(`랜덤값 : ${randomNum}`);

let user = 0;

while (user !== randomNum) {
  user = questionInt('아무 숫자 입력: ');
  if (user > randomNum) {
    console.log('too high!');
  } else if (user < randomNum) {
    console.log('too low!');
  } else {
    console.log('good!');
  }
}
