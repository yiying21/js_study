'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제80) 사용자에게 이름을 입력하라고 요청하고 입력된 이름의 길이를 출력한다.
// 그런 다음, 성을 입력 하라고 요청하고 성의 길이를 출력한다
// 성과 이름 사이에 공백 하나를 두어 결합하고 그 결과를 출력한다.
// '마지막으로, 공백을 포함한 전체 이름의 길이를 출력하라.

const lastName = question('이름 입력: ');
console.log(`이름 길이: ${lastName.length}`);
const firstName = question('성 입력: ');
console.log(`성 길이: ${firstName.length}`);
const name = lastName.concat(' ', firstName);
console.log(`이름: ${name}, 길이: ${name.length}`);

// 두가지의 배열을 묶어서 만들고 싶을 때 : .concat()
