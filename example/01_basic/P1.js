'use strict';

import { question } from 'readline-sync';

// 문제1 사용자의 이름을 입력 받아서 다음과 같이 출력하라.
// Hello [이름]

const name = question('이름이 무엇입니까');

console.log(`Hello ${name}`);
