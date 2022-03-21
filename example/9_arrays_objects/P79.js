'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제79) 'nums'라는 이름의 빈 배열을 생성한다.
// 사용자에게 숫자를 입력하라고 요청한다.
// 숫자가 입력되면 그것을 nums 배열 끝에 추가하고 배열을 출력한다.
// 세 개의 숫자를 입력받으면 마지막 숫자를 저장할 것인지 묻는다.
// 만약 "n"이라고 답하면 배열의 마지막 항목을 삭제하고 배열을 출력하라.

const nums = [];
for (let i = 0; i < 3; i++) {
  const user1 = questionInt('아무 숫자 입력: ');
  nums.push(user1);
  console.log(nums);

  if (i == 2) {
    const user2 = question('마지막 숫자를 저장하나요?(y/n): ');
    if (user2 === 'n') {
      nums.pop(nums);
      console.log(nums);
    } else {
      console.log(nums);
    }
  }
}

// 아이템을 맨 뒤에 추가 배열하고 싶을 때 : .push()
// 배열에서 맨 뒤에 있는 아이템을 삭제하고 싶을 때 : .pop()
