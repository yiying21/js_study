'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제34) 다음과 같은 메시지를 표시한다.
// 1) Square
// 2) Triangle
// Enter a number:
// 만약 사용자가 1을 입력하면 한 면의 길이를 요청하여 사각형의 넓이를 구하여 출력하라.
// 만약 2를 입력하면 밑변과 높이를 요청하여 삼각형의 넓이를 구하여 출력 하라.
// 다른 것을 입력하면 적절한 오류 메시지가 출력 되도록 한다.

const square = '1) Square ';
const triangle = '2) Triangle ';
const str3 = questionInt('Enter a number: ');

if (str3 == 1) {
  const lenght = questionInt(`한 면의 길이 입력: `);
  console.log(`${square} : ${lenght ** 2}`);
} else if (str3 == 2) {
  const base = questionInt(`밑변 입력: `);
  const height = questionInt(`높이 입력: `);
  console.log(`${triangle} : ${(base * height) / 2}`);
} else {
  console.log(`Error`);
}

// 정사각형의 넓이 : 한 변의 길이 X 한 변의 길이
// 삼각형의 넓이 : 밑변 x 높이 / 2
