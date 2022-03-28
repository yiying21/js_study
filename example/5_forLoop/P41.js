'use strict';

import { question, questionInt } from 'readline-sync';

// 문제41) 이름과 숫자를 입력하도록 요청한다.
// 입력한 숫자가 10 미만이면 입력한 숫자만큼 이름을 출력하고 10 이상이면 "Too high" 세 번 출력하라.

const name = question(`이름 입력: `);
const num = questionInt(`숫자 입력: `);

if (num < 10) {
  for (let i = 0; i < num; i++) {
    console.log(`${name}`);
  }
} else if (num > 10) {
  for (let i = 0; i < 3; i++) {
    console.log(`Too high`);
  }
}
