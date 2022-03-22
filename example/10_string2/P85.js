'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제85) 사용자의 이름(영어로)을 입력하라고 요청한 뒤, 그 이름 모음이 몇 개인지 출력하라.

const name = question('이름을 영어로 입력: ');

//let count = 0;
//let position = name.indexOf('a');
//
//while (position !== -1) {
//  count++;
//  position = name.indexOf(searchChar, position + 1);
//}
//
//console.log(count);

const count1 = (name.match(/a/g) || []).length;
const count2 = (name.match(/e/g) || []).length;
const count3 = (name.match(/i/g) || []).length;
const count4 = (name.match(/o/g) || []).length;
const count5 = (name.match(/u/g) || []).length;
const result = count1 + count2 + count3 + count4 + count5;

console.log(result);

// 모움 : a, e, i, o, u, ee, oo, aa
// match() 메서드는 문자열이 정규식과 매치되는 부분을 검색합니다.

// 어거지 같은데...
