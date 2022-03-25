'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제86) 사용자에게 새로운 비밀번호를 입력하라고 요청하고, 한 번 더 입력하라고 요청한다.
// 입력한 두 개의 비밀번호가 일치하면 "Thank you'"라고 출력한다.
// 만약 입력한 문자는 서로 일치하는데 대소문자가 틀리다면 "They must be in the same case"라고 출력한다.
// 문자가 일치하지 않는다면 "Incorrect" 메시지를 출력하라.

const pass1 = question('문자 포함 비밀번호 입력: ');
const pass2 = question('비밀번호 한 번더 입력: ');

if (pass1 === pass2) {
  console.log('Thank you');
  // 첫번째 코드를 통과하지 않았을 때 다음 코드↓를 실행한다.
} else if (pass1.toUpperCase() === pass2.toUpperCase()) {
  console.log('They must be in the same case');
} else {
  console.log('Incorrect');
}
