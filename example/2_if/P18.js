'use strict';

import { question } from 'readline-sync';

// 문제18) 사용자에게 숫자를 입력하라고 요청하자. 만약 10 미만이면 "Too low"라는 메시지를 표시하라.
// 만약 입력한 숫자가 10에서 20 사이라면 "Correct" 라고 표시하라.
// 그렇지 않다면 "Too high"라고 표시하라.

const num1 = Number(question('숫자 입력: '));

if (num1 < 10) {
  console.log('Too low');
} else if (num1 >= 10 && num1 <= 20) {
  console.log('Correct');
} else {
  console.log('Too high');
}

// && (and) : 모두가 true가 되어야 true 로 리턴함
