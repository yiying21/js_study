'use strict';

import { question } from 'readline-sync';

// qusestion은 입력받고 consol.log는 출력한다
// window powershell에서 한글 깨질 때 [System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8 선언 후 시작

// 문제23) 사용자에게 자장가의 첫 줄을 입력하라고 요청하고 그 문자열의 길이를 출력한다.
// 사용자에게 범위를 시작할 인덱스 번호를 묻고 범위의 끝 인덱스 번호를 묻는다.
// 그런 후에 그 범위의 텍스트를 출력하라.
// 자바스크립트에서 인덱스는 1이 아닌 0부터 시작한다는 것을 기억하자.

const sing = question('자장가의 첫 줄을 입력: ');
console.log(sing.length);

console.log(sing.charAt(0));
