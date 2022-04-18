'use strict';

import { question } from 'readline-sync';

// 문제76) 사용자에게 파티에 초대할 사람 3명의 이름을 입력하라고 요청하고 배열에 저장한다.
// 모든 이름이 입력되면 추가할 사람이 있는지 묻는다.
// 만약 그렇다면 "n"이라고 답할 때까지 이름을 추가하게 한다.
// "n"이라고 입력하면 파티에 초대한 사람이 몇 명인지 표시하라.

let party = [];
for (let i = 0; i < 3; i++) {
  party.push(question('파티에 초대할 이름 입력: '));
}

while (true) {
  const addName = question('추가할 사람이 있나요?(y/n) ');
  if (addName === 'y') {
    const newName = question('파티에 초대할 사람 추가 입력: ');
    party.push(newName);
    console.log(party);
  } else if (addName === 'n') {
    console.log(`파티에 초대한 사람은 총 ${party.length}명`);
    break;
  }
}
