'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제47) 사용자에게 숫자를 입력하라고 요청한 다음에 다른 숫자를 입력하라고 하자.
// 두 숫자들을 더한 뒤, 또 다른 숫자를 더하고 싶은지 묻고 "y" 라고 입력하면 다른 숫자를 입력받아 더하고 다시 같은 질문을 한다.
// "y"가 아닌 답을 하면 루프를 종료하고 총합을 출력하라.

let total = questionInt(`숫자 입력: `);
let again = `y`;

while (again === `y`) {
  const num1 = questionInt(`다른 숫자 입력: `);
  total = total + num1;
  again = question(`다른 숫자를 더하고 싶나요?(y/n) `);
}
console.log(`The total is ${total}`);
