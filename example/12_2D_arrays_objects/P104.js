'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제104) 네 명의 이름과 나이 그리고 신발 사이즈를 입력받은 후, 목록에서 제거하고 싶은 사람의 이름을 입력하라고 한다.
// 입력된 이름의 데이터를 삭제하고 나머지 데이터를 한 줄에 하나씩 출력하라.

const list = {};

for (let i = 0; i < 4; i++) {
  const name = question(`이름 입력: `);
  const age = questionInt(`나이 입력: `);
  const size = questionInt(`신발 사이즈 입력: `);
  list[name] = { age: age, size: size };
}

const delName = question('목록에서 제거하고 싶은 이름 입력: ');
delete list[delName];

for (let name in list) {
  console.log(name, list[name]['age'], list[name]['size']);
}

// for in
// 문법 : for (variable in object) { ... }
// 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복

// delete
// 문법 : delete object.property / delete object['property'] (객체의 이름/제거하려는 속성)
// 객체의 속성을 제거합니다. 제거한 객체의 참조를 어디에서도 사용하지 않는다면 나중에 자원을 회수함
