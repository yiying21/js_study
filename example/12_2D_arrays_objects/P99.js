'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제99) 이전 프로그램을 변경하여 어떤 행을 출력할지 사용자에게 묻는다. 입력받은 행을 출력한다.
// 열을 선택하라고 요청하고 그 행에서의 해당 열을 출력한다.
// 그 값을 변경하고 싶은지 사용자에게 묻고, 그러길 원한다면 새로운 값을 입력받아 변경한다.
// 마지막으로 그 행 전체를 다시 출력하라.

const array = [
  [2, 5, 8],
  [3, 7, 4],
  [1, 6, 9],
  [4, 2, 0],
];

const row = questionInt('어떤 행을 출력할까요? ');
console.log(array[row]);

const col = questionInt('선택한 행의 열을 선택하세요: ');
console.log(`${row} 행의 ${col} 열의 숫자는 ${array[row][col]}`);

const changeCol = question('그 값을 변경하고 싶나요?(y/n): ');
if (changeCol === 'y') {
  const newCol = questionInt('새로운 값 입력: ');
  array[row][col] = newCol; // 해당 값을 newCol 값으로 대체한다
  console.log(array[row]); // 대체된 값으로 변경 후 행을 출력한다
} else {
  console.log(array[row]);
}
