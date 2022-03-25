'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제81) 가장 좋아하는 과목 이름을 입력받고 각 문자 뒤에 '-'를 붙여서 출력하라.

const subject = question('좋아하는 과목 영어로 입력: ');
let subjectString = ''; // 스트링을 담을 빈 문자열의 변수를 만든다
for (let i = 0; i < subject.length; i++) {
  subjectString += `${subject.charAt(i)}-`; // subjectString = subjectString + `${subject.charAt(i)}-`; // 빈 문자열에 더한다.
}
console.log(subjectString);

// .charAt(0) : 문자를 배열화한 후 n번째 문자를 출력
