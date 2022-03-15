'use strict';

import { question } from 'readline-sync';

// 문제72) 교과목 여섯 개가 담긴 배열을 생성하라.
// 이들 중 사용자가 좋아하지 않는 과목을 묻고 그 과목을 배열에서 삭제한 후에 배열을 다시 출력하라.

const subjects = ['mathematics', 'science', 'english', 'art', 'physics'];
const reluctant = question('싫어하는 과목 입력: ');

// .filter() 사용
const array = subjects.filter((subject) => subject !== reluctant).join(' , ');
console.log(array);

// .splice() 사용
for (let i = 0; i < subjects.length; i++) {
  if (subjects[i] === reluctant) {
    subjects.splice(i, 1);
    i--;
  }
}
console.log(subjects);

// 배열에서 마지막 요소를 제거하고 그 요소를 반환 : .pop()
// 맨 앞에서부터 아이템을 삭제하고 싶을 때 : .shift()
// 아이템을 지정된 포지션에서 삭제하고 싶을 떄 : .splice()
// 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환 : .filter()
// 주어진 배열을 string으로 변환하기 : .join()
