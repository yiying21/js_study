'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제89) 정수들을 저장할 배열을 생성한다. 임의의 수 다섯 개를 생성하고 배열에 저장한다. 배열의 항목을 한 줄에 하나씩 출력하라.

let num = [];
for (let i = 0; i < 5; i++) {
  num.push(questionInt('숫자 입력: '));
}
num.forEach((re) => console.log(re));
