'use strict';

import { question } from 'readline-sync';

// 문제37) 사용자의 이름을 입력하라고 요청하고, 그 이름의 각 문자를 한 줄에 하나씩 출력하라.

const name = question('이름 입력: ');

for (let i = 0; i < name.length; i++) {
  console.log(name.charAt(i));
}

// .charAt(0) : 문자를 배열화한 후 n번째 문자를 출력
