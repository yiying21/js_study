'use strict';

import { question } from 'readline-sync';

// 문제4 사용자로부터 2개의 숫자를 입력 받아서 더한 결과를 다음과 같이 출력하라
// The total is [결과]

const num1 = Number(question('첫번째 숫자를 입력:'));
const num2 = Number(question('두번째 숫자를 입력:'));

console.log(`The total is ${num1 + num2}`);
