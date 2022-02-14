'use strict';

import { question } from 'readline-sync';

// 문제8 계산서의 총 가격과 몇 명이 같이 식사를 했는지 입력받는다. 총 가격을 인원수로 나누고 각 사람이 얼마씩 내야 하는지 출력하라.
// Math 는 객체. 뒤에는 Math가 가지고 있는 함수를 표시

const bill = Number(question('총 가격:'));
const people = Number(question('식사한 사람 수'));
const each = Math.round(bill / people);

console.log(`각각 내야할 금액은 ${each} 원`);
