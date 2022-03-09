'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제44) 파티에 몇 명을 초대하고 싶은지를 묻는다.
// 만약 10 미만을 입력하면 이름을 묻고 "[이름] has been invited"라고 출력하는 것을 입력한 숫자만큼 반복하라.
// 10 이상을 입력하면 "Too many people"이 라는 메시지를 출력하라.

const party = questionInt(`파티에 초대하고 싶은 명수: `);

if (party < 10) {
  const name = question(`이름이 무엇입니까? `);
  for (let i = 0; i < party; i++) {
    console.log(`[${name}] has been invited`);
  }
} else {
  console.log(`Too many people`);
}
