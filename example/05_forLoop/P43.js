'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제43) 사용자에게 원하는 카운트 방향(카운트 다운 또는 카운트 업)을 묻는다.
// 만약 업을 선택하면 가장 큰 숫자를 묻고 1부터 그 숫자까지 출력하라.
// 다운을 선택하면 20 미만의 숫자를 요청하고 20부터 그 숫자까지 출력하라.
// 업 또는 다운이 아닌 다른 것을 선택하면 "I don't understand"를 출력하라.

const count = question(`countdown(d) 또는 countup(u) 중 선택하세요: `);

if (count === 'd') {
  const num1 = questionInt(`가장 큰 숫자 입력: `);
  for (let i = 0; i <= num1; i++) {
    console.log(`${i}`);
  }
} else if (count === `u`) {
  const num2 = questionInt(`20미만의 숫자 입력: `);
  for (let i = 20; i >= 0; i--) {
    if (i < num2) {
      break;
    }
    console.log(`${i}`);
  }
} else {
  console.log(`I don't understand`);
}
