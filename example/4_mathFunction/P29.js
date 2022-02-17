'use strict';

import { question } from 'readline-sync';

// 문제29) 사용자에게 500 이상의 정수를 입력하라고 요청한다.
// 입력받은 숫자의 제곱근을 구하고 소수점 둘째자리까지 출력하라.

const num = Number(question('500 이상의 정수를 입력: '));

console.log((num ** 2).toFixed(2));
console.log(Math.sqrt(num).toFixed(2)); // 특정숫자의 제곱근을 소수점 2자리까지 반올림 출력

// Math.pow 는 특정 숫자의 거듭제곱 값을 계산해주는 함수
// - 문법 : Math.pow([대상 숫자], [거듭제곱 횟수]);

// Math.sqrt 는 특정 숫자의 제곱근 값을 계산해주는 함수
// - 문법 : Math.sqrt([대상 숫자]);
