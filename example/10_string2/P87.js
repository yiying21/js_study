'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제87) 단어를 입력하라고 요청한 뒤, 그 단어의 문자를 한 줄 에 하나씩 거꾸로 출력하라.
// 예를 들어, 'Hello'라고 입 력했다면 다음과 같이 출력되어야 한다.
// Enter a word: Hello
// o
// l
// l
// e
// H

const word = question('아무 단어 입력: ');
const arry = word.split('').reverse(); // 문자열을 배열로 변환하는 .split() 사용 // 배열을 .reverse() 함수로 거꾸로 배열
arry.forEach((re) => console.log(re)); // arry의 배열 안에 들어있는 value 들마다 내가 전달한 함수를 출력

// 배열을 거꾸로 만들기 : .reverse();
// 주어진 string을 배열로 변환하기 : .split()
// .split() : 괄호()안에 구분자,limit를 전달함 (limit는 옵션)
