'use strict';

import { question } from 'readline-sync';

// 문제77) 076번 프로그램을 수정하여 초대할 사람들의 이름이 배열에 모두 추가되면 전체 명단을 출력하고 배열에 있는 이름들 중 하나를 입력하라고 요청한다.
// 입력된 이름의 위치(인덱스)를 출력하고 그 사람을 정말로 파티에 초대할 것인지를 묻는다.
// 만약 "n"이라고 답하면 그 항목을 배열서 삭제하고 배열을 다시 출력한다.

const name1 = question('파티에 초대할 1번째 이름 입력: ');
const name2 = question('파티에 초대할 2번째 이름 입력: ');
const name3 = question('파티에 초대할 3번째 이름 입력: ');
let party = [name1, name2, name3];
let count = 0;

while (true) {
  const addName = question('추가할 사람이 있나요?(y/n) ');
  if (addName === 'y') {
    const newName = question('파티에 초대할 사람 추가 입력: ');
    count = party.length + 1;
    party.push(newName);
  } else if (addName === 'n') {
    console.log(`파티에 초대한 사람은 총 ${count}명`);
    break;
  }
  console.log(party);
}

const user1 = question('배열에 이름중 하나 입력: ');
const index = party.indexOf(user1);
const user2 = question(
  `이름: ${user1}, 인덱스 번호: ${index} 를 정말 파티에 초대할거야? (y/n) `
);
if (user2 === 'y') {
  console.log(`${user1}를 포함하여 [${party}] 이다`);
} else if (user2 === 'n') {
  party.splice(index, 1);
  console.log(`${user1}를 뺀 나머지는 [${party}] 이다`);
}
