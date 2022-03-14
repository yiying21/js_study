'use strict';

import { question } from 'readline-sync';

// 문제53) 다섯 개의 과일 이름들의 목록에서 임의의 과일을 출력하라.

const fruits = ['사과', '포도', '딸기', '바나나', '배'];
const random = Math.floor(Math.random() * 5); //  Math.floor(Math.random()) 함수 사용
const fruit = fruits[random];

console.log(fruit);

// 그 외 배열 관련
console.log(fruits.length); // 과일 배열의 길이 출력 : 5
console.log(fruits.indexOf('사과')); // 사과의 인덱스 번호 출력 : 0

for (let i = 0; i < fruits.length; i++) {
  // i가 0부터 시작해서 fruits의 길이 5까지 조건 체크
  console.log(fruits[i]); // fruits의 인덱스 i 를 받아서 출력
}

fruits.forEach((fruit, Index) => console.log(fruit, Index)); // 각각의 과일명 및 인덱스 번호 출력
