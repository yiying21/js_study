'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제92) 두 개의 빈 배열을 생성한다. 하나에는 사용자가 입력할 숫자 세 개를 담을 것이고, 다른 하나에는 다섯 개의 임의의 숫자를 담을 것이다.
// 두 개의 배열을 큰 배열 하나로 결합한다.
// 결합한 배열을 정렬하고 각 항목을 한 줄에 하나씩 출력하라.

const array1 = [];
const array2 = [];

// 배열에 랜덤 생성으로 하는게 좋다

for (let i = 0; i < 3; i++) {
  array1.push(questionInt('숫자 세개 입력: '));
}

for (let i = 0; i < 5; i++) {
  array1.push(questionInt('숫자 다섯개 입력: '));
}

const array3 = array1.concat(array2);
array3.sort().forEach((re) => console.log(re)); // .sort() 사용해서 정렬한 후 한 줄에 하나씩 출력

// concat() : 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환 // Array.prototype.concat()
// .sort() : 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환, 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따름
