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
