'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제84) 사용자에게 영어 단어를 입력하라고 요청한다. 처음 두 개의 문자만 대문자로 출력하라.

const word = question('영어 단어 입력: ');
const result =
  word.charAt(0).toUpperCase() + word.charAt(1).toUpperCase() + word.slice(2);
console.log(result);

// .charAt(0) : 문자를 배열화한 후 n번째 문자를 출력
// slice(삭제할 시작 인덱스 번호, 마지막 인덱스 번호) 단, 마지막 인덱스 번호는 제외되므로 +1 해줘야 함, slice는 배열에서 원하는 부분만 리턴하는 함수

// 약간 어거지 같기도 한데..
