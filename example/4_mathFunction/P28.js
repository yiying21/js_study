'use strict';

import { question } from 'readline-sync';

// 문제28) 027번 프로그램을 업데이트하여 소수점 둘째 자리까지 출력하라.

const num = Number(question('소수점 이하 자릿수가 많은 숫자 입력: '));

console.log((num * 2).toPrecision(3)); // 가수+소수를 함께 카운팅, 소수점 2자리까지 반올림 출력 (.toPrecision() 함수 사용)
console.log((num * 2).toFixed(3)); // 소수점 3자리까지 반올림 출력 (.toFixed() 함수 사용)

const num = 1.23345665;
const changeNum = Math.floor(num * num.pow(10, 3)) / num.pow(10, 3);

console.log;
