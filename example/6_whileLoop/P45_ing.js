'use strict';

import { questionInt } from 'readline-sync';

// 문제45) total이라는 변수를 0으로 설정한다. total의 값이 50 이하이면 사용자에게 숫자를 입력하라고 요청한다.
// 입력된 숫자를 total에 더하고 "The total is... [total]"이라는 메시지를 출력한다.
// total 의 값이 50을 넘으면 루프를 멈추는 프로그램을 작성하라.

let total = 0;

while (total <= 50) {
  const num = questionInt(`숫자를 입력: `);
  total = total + num;
  console.log(`The total is... [${total}]`);
}

// while 문안에 const나 let을 사용하는 것과 안하는 것의 차이가 뭔지..?
