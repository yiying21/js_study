'use strict';

import { question } from 'readline-sync';

// qusestion은 입력받고 consol.log는 출력한다
// window powershell에서 한글 깨질 때 [System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8 선언 후 시작

// 문제7 사용자로부터 이름과 나이를 입력 받아서 나이에 1을 더한 후 다음과 같이 출력하라.
// [이름] next birthday you will be [새로운 나이]

const name = question('이름이 무엇입니까');
const age = question('나이는 몇 살입니까');
const newage = Number(age) + 1;

console.log(`${name} next birthday you will be ${newage}`);
