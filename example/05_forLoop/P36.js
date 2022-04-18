'use strict';

import { question, questionInt } from 'readline-sync';

// 문제36) 035번 프로그램을 수정하여 사용자가 이름과 숫자를 입력하게 하여, 이름을 입력한 숫자만큼 출력하라.
// [System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8

const name = question('이름 입력: ');
const num = questionInt('숫자 입력: ');

for (let i = 0; i < num; i++) {
  console.log(name);
}
