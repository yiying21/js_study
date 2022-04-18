'use strict';

import { questionInt } from 'readline-sync';

// 문제27) 사용자에게 소수점 이하 자릿수가 많은 숫자를 입력 하도록 요청한다.
// 이 숫자에 2를 곱한 결과를 출력하라.

const num = questionInt('소수점 이하 자릿수가 많은 숫자 입력: ');

console.log(Math.round(num * 2)); // 소수점 올림 출력 (Math.round() 함수 사용)
console.log(Math.floor(num * 2)); // 소수점 버림 출력 (Math.floor() 함수 사용)

console.log((num * 2).toFixed(3)); // 소수점 3자리까지 반올림 출력 (.toFixed() 함수 사용)
console.log((num * 2).toPrecision(3)); // 소수점 2자리까지 반올림 출력 (.toPrecision() 함수 사용)
