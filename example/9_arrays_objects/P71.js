'use strict';

import { question } from 'readline-sync';

// 문제71) 두 개의 스포츠 이름을 담고 있는 배열을 생성하라.
// 사용자에게 좋아하는 스포츠가 무엇인지 물어보고 그것을 배열 끝에 추가하라.
// 배열을 정렬하고 출력하라.

const sports = ['baseball', 'football'];
const favorite = question('좋아하는 스포츠 입력: ');
const add = sports.push(favorite);
console.log(add);
console.log(sports);

// 아이템을 맨 뒤에 추가 배열하고 싶을 때 : .push()
// Array.prototype.push()
// 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환 : sort()
console.log(sports.sort());
