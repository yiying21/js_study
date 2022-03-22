'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제82) 시 한 구절을 사용자에게 표시하고 시작 인덱스와 마지막 인덱스를 입력하도록 요청한다.
// 입력한 두 값 사이의 문자를 출력하라.

const poetry = 'a verse of poetry';
const user1 = questionInt('위 구절의 시작 인덱스 입력: ');
const user2 = questionInt('위 구절의 마지막 인덱스 입력: ');

console.log(poetry.slice(user1, user2 + 1));

// slice(삭제할 시작 인덱스 번호, 마지막 인덱스 번호) 단, 마지막 인덱스 번호는 제외되므로 +1 해줘야 함, slice는 배열에서 원하는 부분만 리턴하는 함수
