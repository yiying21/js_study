'use strict';

import { question } from 'readline-sync';

// 문제10 1킬로그램은 2.204 파운드다.몸무게를 킬로그램 단위로 입력받아서 파운드로 변환하여 출력하라.

const kilo = Number(question('몸무게를 입력:'));
const pound = kilo * 2204;

console.log(`${kilo} kg은 ${pound} pound 입니다`);
