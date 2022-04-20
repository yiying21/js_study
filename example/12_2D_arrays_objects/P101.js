'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제101) 100번 프로그램을 사용하여 사용자에게 이름과 지역을 입력하라고 요청하고 그와 관련된 데이터를 출력한다.
// 사용자에게 변경하려는 데이터의 이름과 지역을 사용자에게 묻고 매출 수치를 변경할 수 있도록 한다.
// 선택한 이름에 대한 모든 지역의 매출을 출력하라.

const sales = {
  John: { N: 3036, S: 8463, E: 8441, W: 2694 },
  Tom: { N: 4832, S: 6786, E: 4737, W: 3612 },
  Anne: { N: 5239, S: 4802, E: 5820, W: 1859 },
  Fiona: { N: 3904, S: 3645, E: 8821, W: 2451 },
};

// console.log(sales['John']);

const name = question('이름 입력: ');
const area = question('지역 입력: ');
console.log(`${area}지역에 ${name}의 매출은 ${sales[name][area]}`);

const changeName = question('변경하려는 매출의 이름 입력: ');
const changeArea = question('변경하려는 매출의 지역 입력: ');
const changeSales = questionInt('변경하려는 매출액 입력: ');
sales[changeName][changeArea] = changeSales;

console.log(sales[changeName]);
