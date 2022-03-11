'use strict';

import { questionInt } from 'readline-sync';

// 문제46) 사용자에게 숫자를 입력하라고 요청한다.
// 입력한 값이 5를 넘을 때까지 숫자를 입력하라고 요청하며,
// 5를 넘으면 "The last number you entered was a [숫자]"를 출력하고 프로그램을 종료하라.

let num = 0;

while (num <= 5) {
  num = questionInt(`숫자 입력: `);
}
console.log(`The last number you entered was a [${num}]`);

// while 문안에 const나 let을 사용하는 것과 안하는 것의 차이가 뭔지..?
