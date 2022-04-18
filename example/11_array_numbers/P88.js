'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제88) 다섯 개의 정수를 입력받아 배열에 저장한다. 정렬을 한 후 역순으로 표시하라.

let num = [];
for (let i = 0; i < 5; i++) {
  num.push(questionInt('숫자 입력: '));
}
console.log(num.reverse());

// .reverse() : 배열의 순서를 거꾸로(역순) 배열 // Array.prototype.reverse()
