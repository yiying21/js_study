'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제85) 사용자의 이름(영어로)을 입력하라고 요청한 뒤, 그 이름 모음이 몇 개인지 출력하라. (모움 : a, e, i, o, u, ee, oo, aa)

const name = question('이름을 영어로 입력: ');

// 아래 코드는 1개의 문자만 찾을 수 있음
//let count = 0;
//let position = name.indexOf('a');
//
//while (position !== -1) {
//  count++;
//  position = name.indexOf(searchChar, position + 1);
//}
//
//console.log(count);

// 첫 번째 방법 : .match() 사용
const count1 = (name.match(/a/g) || []).length; // 'a'가 있는지 전체 문자에서 찾고 일치하면 길이를 출력. or 'a' 문자가 없는 경우 빈 배열의 길이를 출력한다
const count2 = (name.match(/e/g) || []).length;
const count3 = (name.match(/i/g) || []).length;
const count4 = (name.match(/o/g) || []).length;
const count5 = (name.match(/u/g) || []).length;
const result = count1 + count2 + count3 + count4 + count5;
console.log(`모음의 개수는 총 ${result}개`);

// match() 메서드는 문자열이 정규식과 매치되는 부분을 검색
// 정규식 ? 특정 문자 조합을 찾기 위한 패턴
// 정규 표현식 리터럴. 슬래시로 패턴을 감싸서 작성 (예시) const re = /ab+c/
// 정규 표현식 뒤의 "g"는 전체 문자열을 탐색해서 모든 일치를 반환하도록 지정하는 전역 탐색 플래그

// 두 번째 방법 : .split()으로 문자를 배열화한 후 .filte()을 사용하여 모음을 찾는다
const array = name.split('');
const newArray = array.filter((el) => {
  return el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u';
});
console.log(`모음의 개수는 총 ${newArray.length}개`);
