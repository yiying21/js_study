'use strict';

import { question } from 'readline-sync';

// 문제73) 사용자에게 좋아하는 음식 네 개를 입력하도록 요청하고 그것들은 인덱스 번호 1부터 시작하는 객체에 저장한다.
// 인덱스 번호와 항목이 모두 표시되도록 객체를 출력한다.
// 사용자에게 제거하고 싶은 항목을 묻고 그것을 제거한다.
// 남아 있는 데이터를 정렬하고 객체를 다시 출력하라.

const foods = [];
for (let i = 1; i < 5; i++) {
  const food = question('좋아하는 음식 입력: ');
  foods[i] = food;
}
foods.forEach((food, index) => console.log([`음식:${food}, 번호: ${index}`]));

const disLike = question('위 음식 중 삭제하고 싶은 음식 입력: ');
foods.splice(foods.indexOf(disLike), 1);
console.log(foods);

// 배열 안에 어떤 아이템이 몇 번째 인덱스에 있는지 알고 싶을 때 : .indexOf(검색할 아이템명)
// .splice(삭제를 시작할 인덱스 번호, 삭제할 개수), splice는 배열 자체를 수정하여 리턴하는 함수
