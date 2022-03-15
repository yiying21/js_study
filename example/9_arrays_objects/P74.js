'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제74) 열 개의 색상이 담긴 배열을 생성한다.
// 사용자에게 0에서 4 사이의 시작 번호와 5에서 9 사이의 끝 번호를 입력하라고 요청하고
// 입력된 시작 번호부터 끝 번호까지의 색상을 출력하라.

const colors = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const user1 = questionInt('0~4 사이 시작 번호 입력: ');
const user2 = questionInt('5~9 사이 끝 번호 입력: ');
const result = colors.slice(user1, user2 + 1);

console.log(result);

// slice(삭제할 시작 인덱스 번호, 마지막 인덱스 번호) 단, 마지막 인덱스 번호는 제외되므로 +1 해줘야 함, slice는 배열에서 원하는 부분만 리턴하는 함수
