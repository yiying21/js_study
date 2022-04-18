'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제90) 사용자에게 숫자를 입력하라고 요청한다. 10에서 20 사이의 숫자를 입력한다면 배열에 저장한다.
// 다른 값이라면 "Outside the range"라는 메시지를 출력한다.
// 다섯 개의 숫자가 입력되었다면 "Thank you" 메시지를 출력하고 배열의 항목을 한 줄에 하나씩 출력하라

let arrays = [];
while (arrays.length < 5) {
  const num = questionInt('숫자 입력: ');
  if (num >= 10 && num <= 20) {
    arrays.push(num);
  } else {
    console.log('Outside the range');
  }
}
console.log('Thank you');
arrays.forEach((re) => console.log(re));
