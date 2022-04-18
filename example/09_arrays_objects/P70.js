'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제70) 사용자에게 숫자를 입력하라고 요청하고, 입력한 위치의 국가 이름이 출력되는 기능을 069번 프로그램에 추가하라.

const country = ['korea', 'USA', 'japan', 'china', 'UK'];
console.log(country);

const user1 = question('표시된 국가중 하나를 입력: ');
console.log(country.indexOf(user1));

const user2 = questionInt('0~4 숫자 입력: ');
console.log(country[user2]);
console.log(country.at(user2));

// 배열안에 어떤 아이템이 몇 번째 인덱스에 있는지 알고 싶을 때 : .indexOf(검색할 아이템명)
// 정수 값을 받아, 배열에서 해당 값에 해당하는 인덱스의 요소를 반환 : at()
