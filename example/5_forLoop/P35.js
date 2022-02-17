'use strict';

import { question } from 'readline-sync';

// 문제35) 사용자의 이름을 입력하라고 요청한 뒤, 그 이름을 세 번 출력하라.

const name = question('이름 입력: ');

for (let i = 0; i < 3; i++) {
  console.log(name);
}
