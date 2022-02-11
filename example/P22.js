'use strict';

import { question } from 'readline-sync';

// qusestion은 입력받고 consol.log는 출력한다
// window powershell에서 한글 깨질 때 [System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8 선언 후 시작

// 문제22) 사용자에게 이름과 성을 소문자로 입력하라고 요청한다.
// 각 첫 문자만 대문자로 변경하고 이름과 성 사이에 공백을 하나 두어 결합한 후에 그 결과를 출력하라.

const lastName = question('이름을 소문자로 입력: ');
const firstName = question('성을 소문자로 입력: ');

const lastName1 = lastName.charAt(0).toUpperCase() + lastName.slice(1);
const firstName1 = firstName.charAt(0).toUpperCase() + firstName.slice(1);

console.log(lastName1 + ' ' + firstName1);

// lastName.slice(1) : 1번째까지 문자를 제거하고 출력
