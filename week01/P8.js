'use strict';

import { question } from 'readline-sync';

// qusestion은 입력받고 consol.log는 출력한다
// window powershell에서 한글 깨질 때 [System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8 선언 후 시작

// 문제8 계산서의 총 가격과 몇 명이 같이 식사를 했는지 입력받는다. 총 가격을 인원수로 나누고 각 사람이 얼마씩 내야 하는지 출력하라.

const bill = question('총 가격은 얼마입니까?');
const people = question('몇 명이 식사했습니끼?');
const each = bill / people;

console.log('각각 내야할 금액은', each, '원');
