'use strict';

import { question } from 'readline-sync';

// 문제38) 037번 프로그램을 수정하여 숫자도 입력하도록 요청하자.
// 이름의 각 문자를 한 줄에 하나씩 출력하는 작업을 입력한 숫자만 큼 반복하라.

const name = question('이름 입력: ');
const count = Number(question('숫자 입력: '));

for (let j = 0; j < count; i++) {
  console.log(`부모의 for문. 반복 횟수: ${j}`);
  for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
  }
}

// .charAt(0) : 문자를 배열화한 후 n번째 문자를 출력
