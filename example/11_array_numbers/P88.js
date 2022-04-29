'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제88) 다섯 개의 정수를 입력받아 배열에 저장한다. 정렬을 한 후 역순으로 표시하라.

let num = [];
for (let i = 0; i < 5; i++) {
  num.push(questionInt('숫자 입력: '));
}
num.sort();
console.log(num.reverse());

// .reverse() : 배열의 순서를 거꾸로(역순) 배열 // Array.prototype.reverse()
// .sort() : 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환, 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따름

// 다른 예시
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// 출력값 : [ 'Dec', 'Feb', 'Jan', 'March' ]
