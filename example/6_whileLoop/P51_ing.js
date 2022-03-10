'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제51) "10 green bottles" 노래(영국의 유명한 동요)를 이용하여
// "There are [숫자] green bottles hanging on the wall, [] green bottles hanging on the wall, and if 1 green bottle should accidentally fall"이라는 가사를 출력하고,
// "how many green bottles will be hanging on the wall?"이라고 질문한다.
// 만약 사용자가 맞히면 "There will be [숫자] green bottles hanging on the wall"이라는 메시지를 출력하고, 틀리면 "No, try again" 메시지를 출력한 뒤 맞출 때까지 반복한다.
// green bottle의 개수가 0이 되면 "There are no more green bottles hanging on the wall"이라는 메시지를 출력하고 종료한다

let num = 10;

while (num > 0) {
  console.log(
    `There are [${num}] green bottles hanging on the wall, [${num}] green bottles hanging on the wall, and if 1 green bottle should accidentally fall`
  );
  num = num - 1;
  let anwer = questionInt(
    `how many green bottles will be hanging on the wall? `
  );
  if (anwer === num) {
    console.log(`There will be [${num}] green bottles hanging on the wall`);
  } else {
    while (anwer !== num) {
      anwer = `No, try again`;
    }
  }
}
console.log(`There are no more green bottles hanging on the wall`);

// 모르겠...
