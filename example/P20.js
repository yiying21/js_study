'use strict';

import { question } from 'readline-sync';

// qusestion은 입력받고 consol.log는 출력한다
// window powershell에서 한글 깨질 때 [System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8 선언 후 시작

// 문제20) 사용자에게 이름을 요청하고 그 이름의 길이를 출력하라.

const name = question('이름이 무엇입니까?');

console.log(`${name}, 길이(공백포함): ${name.length}`);
console.log(`${name}, 길이(공백미포함): ${name.replaceAll(' ', '').length}`);
