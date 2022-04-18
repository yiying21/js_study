'use strict';

import { questionInt } from 'readline-sync';

// 문제39) 1부터 12 사이의 값을 입력하도록 요청한 뒤, 그 숫자에 대해 12까지의 곱셈표를 출력하라

const num = questionInt('1~12사이 숫자 입력: ');

for (let i = 1; i < 13; i++) {
  const answer = i * num;
  console.log(`${num} * ${i} = ${answer} `);
}
