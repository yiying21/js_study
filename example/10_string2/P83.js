'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제83) 사용자에게 대문자로 메시지를 입력하라고 요청한다.
// 만약 메시지 에 소문자가 있다면 모두 대문자로 입력할 때까지 계속해서 다시 입력하라고 요청한다.

let letter = question('대문자와 소문자 섞어서 입력: ');
let i = true;

while (i === true) {
  if (letter !== letter.toUpperCase()) {
    letter = question('대문자로만 입력: ');
  } else {
    console.log('good!!');
    break;
  }
}
