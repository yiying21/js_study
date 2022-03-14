'use strict';

import { question } from 'readline-sync';

// 문제71) 두 개의 스포츠 이름을 담고 있는 배열을 생성하라.
// 사용자에게 좋아하는 스포츠가 무엇인지 물어보고 그것을 배열 끝에 추가하라.
// 배열을 정렬하고 출력하라.

const sports = ['baseball', 'football'];
const favorite = question('좋아하는 스포츠 입력: ');
