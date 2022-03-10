'use strict';

import { question } from 'readline-sync';

// 문제49) compnum이라는 이름의 변수를 생성하고 50을 설정한다.
// 사용자에게 숫자를 입력하라고 요청하고 입력한 값이 compnum과 동일하지 않다면 입력한 값이 높은지 낮은지를 알려주고 다시 맞춰보라고 묻는다.
// 만약 compnum의 값과 일치하면 "Well done, you took [카운트] attempts"라는 메시지를 출력하라.

let compnum = 50;
let guess = question(`숫자 입력: `);
let count = 1;

while (guess != compnum) {
  if (guess < compnum) {
    console.log(`too low!`);
  } else {
    console.log(`too high!`);
  }
  count = count + 1;
  guess = question(`다시 숫자 입력: `);
}
console.log(`Well done, you took [${count}] attempts`);
