'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제102) 네 명의 이름과 나이, 신발 사이즈를 입력하라고 요청한다.
// 입력된 이름들 중 하나를 입력하라고 요청하고 입력된 이름의 나이와 신발 사이즈를 출력하라.

// Objects = {key : value} 의 집합체 // {우리가 접근할 수 있는 변수, 변수가 가지고 있는 값}으로 이루어짐
const list = {};

for (let i = 0; i < 4; i++) {
  const name = question(`이름 입력: `);
  const age = questionInt(`나이 입력: `);
  const size = questionInt(`신발 사이즈 입력: `);
  list[name] = { age: age, size: size }; // 이름에 나이와 사이즈
}
console.log(list);
const name1 = question('입력한 이름중 1개의 이름 입력:');
console.log(list[name1]);

// class List {
//   constructor(name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
//   }
// }
// const totalList = [new List(list)];
