'use strict';

import { question } from 'readline-sync';

// 문제26) 피그 라틴(Pig Latin)은 단어의 첫 자음을 가져와서 단어 끝으로 이동하고 마지막에 'ay'를 추가한다.
// 만약 단어가 모음으로 시작 한다면 단어의 끝에 그냥 'way'를 붙인다.
// 예를 들어, 'pig'라는 단어는 'igpay', 'banana'는 'ananabay', 그리고 'aadvark'는 'aadvarkway'가 된다.
// 사용자에게 단어를 입력받아서 피그 라틴으로 변환하고 소문자로 출력하는 프로그램을 만들어라.

const name1 = question('Pig Latin 입력: ');

if (name1.charAt(0).toUpperCase() != 'A' && 'E' && 'I' && 'O' && 'U') {
  const newName1 = name1.slice(1);
  console.log(`${newName1.replaceAll('ig', 'igPay')}`);
} else {
  console.log(`${name1}way`);
}

const name2 = question('아무 단어 입력: ');
if (name2 != 'Pig Latin') {
  console.log('Pig Latin'.toLowerCase());
}

// 모움 : a, e, i, o, u, ee, oo, aa
// 자음 : g, n, d, l, m, b, s, ng, j, g, ch, c, k, q, t, p, h, f, r, v, x, z, sh, ph, th
// .charAt(0) : 문자를 배열화한 후 0번째 문자를 출력
// .toUpperCase() : 문자를 대문자로 변환
// .slice(1) : 1번째까지 문자를 제거하고 출력
// .replaceAll : 문자열을 선택한 후 원하는 문자로 변환하는 함수
