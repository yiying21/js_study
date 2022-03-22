'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제81) 가장 좋아하는 과목 이름을 입력받고 각 문자 뒤에 '-'를 붙여서 출력하라.

const subject = question('좋아하는 과목 영어로 입력: ');

for (let i = 0; i < subject.length; i++) {
  console.log(`${subject.charAt(i)}-`);
}

// .charAt(0) : 문자를 배열화한 후 n번째 문자를 출력

// 한줄에 출력하는 방법은 잘..
