'use strict';

import { question } from 'readline-sync';

// 문제5 사용자로부터 3개의 숫자를 입력받는다.첫번째 숫자와 두번째 숫자를 더한 값에 세번째 숫자를 곱한 결과를 다음과 같이 출력하라.
// The answer is [결과]

const num1 = Number(question('첫번째 숫자를 입력:'));
const num2 = Number(question('두번째 숫자를 입력:'));
const num3 = Number(question('세번째 숫자를 입력:'));
const result = (num1 + num2) * num3;

console.log(`The answer is ${result}`);
