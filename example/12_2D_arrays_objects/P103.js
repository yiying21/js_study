'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제103) 102번 프로그램을 수정하여 모든 사람의 이름과 나이를 출력하라. 단, 신발 사이즈는 출력하지 않는다.

// Objects = {key : value} 의 집합체

const list = {};

for (let i = 0; i < 4; i++) {
  const name = question(`이름 입력: `);
  const age = questionInt(`나이 입력: `);
  const size = questionInt(`신발 사이즈 입력: `);
  list[name] = { age: age, size: size }; // 이름에 나이와 사이즈 표시
}

console.log(list);

for (let name in list) {
  console.log(name, list[name]['age']);
}

// for in 사용
// 문법 : for (variable in object) { ... }
// 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복
