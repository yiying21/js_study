'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제58) 임의로 생성된 두 개의 정수를 더하는 다섯 개의 질문(즉, [숫자1] + [숫자2])이 나오는 수학 퀴즈를 만들자.
// 사용자에게 답을 입력하라고 요청하고 정답을 맞히면 점수를 증가하라.
// 퀴즈가 끝나면 다섯 문제 중에 몇 개를 맞혔는지 출력하라.

let count = 0;

for (let i = 0; i < 5; i++) {
  const randomNum1 = Math.floor(Math.random() * 10);
  const randomNum2 = Math.floor(Math.random() * 10);
  const quiz = questionInt(`${randomNum1} + ${randomNum2} = `);
  const sum = randomNum1 + randomNum2;
  if (quiz === sum) {
    count = count + 1;
  }
}
console.log(`정답을 맞춘 횟수는 ${count}회`);
