'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제97) 사용자에게 행과 열을 선택하라고 요청하고, 096번 프로그램의 2차원 배열을 이용하여 해당 값을 출력하라.

const array = [
  [2, 5, 8],
  [3, 7, 4],
  [1, 6, 9],
  [4, 2, 0],
];

const row = question('행을 선택: ');
const col = question('열을 선택: ');
console.log(`${row} 번째 행에 ${col} 번째 열의 숫자는 ${array[row][col]}`);
