'use strict';

import { question } from 'readline-sync';

// 문제20) 사용자에게 이름을 요청하고 그 이름의 길이를 출력하라.

const name = question('이름이 무엇입니까?');

console.log(`${name}, 길이(공백포함): ${name.length}`);
console.log(`${name}, 길이(공백미포함): ${name.replaceAll(' ', '').length}`);

// .replaceAll() : 문자열을 선택한 후 원하는 문자로 변환하는 함수
