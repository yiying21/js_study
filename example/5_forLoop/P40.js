'use strict';

import { questionInt } from 'readline-sync';

// 문제40) 50 미만의 숫자를 입력하도록 요청한다.
// 50부터 입력한 숫자까지 카운트 다운하면서 숫자를 출력하되, 입력한 숫자까지 출력 되도록 하라.

const num = questionInt(`50미만의 숫자 입력: `);

for (let i = 50; i > 0; i--) {
  if (i < num) {
    break;
  }
  console.log(`${i}`);
}

// 카운트다운은 i 값에 지정된 값을 먼저 입력하여 진행
