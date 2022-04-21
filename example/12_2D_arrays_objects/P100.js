'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제100) 객체(배열도 사용 가능)를 사용하여 각 사람이 서로 다른 지역에서 달성한 매출을 보여주는 다음의 데이터를 생성하라.

// Objects = {key : value} 의 집합체
// 객체로 했을 때
const sales = {
  John: { N: 3036, S: 8463, E: 8441, W: 2694 },
  Tom: { N: 4832, S: 6786, E: 4737, W: 3612 },
  Anne: { N: 5239, S: 4802, E: 5820, W: 1859 },
  Fiona: { N: 3904, S: 3645, E: 8821, W: 2451 },
};

console.log(sales1);

// 배열로 했을 때
// const sales = [
//   ['name', 'N', 'S', 'E', 'W'],
//   ['John', 3056, 84643, 8441, 2694],
//   ['Tom', 3056, 84643, 8441, 2694],
//   ['Anne', 5239, 4802, 5820, 1859],
//   ['Fiona', 3904, 3645, 8821, 2451],
// ];
