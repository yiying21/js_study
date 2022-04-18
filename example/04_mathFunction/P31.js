'use strict';

import { questionInt } from 'readline-sync';

// 문제31) 사용자에게 원의 반지름(원의 중심점으로부터 끝까지의 길이)을 입력하도록 요청한다.
// 원의 넓이(π * 반지름의 2제곱)를 계산하여 출력하라

const radius = questionInt('원의 반지름 입력: ');
console.log(Math.PI * radius ** 2);

// ** = 거듭제곱 (2 ** 3은 8)
