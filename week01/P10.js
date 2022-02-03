'use strict';

import { question } from 'readline-sync';

// qusestion은 입력받고 consol.log는 출력한다
// window powershell에서 한글 깨질 때 [System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8 선언 후 시작

// 문제10 1킬로그램은 2.204 파운드다.몸무게를 킬로그램 단위로 입력받아서 파운드로 변환하여 출력하라.

const kilo = question('몸무게를 입력하세요:');
const pound = Number(kilo) * 2204;

console.log(pound, '파운드');
