'use strict';

import { question } from 'readline-sync';

// 문제24) 사용자에게 아무 단어나 입력하라고 하고 그것을 대문자로 출력하라.

const str1 = question('아무 단어나 입력하세요 ');

console.log(str1.toUpperCase());

// .toUpperCase() : 문자를 대문자로 변환
