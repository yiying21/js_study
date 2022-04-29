'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제93) 사용자에게 숫자 다섯 개를 입력하라고 요청한다.
// 입력된 숫자를 정렬하고 사용자에게 표시한다.
// 배열의 숫자들 중 하나를 고르라고 사용자에게 요청한다.
// 입력된 숫자를 배열에서 삭제하고 새로운 배열에 그 값을 저장하라

const array = [];
const newArray = [];

for (let i = 0; i < 5; i++) {
  array.push(questionInt('숫자 입력: '));
}
console.log(array.sort());

const num = questionInt('배열중 숫자 입력: ');
const index = array.indexOf(num);
newArray.push(num);

if (num > -1) {
  array.splice(index, 1);
}

console.log(array.sort());
console.log(newArray.sort());

// .splice() : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경 // Array.prototype.splice()
// 문법 : .splice(시작하는 인덱스 번호, 삭제할 개수 입력), 삭제할 개수 미입력시 시작하는 인덱스 번호부터 모두 삭제됨
