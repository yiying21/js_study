'use strict';

import { question } from 'readline-sync';

// 문제48) 사용자가 파티에 초대하고 싶은 사람의 이름을 입력하라고 요청 한다.
// 그 다음에, "[이름] has now been invited"라는 메시지를 출력하고 카운트에 1을 더한다.
// 다른 사람을 더 초대하고 싶은 지를 묻고 더 이상 파티에 초대하고 싶은 사람이 없을 때까지 반복한다.
// 초대하고 싶은 사람이 없다면 몇 명이 파티에 참석하는지를 표시하라.

let again = `y`;
let count = 0;

while (again === `y`) {
  let name1 = question(`파티에 초대하고 싶은 사람 이름: `);
  console.log(`[${name1}] has now been invited`);
  count = count + 1;
  again = question(`더 초대하고 싶나요?(y/n)`);
}
console.log(`파티에 참석하는 명수는 총 ${count}명`);
