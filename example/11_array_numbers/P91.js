'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제91) 다섯 개의 숫자(이 숫자들 중 2개는 반복 되어야 함)를 담고 있는 배열을 생성한다.
// 사용자에게 배열 전체를 출력한다.
// 사용자에게 배열 속에 있는 숫자들 하나를 입력하라고 요청한 뒤,
// 입력한 숫자가 배열에 몇 개 있는지 메시지를 표시하라.

let nums = [];
let count = 0;

for (let i = 0; i < 5; i++) {
  nums.push(questionInt('중복 숫자 포함 숫자 입력: '));
}
console.log(nums);
let num = questionInt('배열 속에 있는 숫자중 1개 입력: ');

if (nums.includes(num)) {
  // 만약 배열에 내가 입력한 숫자가 true 면 아래 코드를 실행
  for (let element of nums) {
    // nums 배열 안에 들어있는 데이터를 한번씩 순차적으로 할당하여 다음 블럭 실행하는데
    if (element === num) {
      // 요소가 내가 입력한 숫자와 같으면
      count += 1; // 카운트를 +1 시킨다.
    }
  }
  console.log(`${num}은 총 ${count}개`);
} else {
  console.log('입력한 숫자가 없습니다');
}

// .includes() : 배열이 특정 요소를 포함하고 있는지 판별 (true / false) // Array.prototype.includes()
