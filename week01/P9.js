'use strict';

import { question } from 'readline-sync';

// qusestion은 입력받고 consol.log는 출력한다
// window powershell에서 한글 깨질 때 [System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8 선언 후 시작

// 문제9 사용자로부터 일수(날짜 수)를 입력 받아서 그 일수까지 몇 시간, 몇 분, 몇 초가 남았는지 출력하라.

const days = Number(question('날짜를 입력하세요:'));
const h = days * 24;
const m = h * 60;
const s = m * 60;

console.log(`${days} 일 까지 남은 시간은`);
console.log(`${h} 시간 또는`);
console.log(`${m} 분 또는`);
console.log(`${s} 초 남았습니다`);
