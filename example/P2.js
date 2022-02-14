'use strict';

import { question } from 'readline-sync';

// 문제2 사용자의 이름을 입력받은 다음, 사용자의 성을 입력받아서 다음과 같이 출력하라.
// Hello [이름] [성]

const lastname = question('이름이 무엇입니까');
const firstname = question('성이 무엇입니까');

console.log(`Hello ${firstname} ${lastname}`);
