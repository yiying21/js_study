'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제98) 096번 프로그램의 2차원 배열을 이용하여 사용자에게 표시할 행을 요청하고 그 행을 출력한다.
// 새로운 값을 입력하라고 요청하고 그것을 표시한 행에 추가하고 그 행을 다시 출력하라.

const array = [
  [2, 5, 8],
  [3, 7, 4],
  [1, 6, 9],
  [4, 2, 0],
];

const row = questionInt('표시할 행을 입력: ');
console.log(array[row]);

const newRow = questionInt('새로운 값 입력: ');
array[row].push(newRow);
console.log(array[row]);

// 이차원 배열의 행을 2로 지정
// const row = 5;
// const column = 5;

// const arr = new Array(row); // [empty x 2]
// for (let i = 0; i < column; i++) {
//   arr[i] = new Array(2);
// }
// console.log(arr); // [[empty x 2], [empty x 2]]
