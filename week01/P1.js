'use strict';

import { question } from 'readline-sync';
// qusestion은 입력받고 consol.log는 출력한다
// window powershell에서 한글 깨질 때 [System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8 선언 후 시작

// 문제1 사용자의 이름을 입력 받아서 다음과 같이 출력하라.
// Hello [이름]

const name = question('이름이 무엇입니까?');

console.log('hello ', name);
