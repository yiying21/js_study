'use strict';

import { question } from 'readline-sync';

// 문제11 사용자로부터 100이 넘는 숫자를 입력받고 10 미만의 숫자 하나를 입력받은 후, 작은 숫자가 큰 숫자 안에 몇번 들어가는지 사용자 친화적인 형식으로 출력하라.

const big = Number(question('100 이상 숫자를 입력:'));
const small = Number(question('10미만 숫자를 입력:'));
const result = Math.floor(big / small);

console.log(`${big} 안에 ${small} 가 ${result} 번`);
