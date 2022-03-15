'use strict';

import { question } from 'readline-sync';

// 문제69) 다섯 개의 국가 이름을 담고 있는 배열을 만들고 배열 전체를 출력하라.
// 표시된 국가 이름들 중 하나를 입력하라고 사용자에게 요청하고,
// 입력된 국가 이름의 인덱스 번호(즉, 목록에서의 위치)를 출력하라.

const country = ['korea', 'USA', 'japan', 'china', 'UK'];
console.log(country);
const user = question('표시된 국가중 하나를 입력: ');
console.log(country.indexOf(user));

// 배열안에 어떤 아이템이 몇 번째 인덱스에 있는지 알고 싶을 때 : .indexOf(검색할 아이템명)
