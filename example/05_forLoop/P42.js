'use strict';

import { question } from 'readline-sync';
import { questionInt } from 'readline-sync';

// 문제42) total이라는 이름의 변수에 0을 설정하고 숫자를 입력하라는 요청을 다섯 번 반복한다.
// 숫자를 입력할 때마다 입력한 값을 total에 더할 것인지를 묻는다.
// 더하길 원한다는 답을 하면 total에 그 값을 더하고, 그렇지 않다면 더하지 않는다.
// 다섯 개의 숫자가 모두 입력되면 total을 출력하라.

let total = 0;

for (let i = 0; i < 5; i++) {
  let num = questionInt(`숫자 입력:`);
  let plus = question(`total에 더할건가요? (y/n)`);
  if (plus === 'y') {
    total = total + num;
  }
}
console.log(`total 합계 : ${total}`);

// for 반복문을 사용하여 순차적으로 더하기 합계 진행시 초기 변수(let total = 0;)를 선언 후 for 문으로 (total = total + num;) 동작 정의
