'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제91) 다섯 개의 숫자(이 숫자들 중 2개는 반복 되어야 함)를 담고 있는 배열을 생성한다.
// 사용자에게 배열 전체를 출력한다.
// 사용자에게 배열 속에 있는 숫자들 하나를 입력하라고 요청한 뒤,
// 입력한 숫자가 배열에 몇 개 있는지 메시지를 표시하라.

let nums = [];
for (let i = 0; i < 5; i++) {
  nums.push(questionInt('중복 숫자 포함 5개 숫자 입력: '));
}
console.log(nums);

const num = questionInt('배열 속에 있는 숫자중 1개 입력: '); // 선택한 배열에서 몇개인지 카운트는 모르겠..
let count = nums.reduce((allNum, oneNum) => {
  if (oneNum in allNum) {
    allNum[oneNum]++;
  } else {
    allNum[oneNum] = 1;
  }
  return allNum;
}, {});
console.log(count);
