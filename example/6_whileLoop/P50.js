'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제50) 사용자에게 10과 20 사이의 숫자를 입력하라고 요청한다.
// 입력한 숫자가 10 이하이면 "Too low"라는 메시지를 출력하고 다시 입력하라고 요청한다.
// 만약 20 이상이면 "Too high" 라는 메시지를 출력하고 다시 입력하라고 요청한다.
// 사용자가 10과 20 사이의 값을 입력할 때까지 이 과정을 반복하고, 10과 20 사이의 값을 입력하면 "Thank you" 라는 메시지를 출력하라.

let num = questionInt(`10 ~ 20사이 숫자 입력: `);

while (num < 10 || num > 20) {
  if (num < 10) {
    console.log(`too low!`);
    num = question(`숫자 다시 입력: `);
  } else {
    console.log(`too high!`);
    num = question(`숫자 다시 입력: `);
  }
}
console.log(`Thank you`);
