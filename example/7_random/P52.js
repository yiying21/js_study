'use strict';

import { question } from 'readline-sync';

// 문제52) 1부터 100(포함) 사이의 임의의 정수를 출력하라.

console.log(Math.floor(Math.random() * 100 + 1));

// Math.random() : 0 이상 1 미만의 부동소숫점 의사 난수.
// Math.floor() : 주어진 숫자와 같거나 작은 정수값 중에서 가장 큰 수를 반환.(반내림)
// 구간 설정을 위해서는 >> x 최대숫자 + 1 을 해주어야 함 (+1을 안해주면 0~최대숫자로 설정됨)
